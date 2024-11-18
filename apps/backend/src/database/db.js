import mongoose from 'mongoose';

const connectDatabase = () => {
    console.log('Wait connection to the database');
    mongoose.connect(
        process.env.MONGODB_URL
    )
    .then(() => console.log('MongoDB Atlas Connected'))
    .catch((error) => console.log(error));  
}

export default connectDatabase;