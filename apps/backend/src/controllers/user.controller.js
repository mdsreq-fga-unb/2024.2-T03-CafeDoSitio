import userService from "../services/user.service.js";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config({ path: '../../.env' });

// =====================================================
// DEFINIÇÃO DE CRIPTOGRAFIA:
var salt = process.env.SALT_BCRYPT;
// ==================================================================

const createUser = async (req, res) => {
  try {
    const{name, email, sector} = req.body;
  
    if(!email || !sector)
      return res.status(400).send({ message: 'Preencha todos os campos para registro!', case: 1 });

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email))
      return res.status(400).send({ message: 'Formato de email incorreto!', case: 2 });
  
    const user = await userService.createService({
      name,
      email,
      sector
    });
  
    if (!user)
      return res.status(502).send({ message: 'Dados não salvos, apesar da requisição!' });
  
    return res.status(201).send({ message: 'Usuário criado com Sucesso!', user: user });
  } catch (err) {
    if (err.code === 11000) {  // Código de erro para violação de chave única em MongoDB/Mongoose
      return res.status(400).send({ message: 'Email em uso!', case: 3 });
    }
    return res.status(500).send({ message: err.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    if(!email, !password)
      return res.status(400).send({ message: 'Preencha todos os campos para logar!'})

    const user = await userService.findService({ email });
    if ( user.length == 0)
      return res.status(404).send({ message: 'Usuário não encontrado!'});

    if (!user[0].password) {
      return res.status(200).send({ message: 'Usuário encontrado, mas sem senha!', case: 2 });
    }

    if (user[0].password != bcrypt.hashSync(password, salt))
      return res.status(403).send({ message: 'Senha ou email inválido!'});

    const token = userService.generateToken(user);
    return res.status(200).send({ message: 'Usuário encontrado!', case: 1, token });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const findUsers = async (req, res) => {
  try {
    const { name, email } = req.query;

    const filter = {};
    if (email) filter.email = email;
    if (name) filter.name = name;

    if (Object.keys(filter).length === 0)
      return res.status(400).send({ message: 'Informe pelo menos um parâmetro para a busca: "email" ou "name".' });

    const user = await userService.findService(filter);

    return res.status(200).send({ message: "Usuário buscado com sucesso!", user: user });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const findAllUser = async (req, res) => {
  try {
    const user = await userService.findAllService();

    return res.status(200).send({ message: "Usuários encontrados com sucesso!", user });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const findByIdUser = async (req, res) => {
  try {
    const { id } = req.params;

    if(!id)
      return res.status(400).send({ message: 'Por favor, forneça um ID válido.' });

    const user = await userService.findByIdService({_id: id});

    if (!user) {
      return res.status(404).send({ message: 'Usuário não encontrado.' });
    }

    const response = {
      name: user.name,
      email: user.email,
      sector: user.sector,
    }

    return res.status(200).send({ message: 'Usuário encontrado com sucesso!', user: response });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const findByIdAndUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const updateBody = req.body;

    if (!id || Object.keys(updateBody).length === 0)
      return res.status(400).send({ message: 'Por favor, forneça um ID e os dados para atualização.' });
    

    if (updateBody.password) {
      const hashedPassword = bcrypt.hashSync(updateBody.password, salt);
      updateBody.password = hashedPassword;
    }

    const updatedUser = await userService.findByIdAndUpdate(id, updateBody);

    if (!updatedUser) {
      return res.status(404).send({ message: 'Usuário não encontrado ou não foi possível atualizar.' });
    }

    return res.status(200).send({ message: 'Usuário atualizado com sucesso!', user: updatedUser });
  } catch (err) {
    return res.status(500).send({ message: `Erro ao atualizar o usuário: ${err.message}` });
  }
};

const findByIdAndUpdatePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { password, updateBody } = req.body;

    if (!id || Object.keys(updateBody).length === 0)
      return res.status(400).send({ message: 'Por favor, forneça um ID e os dados para atualização.' });

    if (!password)
      return res.status(400).send({ message: 'Por favor, forneça a senha para atualização.' });

    const user = await userService.findByIdService(id);
    if (!user)
      return res.status(404).send({ message: 'Usuário não encontrado.' });
    if(user.password != bcrypt.hashSync(password, salt))
      return res.status(403).send({ message: 'Senha incorreta!' });

    
    if (updateBody.password) {
      const hashedPassword = bcrypt.hashSync(updateBody.password, salt);
      updateBody.password = hashedPassword;
    }

    console.log(id);

    const updatedUser = await userService.findByIdAndUpdate(id, updateBody);
    const token = userService.generateToken([updatedUser]);

    if (!updatedUser) {
      return res.status(404).send({ message: 'Usuário não encontrado ou não foi possível atualizar.' });
    }


    return res.status(200).send({ message: 'Usuário atualizado com sucesso!', user: updatedUser, token });
  } catch (err) {
    return res.status(500).send({ message: `Erro ao atualizar o usuário: ${err.message}` });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    
    if (!id)
      return res.status(400).send({ message: 'Por favor, forneça um ID para deletar o usuário.' });

    const deletedUser = await userService.deleteService(id);

    if (!deletedUser)
      return res.status(404).send({ message: 'Usuário não encontrado.' });

    return res.status(200).send({ message: 'Usuário deletado com sucesso!' });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
 

export default { 
  createUser,
  loginUser,
  findUsers,
  findAllUser,
  findByIdUser,
  findByIdAndUpdate,
  findByIdAndUpdatePassword,
  deleteUser,
};