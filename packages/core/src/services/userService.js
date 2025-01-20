import axios from 'axios';

const baseURL = 'http://localhost:3002';

export function createUser(email, sector){
  const body = {
    email: email,
    sector: sector,
  }

  const response = axios.post(
    `${baseURL}/user/createUser`,
    body,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
      }
    }
  );

  return response;
};

export function loginUser(email, password){
  const body = {
    email: email,
    password: password,
  }

  const response = axios.post(`${baseURL}/user/loginUser`, body);
  return response;
}