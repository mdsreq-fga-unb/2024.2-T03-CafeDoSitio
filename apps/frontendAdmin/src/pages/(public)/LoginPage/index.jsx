import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConteudoGeral, LoginCard, Input, Button, ParteSuperior, Warning, Espaco } from "./styled";
import { loginUser } from "@familiadositio/core";
import { ROUTES } from "../../../routes/RoutesConstants";

const LoginPage = () => {

  // INICIANDO O NAVIGATE:
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassord] = useState('');
  const [warning, setWarning] = useState(0);

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
      sessionStorage.setItem("authToken", response.data.token);
      if(response.data.case === 1) {
        setEmail('');
        setPassord('');
        navigate(ROUTES.HOME);
      }
      else
        console.log("EM PRODUÇÃO!");
    } catch (err) {
      if(err.response){
        if(err.response.status === 404){
          setWarning(1);
          setTimeout(() => {
            setWarning(0);
          }, 2000);
        }
        else if(err.response.status === 403){
          setWarning(2);
          setTimeout(() => {
            setWarning(0);
          }, 2000);
        }
      }
      else {
        setWarning(3);
        setTimeout(() => {
          setWarning(0);
        }, 2000);
      }
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
        {warning === 1? (
          <Warning><span>Usuário não encontrado!</span></Warning>
        ) : warning === 2? (
          <Warning><span>Email ou senha incorreto!</span></Warning>
        ) : warning === 3? (
          <Warning><span>Erro inesperado!</span></Warning>
        ) : (
          <Espaco />
        )}
        <Button onClick={login}>Entrar</Button>
      </LoginCard>
    </ConteudoGeral>
  );
};

export default LoginPage;