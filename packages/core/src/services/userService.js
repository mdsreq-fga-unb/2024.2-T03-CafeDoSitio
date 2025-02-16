import axios from 'axios';
import { ROUTE } from './RouteConstant';

const baseURL = import.meta.env.VITE_MODE === 'production' ? (import.meta.env.VITE_NODE_APP_API_URL) : (ROUTE.DEV);

export function createUser(email, sector){
  const body = {
    name: "Esperando Login do Usuário...",
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
};

export function findAllUser(){
  const response = axios.get(
    `${baseURL}/user/findAllUsers`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
      }
    }
  );
  
  return response; 
};

export function deleteUser(id){
  const response = axios.delete(
    `${baseURL}/user/${id}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
      }
    }
  );

  return response;
};

export function findByEmailUser(email){
  const params = {
    email: email,
  }

  const response = axios.get(
    `${baseURL}/user/findUsers`,
    {
      params: params,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
      }
    }
  );

  return response;
};

export function findByIdUserAndUpdate(id, updateBody){

  const response = axios.put(
    `${baseURL}/user/${id}`,
    updateBody,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
      }
    }
  );

  return response;
};

export function findByIdUserAndUpdatePassword(id, password, updateBody){

  const body = {
    password: password,
    updateBody: updateBody,
  }

  const response = axios.put(
    `${baseURL}/user/findByIdAndUpdatePassword/${id}`,
    body,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
      }
    }
  );
  return response;
}

export function findByIdUser(id){
  const response = axios.get(
    `${baseURL}/user/findByIdUser/${id}`,
    {
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
      }
    }
  )

  return response;
};