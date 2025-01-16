import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    dataHoraPublicacao: {
        type: Date,
        required: true,
    },
    imagem: {
        type: String,
        required: true,
    },
    conteudo: {
        type: String,
        required: true,
    },
});

const Blog = mongoose.model('Blog', BlogSchema);
export default Blog;