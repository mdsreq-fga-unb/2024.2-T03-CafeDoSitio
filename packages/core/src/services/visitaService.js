import axios from "axios";

const baseURL = 'http://localhost:3002';

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