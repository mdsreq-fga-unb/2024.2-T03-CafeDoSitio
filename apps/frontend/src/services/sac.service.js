import axios from "axios";
import { toast } from 'react-toastify';
<<<<<<< HEAD

const baseURL = "http://localhost:3002/sac";
=======
import { ROUTE } from './RouteConstant';

const baseURL = ROUTE.PROD + "/sac";
>>>>>>> 83f13502811799857d938cd2a7694af4c6aded76

const postSac = async (formData) => {
    try {
        // Enviando os dados como JSON
        const response = await axios.post(`${baseURL}/createSac`, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
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

export default {
    postSac,
};