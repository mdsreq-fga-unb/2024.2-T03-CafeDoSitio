import User from "../models/User.js";

export const UserSeed = async() => {
  try {
    const existingUser = await User.findOne({  email: 'sitioAdmin@familiadositio.com.br' });
    if (existingUser) {
      console.log("> USER SEED: Usuário Administrador já existe. Nenhuma ação necessária.");
      return;
    };
  
    const newUser = new User({
      name: 'Sitio Admin',
      email: 'sitioAdmin@familiadositio.com.br',
      password: '@admin&Sitio+UnB',
    });
  
    await newUser.save();
    console.log('> USER SEED: Usuário administrador foi criado com sucesso como Seed!');
  } catch (err) {
    console.error('> USER SEED: Erro ao criar a Seed da conta de Administrador:', err);
  }
};