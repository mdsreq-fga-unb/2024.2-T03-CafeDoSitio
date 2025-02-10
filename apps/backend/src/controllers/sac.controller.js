import sacService from "../services/sac.service.js";
import nodemailerService from "../services/nodemailer.service.js";
import fs from "fs/promises";

import mongoose from "mongoose";

const createSac = async (req, res) => {
  try {
    const data = JSON.parse(req.body.data);
    const { nomeSobrenome, email, telefone, assunto, mensagem } = data;

    if (!nomeSobrenome || !email || !telefone || !assunto || !mensagem) {
      return res.status(400).send({ message: "Preencha todos os campos!" });
    }

    const sac = await sacService.createService(data);

    if (!sac) {
      return res.status(400).send({ message: 'Dados não salvo!' });
    };

    let emailSetor;

    switch (assunto) {
      case 'Sugestao':
        emailSetor = process.env.MAIL_SUGESTAO;
        break;
      case 'Elogio':
        emailSetor = process.env.MAIL_ELOGIO;
        break;
      case 'Duvida':
        emailSetor = process.env.MAIL_DUVIDA;
        break;
      case 'Reclamacao':
        emailSetor = process.env.MAIL_RECLAMACAO;
        break;
      case 'Parceria/Patrocinio':
        emailSetor = process.env.MAIL_PARCERIA;
        break;
      default:
        return res.status(400).send({ message: 'Houve algum erro no campo assunto' });
    }

    // Configura o corpo do e-mail
    const emailBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <h2 style="color: #333;">Novo contato do SAC</h2>
        <p><strong>Nome:</strong> ${sac.nomeSobrenome}</p>
        <p><strong>Email:</strong> <a href="mailto:${sac.email}" style="color: #1a73e8;">${sac.email}</a></p>
        <p><strong>Telefone:</strong> ${sac.telefone}</p>
        <p><strong>Assunto:</strong> ${sac.assunto}</p>
        <p><strong>Mensagem:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 5px solid #1a73e8;">${sac.mensagem}</blockquote>
        <p><strong>Identificador:</strong> ${sac.incrementalId}</p>
        <p><strong>Status:</strong> <span style="color: red;">Em aberto</span></p>
        <hr>
        <p style="font-size: 12px; color: #777;">Este é um e-mail automático. Não responda.</p>
      </div>
    `;


    const assuntoEmail = `${sac.assunto} - ${sac.incrementalId}`;
    // Configura os anexos se houver
    const attachments = req.file
      ? [{
        filename: req.file.originalname, // Nome original do arquivo
        path: req.file.path // Caminho onde o arquivo foi salvo
      }]
      : [];

    // Envia o e-mail
    await nodemailerService.send(emailSetor, assuntoEmail, emailBody, attachments);

    if (req.file) {
      try {
        await fs.unlink(req.file.path); // Deleta o arquivo
        console.log(`Arquivo ${req.file.path} deletado com sucesso.`);
      } catch (deleteError) {
        console.error(`Erro ao deletar o arquivo ${req.file.path}:`, deleteError.message);
      }
    }

    res.status(200).send({ message: 'Dados salvos com sucesso!', sac: sac });

  } catch (err) {
    res.status(500).send({ message: 'Ocorreu um erro ao enviar o email =>', err: err.message })
  }
}


const findAllSac = async (req, res) => {
  const sacs = await sacService.findAllService();

  if (sacs.length === 0) {
    return res.status(400).send({ message: 'Não há nenhum sac no momento' });
  }

  res.send(sacs);
};

const findAssuntoSac = async (req, res) => {
  const assunto = req.params.assunto;

  const sacs = await sacService.findByAssunto(assunto);

  if (sacs.length === 0) {
    return res.status(400).send({ message: 'Não há nenhum sac deste tipo no momento' });
  }

  res.send(sacs);
};


const deleteSacById = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Id invalido!" });
  }

  try {
    const result = await sacService.deleteById(id);

    if (result.deletedCount > 0) {
      return res.send({ message: 'SAC deletado com sucesso.' });
    } else {
      return res.send({ message: 'Nenhum SAC encontrado para o id fornecido.' });
    }

  } catch (error) {
    console.error('Erro ao deletar SAC:', error);
    return res.status(500).send({ message: "Erro interno ao tentar deletar o SAC." });
  }
};

const findSacById = async (req, res) => {

  const id = req.params.id;

  //Conferir antes de tudo se o id é válido
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Id invalido!" });
  }

  const sac = await sacService.findById(id);

  if (!sac) {
    return res.status(400).send({ message: "Usuario nao encontrado" });
  }

  res.send(sac);
};

const updateSacStatus = async (req, res) => {

  const { status } = req.body;

  if (status === undefined) {
    return res.status(400).send({ message: "Preencha o campo de status!" });
  }

  const id = req.params.id;

  //Conferir antes de tudo se o id é válido
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Id invalido!" });
  }

  const sac = await sacService.findById(id);

  if (!sac) {
    return res.status(400).send({ message: "Sac nao encontrado" });
  }

  await sacService.updateSacStatus(
    id,
    status
  );

  res.send({ message: "Sac foi atualizado com sucesso" });
}

export default {
  createSac,
  findAllSac,
  findAssuntoSac,
  deleteSacById,
  updateSacStatus
};