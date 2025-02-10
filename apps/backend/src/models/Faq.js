import mongoose from "mongoose";

const FaqSchema = new mongoose.Schema({
  question: {
    type: String,
    require: true,
  },
  answer: {
    type: String,
    require: true,
  },
}, {timestamps: true});

const Faq = mongoose.model('Faq', FaqSchema);
export default Faq;