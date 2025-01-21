import mongoose from 'mongoose';

const connectDatabase = async () => {
    const mongoURI =
    process.env.NODE_ENV === 'production'
      ? process.env.MONGODB_URI_PROD // Banco de produção
      : process.env.MONGODB_URI_DEV; // Banco de desenvolvimento

    try {
        console.log('Aguardando conexão com o banco de dados...');
        await mongoose.connect( mongoURI );
        console.log('Conexão com o MongoDB Atlas bem-sucedida!');
    } catch (error) {
        console.error('Erro ao conectar ao MongoDB:', error);
        process.exit(1);
    }
}

export default connectDatabase;