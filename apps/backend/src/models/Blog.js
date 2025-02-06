import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
    titulo: {
        type: String,
        required: true,
    },
    dataHoraPublicacao: {
        type: Date,
        required: false,
    },
    banner: {
        type: String,
        required: false,
    },
    conteudo: {
        type: String,
        required: false,
    },
    status: {
        type: String,
        required: true,
    },
    urlBody: {
        type: String,
        required: false,
    },
}, {timestamps: true});

const Blog = mongoose.model('Blog', BlogSchema);
export default Blog;