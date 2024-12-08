import axios from "axios";

const baseURL = 'http://localhost:3002';

export function createVisita(body) {

  const response = axios.post(
    `${baseURL}/visita/createVisita`,
    body,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("authToken")}`,
      }
    }
  );

  return response;
};