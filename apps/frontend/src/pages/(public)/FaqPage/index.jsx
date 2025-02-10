import React from "react";
import Paginacao from "../../../components/Paginacao";
import { Space, Conteudo, InfoZone } from "./styled";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/RoutesConstants";

const FaqPage = () => {
  return (
    <div>
      <Paginacao>
        <Link className="page" to={ROUTES.MAIN}>Família do Sítio</Link>
          {" > "}
        <span>FAQ</span>
      </Paginacao>
      <Space />

      <Conteudo>
        <InfoZone>
        <h1>Perguntas Frequentes</h1>
        </InfoZone>

        
      </Conteudo>
    </div>
  );
}

export default FaqPage;