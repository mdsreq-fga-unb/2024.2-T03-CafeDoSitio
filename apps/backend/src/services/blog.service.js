import Blog from "../models/Blog.js";

const createService = (body) => Blog.create(body);
const findAllServiceWithoutPagination = () => Blog.find();
const filterBlogsService = async (page, limit, status, title, tag) => {
    const skip = (Number(page) - 1) * Number(limit);
    const filter = {};

    if (status && status !== "all") {
        filter.status = status;
    }

    if (title) {
        filter.titulo = { $regex: title, $options: "i" }; // Busca case insensitive
    }

    if (tag) {
        filter.tag = tag;
    }

    const blogs = await Blog.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit);
    const total = await Blog.countDocuments(filter);

    return { blogs, total };
};
const filterBlogsBasicUserService = async (page, limit, title, tag) => {
    const skip = (Number(page) - 1) * Number(limit);
    const filter = { status: "publicado" };

    if (title) {
        filter.titulo = { $regex: title, $options: "i" }; // Busca case insensitive
    }

    if (tag) {
        filter.tag = tag;
    }

    const blogs = await Blog.find(filter).sort({ dataHoraPublicacao: -1 }).skip(skip).limit(limit);
    const total = await Blog.countDocuments(filter);

    return { blogs, total };
};
const findByIdService = (_id) => Blog.findById(_id);
const patchService = (_id, body) => Blog.findByIdAndUpdate(_id, body, {new: true});
const deleteService = (body) => Blog.findByIdAndDelete(body);
const findBySlugService = (slug) => Blog.findOne({ slug });

export default {
    createService,
    patchService,
    deleteService,
    findByIdService,
    findAllServiceWithoutPagination,
    filterBlogsService,
    filterBlogsBasicUserService,
    findBySlugService,
}