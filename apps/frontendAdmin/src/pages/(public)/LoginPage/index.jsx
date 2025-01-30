import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ConteudoGeral, LoginCard, Input, Button, ParteSuperior, Formulario } from "./styled";
import { loginUser } from "@familiadositio/core";
import { ROUTES } from "../../../routes/RoutesConstants";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // CSS do <ToastContainer />

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
  const handleLogin = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
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
          toast.error("Usuário não encontrado!");
        }
        else if(err.response.status === 403){
          toast.error("Email ou senha incorreto!");
        }
      }
      else {
        toast.error("Erro inesperado!");
      }
    }
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleLogin(e);
      }
    };

    // Adiciona o listener de teclado
    document.addEventListener("keydown", handleKeyPress);

    // Remove o listener ao desmontar o componente
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [email, password]);// Dependências para garantir que o listener tenha os valores atualizados

  return(
    <ConteudoGeral>
      <ToastContainer />

      <LoginCard>
        <ParteSuperior>
          <img src="./favicon.png" alt="logoFamília do Sítio" />
          <h1>Central de Controle</h1>
          <span>Faça Login para acessar</span>
        </ParteSuperior>
        
      <Formulario onSubmit={handleLogin} >
        <Input type="email" placeholder="Email" onChange={handleChangeEmail}/>
        <Input type="password" placeholder="Senha" onChange={handleChangePassword}/>

        <Button type="submit">Entrar</Button>
      </Formulario>
      </LoginCard>
    </ConteudoGeral>
  );
};

export default LoginPage;