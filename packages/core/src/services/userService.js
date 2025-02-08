import axios from 'axios';
<<<<<<< HEAD

const baseURL = 'http://localhost:3002';

export function createUser(name, email, password){
  const body = {
    name: name,
    email: email,
    password: password,
=======
import { ROUTE } from './RouteConstant';

const baseURL = ROUTE.PROD;

export function createUser(email, sector){
  const body = {
    name: "Esperando Login do Usuário...",
    email: email,
    sector: sector,
>>>>>>> 83f13502811799857d938cd2a7694af4c6aded76
  }

  const response = axios.post(
    `${baseURL}/user/createUser`,
    body,
    {
      headers: {
<<<<<<< HEAD
        Authorization: `Bearer ${sessionStorage.get("authToken")}`,
=======
        Authorization: `Bearer ${sessionStorage.getItem("authToken")}`,
>>>>>>> 83f13502811799857d938cd2a7694af4c6aded76
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
<<<<<<< HEAD
=======
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
>>>>>>> 83f13502811799857d938cd2a7694af4c6aded76
}