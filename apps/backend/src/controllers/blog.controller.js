import BlogService from "../services/blog.service.js";

const createBlog = async (req, res) => {
    try {
        const { titulo, descricao, dataHoraPublicacao, imagem, conteudo } = req.body

        if (!titulo || !descricao || !dataHoraPublicacao || !imagem || !conteudo)
            return res.status(400).send({ message: "Preencha todos os campos para criar o blog" })

        const blog = await BlogService.createService(req.body);

        if (!blog)
            return res.status(502).send({ message: "Dados não salvos" });

        return res.status(201).send({ message: "Blog criado com sucesso", blog })
    } catch (err) {
        return res.status(500).send({ message: "Erro ao criar Blog!", error: err.message })
    }
}

const findAllBlog = async (req, res) => {
    try {

        const blog = await BlogService.findAllService(req.body);

        return res.status(201).send({ message: "Blogs encontrados", blog })
    } catch (err) {
        return res.status(500).send({ message: "Blog não encontrado!", error: err.message })
    }
}

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
            return res.status(400).send({ message: "Nenhuma informação para atualizar" });

        const blog = await BlogService.patchService({ _id: id }, updateData);

        if (!blog)
            return res.status(404).send({ message: "Esse post não existe!" });

        return res.status(200).send({ message: "Post editado com sucesso", blog });
    } catch (err) {
        return res.status(500).send({ message: "Blog não encontrado!", error: err.message });
    }
}



export default {
    createBlog,
    findAllBlog,
    deleteBlog,
    patchBlog,
}