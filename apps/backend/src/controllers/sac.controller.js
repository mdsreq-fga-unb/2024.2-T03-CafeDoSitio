import sacService from "../services/sac.service.js";

const createSac = async (req, res) => {
  try {
    const { nomeSobrenome, email, telefone, assunto, mensagem } = req.body;
    if(!nomeSobrenome || !email || !telefone || !assunto || !mensagem) {
      return res.status(400).send({ message: "Preencha todos os campos!" });
    }

    const sac = await sacService.createService(req.body);

    if(!sac) {
      return res.status(400).send({ message: 'Dados não salvo!' });
    };

    res.status(200).send({ message: 'Dados salvos com sucesso!', sac: sac});

  } catch (err) {
    res.status(500).send({ message: err.message })
  }
}

export default {
  createSac,
};