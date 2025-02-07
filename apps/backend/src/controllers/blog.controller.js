import BlogService from "../services/blog.service.js";

const createBlog = async (req, res) => {
    try {
        const { titulo, status } = req.body

        if (!titulo || !status)
            return res.status(400).send({ message: "Preencha todos os campos para criar o blog" })

        const blog = await BlogService.createService(req.body);

        if (!blog)
            return res.status(502).send({ message: "Dados não salvos" });

        return res.status(201).send({ message: "Blog criado com sucesso", blog })
    } catch (err) {
        return res.status(500).send({ message: "Erro ao criar Blog!", error: err.message })
    }
}

const filterBlogsController = async (req, res) => {
    try {
        const { page = 1, limit = 5, status, title, tag } = req.query;

        const result = await BlogService.filterBlogsService(
            parseInt(page),
            parseInt(limit),
            status,
            title,
            tag
        );

        const totalPosts = await BlogService.findAllServiceWithoutPagination();

        res.status(200).json({
            totalPosts: totalPosts,
            NumberOfPosts: totalPosts.length,
            blogs: result.blogs,
            totalBlogs: result.total,
            totalPages: Math.ceil(result.total / limit),
        });
    } catch (error) {
        console.error("Erro ao filtrar blogs:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
};

const filterBlogsBasicUserController = async (req, res) => {
    try {
        const { page = 1, limit = 5, title, tag } = req.query;

        const result = await BlogService.filterBlogsBasicUserService(
            parseInt(page),
            parseInt(limit),
            title,
            tag
        );
        res.status(200).json({
            blogs: result.blogs,
            totalBlogs: result.total,
            totalPages: Math.ceil(result.total / limit),
        });
    } catch (error) {
        console.error("Erro ao filtrar blogs:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
};

const findBlogById = async (req, res) => {
    try {
        const { id } = req.params;

        if (!id)
            return res.status(400).send({ message: "ID não informado!" });

        const blog = await BlogService.findByIdService({ _id: id });

        if (!blog)
            return res.status(404).send({ message: "Blog não encontrado!" });

        return res.status(200).send({ message: "Blog encontrado", blog });
    } catch (err) {
        return res.status(500).send({ message: "Erro ao buscar Blog!", error: err.message });
    }
};

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params

        if (!id)
            return res.status(400).send({ message: "ID não informado!" });

        const blog = await BlogService.deleteService({ _id: id });

        if (!id)
            return res.status(404).send({ message: "Esse post não existe!" });

        return res.status(200).send({ message: "Deletado com sucesso!", blog })
    } catch (err) {
        return res.status(500).send({ error: err.message })
    }
}

const patchBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const updateData = req.body;

        if (!id)
            return res.status(400).send({ message: "ID não informado!" });

        if (!Object.keys(updateData).length)
            return res.status(200).send({ message: "Nenhuma informação para atualizar" });

        const blog = await BlogService.patchService({ _id: id }, updateData);

        if (!blog)
            return res.status(404).send({ message: "Esse post não existe!" });

        return res.status(200).send({ message: "Post editado com sucesso", blog });
    } catch (err) {
        return res.status(500).send({ message: "Blog não encontrado!", error: err.message });
    }
}

const findOneBySlug = async (req, res) => {
    try {
        const { slug } = req.params;

        if (!slug)
            return res.status(400).send({ message: "Slug não informado!" });

        const blog = await BlogService.findBySlugService(slug);

        if (!blog)
            return res.status(404).send({ message: "Blog não encontrado!" });

        return res.status(200).send({ message: "Blog encontrado", blog });
    } catch (err) {
        return res.status(500).send({ message: "Erro ao buscar Blog!", error: err.message });
    }
}



export default {
    createBlog,
    deleteBlog,
    patchBlog,
    findBlogById,
    filterBlogsController,
    filterBlogsBasicUserController,
    findOneBySlug,
}