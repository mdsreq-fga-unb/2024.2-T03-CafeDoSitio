import userService from "../services/user.service";

const createUser = async (req, res) => {
  try {
    const{name, email, password, role} = req.body;
  
    if(!name || !email || !password || !role)
      res.status(400).send({ message: 'Preencha todos os campos para registro!' });
  
    const user = await userService.createService(req.body);
  
    if (!user)
      return res.status(502).send({ message: 'Dados não salvos, apesar da requisição!' });
  
    res.status(201).send({ message: 'Usuário criado com Sucesso!', user: user });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

export default { 
  createUser, 
};