import React, { useState } from "react";
import Paginacao from "../../../components/Paginacao";
import { Space, InfoZone } from "./styled";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/RoutesConstants";


const FaqAdminPage = () => {
  return (
    <div>
      <Paginacao><Link to={ROUTES.HOME} className="page">Central de Administração</Link> {" > GERENCIAMENTO DO FAQ"}</Paginacao>
      <Space />

      <InfoZone>
        <h1>Gerenciar Perguntas Frequentes</h1>
        <span>Aqui você poderá criar, editar ou apagar as perguntas frequentes que serão exibidos na página FAQ do site institucional.</span>
      </InfoZone>

      

    </div>
  );
}

export default FaqAdminPage;