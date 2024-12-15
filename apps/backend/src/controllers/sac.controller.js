import sacService from "../services/sac.service.js";
import nodemailerService from "../services/nodemailer.service.js";

import mongoose from "mongoose";

const createSac = async (req, res) => {
  try {
    const { nomeSobrenome, email, telefone, assunto, mensagem } = req.body;
    if (!nomeSobrenome || !email || !telefone || !assunto || !mensagem) {
      return res.status(400).send({ message: "Preencha todos os campos!" });
    }

    const sac = await sacService.createService(req.body);

    if (!sac) {
      return res.status(400).send({ message: 'Dados não salvo!' });
    };

    res.status(200).send({ message: 'Dados salvos com sucesso!', sac: sac });

  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

const sendMail = async (req, res) => {
  try {
    const data = JSON.parse(req.body.data);
    const { nomeSobrenome, email, telefone, assunto, mensagem } = data;

    let emailSetor;

    switch (assunto) {
      case 'Sugestao':
        emailSetor = 'arthur.lantr@gmail.com';
        break;
      case 'Elogio':
        emailSetor = 'Elogio@email.com';
        break;
      case 'Duvida':
        emailSetor = 'duvida@email.com';
        break;
      case 'Reclamacao':
        emailSetor = 'reclamacao@email.com';
        break;
      case 'Parceria/Patrocinio':
        emailSetor = 'parceria@email.com';
        break;
      default:
        return res.status(400).send({ message: 'Houve algum erro no campo assunto' });
    }

    // Configura o corpo do e-mail
    const emailBody = `
      Nome: ${nomeSobrenome}
      Email: ${email}
      Telefone: ${telefone}
      Assunto: ${assunto}
      Mensagem: ${mensagem}
      Status: Em aberto
    `;

    // Configura os anexos se houver
    const attachments = req.file
      ? [{
        filename: req.file.originalname, // Nome original do arquivo
        path: req.file.path // Caminho onde o arquivo foi salvo
      }]
      : [];

    // Envia o e-mail
    await nodemailerService.send(emailSetor, assunto, emailBody, attachments);

    res.status(200).send({ message: 'E-mail enviado com sucesso!' });
  } catch (err) {
    console.error('Erro ao enviar e-mail:', err);
    res.status(500).send({ message: 'Erro ao enviar e-mail.' });
  }
};


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
  sendMail,
  updateSacStatus
};