import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  nameSobrenome: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
  role: {
    type: String,
    require: true,
  }
});

const User = mongoose.model('User', UserSchema);
export default User;