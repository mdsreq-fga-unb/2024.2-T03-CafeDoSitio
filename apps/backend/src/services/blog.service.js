import Blog from "../models/Blog.js";

const createService = (body) => Blog.create(body);
const findAllService = async (page, limit) => {
    const skip = (page - 1) * limit; // Pula os itens das páginas anteriores
    const blogs = await Blog.find().skip(skip).limit(limit);
    const total = await Blog.countDocuments(); // Conta o total de blogs

    return { blogs, total };
};
const findAllServiceWithoutPagination = () => Blog.find();
const findByIdService = (_id) => Blog.findById(_id);
const patchService = (_id, body) => Blog.findByIdAndUpdate(_id, body, {new: true});
const deleteService = (body) => Blog.findByIdAndDelete(body);

export default {
    createService,
    findAllService,
    patchService,
    deleteService,
    findByIdService,
    findAllServiceWithoutPagination,
}