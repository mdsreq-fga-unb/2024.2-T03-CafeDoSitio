import React from "react";
import Paginacao from "../../../components/Paginacao";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/RoutesConstants";
import { Space, Conteudo } from "./styled";

const PoliticasPage = () => {
  return (
    <div>
      <Paginacao>
        <Link className="page" to={ROUTES.MAIN}>Família do Sítio</Link>
          {" > "}
        <span>Políticas de Privacidade</span>
      </Paginacao>
      <Space />

      <Conteudo>
        <h1>Políticas de Privacidade</h1>

        <h2>ESCOPO:</h2>
        <p>Esta política de privacidade <strong>("Política")</strong> é aplicado aos Websites, Formulários, Mensagens Eletrônicas pertencentes à <strong>Família do Sítio</strong>. Esta política que descreve os dados pessoais que são coletados ou gerados (tratados) quando você interage por meio do familiadositio.com.br. Também explica como seus dados pessoais são usados, compartilhados e protegidos, quais opções você tem em relação aos seus dados pessoais e como você pode nos contatar.</p>
      </Conteudo>
    </div>
  );
}

export default PoliticasPage;