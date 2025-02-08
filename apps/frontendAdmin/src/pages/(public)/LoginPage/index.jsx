<<<<<<< HEAD
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ConteudoGeral, LoginCard, Input, Button, ParteSuperior, Warning, Espaco } from "./styled";
import { loginUser } from "@familiadositio/core";
import { ROUTES } from "../../../routes/RoutesConstants";
=======
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ConteudoGeral, LoginCard, Input, Button, ParteSuperior, Formulario, InputContainer, EyeIcon } from "./styled";
import { loginUser } from "@familiadositio/core";
import { ROUTES } from "../../../routes/RoutesConstants";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // CSS do <ToastContainer />
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Ícones de olho
>>>>>>> 83f13502811799857d938cd2a7694af4c6aded76

const LoginPage = () => {

  // INICIANDO O NAVIGATE:
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassord] = useState('');
<<<<<<< HEAD
  const [warning, setWarning] = useState(0);

  // FUNÇÕES PARA FAZER REQUISIÇÃO À API DE LOGIN:
=======
  const [showPassword, setShowPassword] = useState(false);

>>>>>>> 83f13502811799857d938cd2a7694af4c6aded76
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleChangePassword = (e) => {
    setPassord(e.target.value);
  }
<<<<<<< HEAD
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
=======
  const toggleShowPassword = () => {
    setShowPassword(!showPassword); 
  };

  // FUNÇÕES PARA FAZER REQUISIÇÃO À API DE LOGIN:
  const handleLogin = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
    try {
      const response = await loginUser(email, password);
      sessionStorage.setItem("authToken", response.data.token);
      if (response.data.case === 2) {
        toast.info("Usuário encontrado, porém sem senha! Acesse o primeiro Acesso.");
        return;
      }
      setEmail('');
      setPassord('');
      navigate(ROUTES.HOME);
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
>>>>>>> 83f13502811799857d938cd2a7694af4c6aded76
      }
    }
  }

<<<<<<< HEAD
  return(
    <ConteudoGeral>
=======
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

>>>>>>> 83f13502811799857d938cd2a7694af4c6aded76
      <LoginCard>
        <ParteSuperior>
          <img src="./favicon.png" alt="logoFamília do Sítio" />
          <h1>Central de Controle</h1>
          <span>Faça Login para acessar</span>
        </ParteSuperior>
<<<<<<< HEAD
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
=======
        
      <Formulario onSubmit={handleLogin} >
        <Input type="email" placeholder="Email" onChange={handleChangeEmail}/>
        <InputContainer>
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Senha"
                  value={password}
                  onChange={handleChangePassword}
                />
                <EyeIcon onClick={toggleShowPassword}>
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </EyeIcon>
        </InputContainer>

        <Button type="submit">Entrar</Button>
      </Formulario>

      <div className="links">
        <label>Esqueceu a senha?</label>
        <label onClick={() => navigate(ROUTES.FIRST_ACESS)}>Primeiro Acesso?</label>
      </div>

>>>>>>> 83f13502811799857d938cd2a7694af4c6aded76
      </LoginCard>
    </ConteudoGeral>
  );
};

export default LoginPage;