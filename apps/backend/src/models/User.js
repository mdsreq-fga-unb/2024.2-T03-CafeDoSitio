import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: false,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: false,
  },
  sector: {
    type: String,
    require: true,
  }
}, {timestamps: true});

const User = mongoose.model('User', UserSchema);
export default User;