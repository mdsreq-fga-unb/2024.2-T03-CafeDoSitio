import axios from "axios";
import { ROUTE } from "./RouteConstant";

const baseURL = ROUTE.DEV;

export function createBlog(titulo, banner, conteudo) {
  
  const body = {
    titulo: titulo,
    banner: banner,
    conteudo: conteudo,
    status: "rascunho",
  };

  const response = axios.post(`${baseURL}/blog`, 
    body,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
      }
    });

    return response;
};

export function findAllBlog() {
  const response = axios.get(`${baseURL}/blog`);

  return response;
}