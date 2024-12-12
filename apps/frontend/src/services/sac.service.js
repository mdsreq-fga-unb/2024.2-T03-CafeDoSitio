// src/services/sacService.js
import axios from "axios";
import { toast } from 'react-toastify';

const baseURL = "http://localhost:3002/sac";

const postSac = async (Json) => {
    try {
        // Enviando os dados como JSON
        const response = await axios.post(`${baseURL}/createSac`, Json, {
            headers: {
                "Content-Type": "application/json"
            }
        });

        // Sucesso
        toast.success("Seu formulário foi enviado com sucesso!");
    } catch (error) {
        if (error.response) {
            console.error("Erro na resposta do servidor:", error.response.data);
        } else if (error.request) {
            console.error("Erro na requisição:", error.request);
        } else {
            console.error("Erro ao configurar a requisição:", error.message);
        }
        toast.error("Ocorreu um erro. Tente novamente!");
    }
};

const sendMailSac = async (formData) => {
    try{
        const response = await axios.post(`${baseURL}/sendMail`, formData,  {
            headers: {
                "Content-Type": "multipart/form-data",
            }
        });
    } catch (error) {
        if (error.response) {
            console.error("Erro na resposta do servidor:", error.response.data);
        } else if (error.request) {
            console.error("Erro na requisição:", error.request);
        } else {
            console.error("Erro ao configurar a requisição:", error.message);
        }
    }
};

const getAllSacs = async (tag) => {
    try {
        const response = await axios.get(`${baseURL}/${tag}`);
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
    postSac,
    sendMailSac,
    getAllSacs
};