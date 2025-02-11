import axios from "axios";
import { toast } from 'react-toastify';
import { ROUTE } from "./RouteConstant";

const baseURL = import.meta.env.VITE_MODE === 'production' ? (import.meta.env.VITE_NODE_APP_API_URL + '/produto') : (ROUTE.DEV + '/produto');;

const buscarProduto = async (nomeProduto) => {
    try {
        const response = await axios.get(`${baseURL}/buscarProduto/${nomeProduto}`);

        if(response.data.message === "Nenhum produto encontrado com esse nome.") {
            toast.error("Não foi encontrado um produto com esse nome");
            return { data: [] }; // Retorna um array vazio para limpar a tela
        }

        return response;
    } catch (err) {
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
    buscarProduto,
};  