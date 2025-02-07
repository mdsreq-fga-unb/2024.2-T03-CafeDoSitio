import Blog from "../models/Blog.js";

const createService = (body) => Blog.create(body);
const findAllServiceWithoutPagination = () => Blog.find();
const filterBlogsService = async (page, limit, status, title) => {
    const skip = (Number(page) - 1) * Number(limit);
    const filter = {};

    if (status && status !== "all") {
        filter.status = status;
    }

    if (title) {
        filter.titulo = { $regex: title, $options: "i" }; // Busca case insensitive
    }

    const blogs = await Blog.find(filter).skip(skip).limit(limit);
    const total = await Blog.countDocuments(filter);

    return { blogs, total };
};

const findByIdService = (_id) => Blog.findById(_id);
const patchService = (_id, body) => Blog.findByIdAndUpdate(_id, body, {new: true});
const deleteService = (body) => Blog.findByIdAndDelete(body);

export default {
    createService,
    patchService,
    deleteService,
    findByIdService,
    findAllServiceWithoutPagination,
    filterBlogsService,
}