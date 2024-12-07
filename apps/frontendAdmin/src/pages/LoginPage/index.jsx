import React, { useState } from "react";
import { ConteudoGeral, LoginCard, Input, Button, ParteSuperior } from "./styled";
import loginUser from "@familiadositio/services";

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassord] = useNavigate('');

  // FUNÇÕES PARA FAZER REQUISIÇÃO À API DE LOGIN:
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }
  const handleChangePassword = (e) => {
    setPassord(e.target.value);
  }
  async function login(e){
    try {
      await loginUser(email, password);
      console.log("LOGADO!");
    } catch (err) {
      console.log(err);
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