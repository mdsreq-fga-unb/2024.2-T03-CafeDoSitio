import React from "react";
import { ConteudoGeral, LoginCard, Input, Button, ParteSuperior } from "./styled";


const LoginPage = () => {
  return(
    <ConteudoGeral>
      <LoginCard>
        <ParteSuperior>
          <img src="./favicon.png" alt="logoFamília do Sítio" />
          <h1>Central de Controle</h1>
          <span>Faça Login para acessar</span>
        </ParteSuperior>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Senha" />
        <Button>Entrar</Button>
      </LoginCard>
    </ConteudoGeral>
  );
};

export default LoginPage;