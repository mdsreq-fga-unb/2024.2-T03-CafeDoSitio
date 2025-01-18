import axios from "axios";
import { toast } from 'react-toastify';

const baseURL = "https://two024-2-t03-cafedositio.onrender.com/sac";

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

const updateSacStatus = async (Json, id) => {
    try{
        const response = await axios.patch(`${baseURL}/${id}`, Json);

    }
    catch (error) {
        if (error.response) {
            console.error("Erro na resposta do servidor:", error.response.data);
        } else if (error.request) {
            console.error("Erro na requisição:", error.request);
        } else {
            console.error("Erro ao configurar a requisição:", error.message);
        }
        toast.error("Ocorreu um erro. Tente novamente!");
    }
}

export default {
    getAllSacs,
    updateSacStatus
}