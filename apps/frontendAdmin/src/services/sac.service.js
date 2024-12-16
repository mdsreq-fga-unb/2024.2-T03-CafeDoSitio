import axios from "axios";
import { toast } from 'react-toastify';

const baseURL = "http://localhost:3002/sac";

const getAllSacs = async (tag) => {
    try {
        const response = await axios.get(`${baseURL}/${tag}`); //Quanto 'todos' é selecionado, 'tag' é uma string vazia e aciona a rota de puxar todos os sacs de uma vez
        if (response.data.message === "Não há nenhum sac deste tipo no momento") {
            toast.error("Não há sacs desse tipo ainda");
            return { data: [] }; // Retorna um array vazio para limpar a tela
        }
        return response;
    } catch (error) {
        if (error.response) {
            console.error("Erro na resposta do servidor:", error.response.data);
        } else if (error.request) {
            console.error("Erro na requisição:", error.request);
        } else {
            console.error("Erro ao configurar a requisição:", error.message);
        }
        return { data: [] }; // Em caso de erro, também retorna um array vazio
    }
};

export default {
    getAllSacs
}