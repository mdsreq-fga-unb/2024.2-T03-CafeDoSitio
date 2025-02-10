import faqService from "../services/faq.service.js";

const createFaq = async (req, res) => {
    try {
        const { question, answer } = req.body

        if (!question || !answer)
            return res.status(400).send({ message: "Preencha todos os campos para criar a FAQ" })

        const faq = await faqService.createService(req.body);

        if (!faq)
            return res.status(502).send({ message: "Dados não salvos" });

        return res.status(201).send({ message: "FAQ criada com sucesso", faq })
    } catch (err) {
        return res.status(500).send({ message: "Erro ao criar FAQ!", error: err.message })
    }
};

const findAllFaqs = async (req, res) => {
    try {
        const faqs = await faqService.findAllService();
        res.status(200).json(faqs);
    } catch (error) {
        console.error("Erro ao buscar FAQs:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
};

const deleteFaq = async (req, res) => {
    try {
        const { _id } = req.params;
        const faq = await faqService.deleteService(_id);
        if (!faq)
            return res.status(404).send({ message: "FAQ não encontrada" });
        res.status(200).send({ message: "FAQ deletada com sucesso" });
    } catch (error) {
        console.error("Erro ao deletar FAQ:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
};

const updateFaq = async (req, res) => {
    try {
        const { _id } = req.params;
        const faq = await faqService.findByIdAndUpdate(_id, req.body);
        if (!faq)
            return res.status(404).send({ message: "FAQ não encontrada" });
        res.status(200).send({ message: "FAQ atualizada com sucesso" });
    } catch (error) {
        console.error("Erro ao atualizar FAQ:", error);
        res.status(500).json({ message: "Erro interno do servidor" });
    }
};

export default {
    createFaq,
    findAllFaqs,
    deleteFaq,
    updateFaq,
}