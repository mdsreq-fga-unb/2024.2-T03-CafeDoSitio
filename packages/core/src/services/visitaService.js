import axios from "axios";
<<<<<<< HEAD

const baseURL = 'http://localhost:3002';
=======
import { ROUTE } from "./RouteConstant";

const baseURL = ROUTE.PROD;
>>>>>>> 83f13502811799857d938cd2a7694af4c6aded76

export function createVisita(body) {

  const response = axios.post(
    `${baseURL}/visita/createVisita`,
    body,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
      }
    }
  );

  return response;
};

export function findAllVisita()
{
  const response = axios.get(
    `${baseURL}/visita/findAllVisita`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
      }
    }
  );
  
  return response; 
};//

export function deleteVisita(id) {

  const response = axios.delete(
    `${baseURL}/visita/deleteVisita/${id}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
      },
    }
  );

  return response;
}

export function patchVisita(id, body) {

  const response = axios.patch(
    `${baseURL}/visita/patchVisita/${id}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
      },
    }
  );

  return response;
}