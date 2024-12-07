import axios from 'axios';
// import Cookies from 'js-cookie';

const baseURL = 'http://localhost:3002';

export function createUser(name, email, password){
  const body = {
    name: name,
    email: email,
    password: password,
  }

  const response = axios.post(
    `${baseURL}/user/createUser`,
    body,
    // {
    //   headers: {
    //     Authorization: `Bearer ${Cookies.get("token")}`,
    //   }
    // }
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