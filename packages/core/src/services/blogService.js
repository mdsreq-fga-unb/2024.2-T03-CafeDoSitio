import axios from "axios";
import { ROUTE } from "./RouteConstant";

const baseURL = ROUTE.DEV;

export function createBlog(titulo) {
  
  const body = {
    titulo: titulo,
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

export async function findAllBlog(page = 1, limit = 10) {
  const response = await axios.get(`${baseURL}/blog?page=${page}&limit=${limit}`);
  return response.data;
}