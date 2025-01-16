import Blog from "../models/Blog.js";

const createService = (body) => Blog.create(body);
const findAllService = () => Blog.find();
const patchService = (_id, body) => Blog.findByIdAndUpdate(_id, body, {new: true});
const deleteService = (body) => Blog.findByIdAndDelete(body);

export default {
    createService,
    findAllService,
    patchService,
    deleteService,
}