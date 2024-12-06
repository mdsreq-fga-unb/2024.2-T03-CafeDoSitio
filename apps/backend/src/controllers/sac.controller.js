import sacService from "../services/sac.service.js";
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

const findAllSac = async (req, res) => {
  const sacs = await sacService.findAllService();

  if (sacs.length === 0) {
    return res.status(400).send({ message: 'Não há nenhum sac no momento' });
  }

  res.send(sacs);
}

const findAssuntoSac = async (req, res) => {
  const assunto = req.params.assunto;

  const sacs = await sacService.findByAssunto(assunto);

  if (sacs.length === 0) {
    return res.status(400).send({ message: 'Não há nenhum sac deste tipo no momento' });
  }

  res.send(sacs);
}


const deleteSacById = async (req, res) => {
  const id = req.params.id;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({ message: "Id invalido!" });
  }

  try {
    const result = await sacService.deleteById(id);

    if (result.deletedCount > 0) {
      return res.send({message: 'SAC deletado com sucesso.'});
    } else {
      return res.send({message: 'Nenhum SAC encontrado para o id fornecido.'});
    }

  } catch (error) {
    console.error('Erro ao deletar SAC:', error);
    return res.status(500).send({ message: "Erro interno ao tentar deletar o SAC." });
  }
}

export default {
  createSac,
  findAllSac,
  findAssuntoSac,
  deleteSacById
};