import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConteudoGeral, LoginCard, Input, Button, ParteSuperior } from "./styled";
import { loginUser } from "@familiadositio/core";
import { ROUTES } from "../../../routes/RoutesConstants";

const LoginPage = () => {

  // INICIANDO O NAVIGATE:
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassord] = useState('');

  // FUNÇÕES PARA FAZER REQUISIÇÃO À API DE LOGIN:
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleChangePassword = (e) => {
    setPassord(e.target.value);
  }
  async function login(){
    try {
      const response = await loginUser(email, password);
      localStorage.setItem("authToken", response.data.token);
      navigate(ROUTES.HOME);
    } catch (err) {
      console.log(err);
      alert("Falha ao fazer login! Verifique suas credenciais.");
    }
  }

  return(
    <ConteudoGeral>
      <LoginCard>
        <ParteSuperior>
          <img src="./favicon.png" alt="logoFamília do Sítio" />
          <h1>Central de Controle</h1>
          <span>Faça Login para acessar</span>
        </ParteSuperior>
        <Input type="email" placeholder="Email" onChange={handleChangeEmail}/>
        <Input type="password" placeholder="Senha" onChange={handleChangePassword}/>
        <Button onClick={login}>Entrar</Button>
      </LoginCard>
    </ConteudoGeral>
  );
};

export default LoginPage;