import React from "react";
import Paginacao from "../../../components/Paginacao";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/RoutesConstants";
import { InfoZone, Space } from "./styled";

const VisitaConfigPage = () => {
  return(
    <>
      <Paginacao><Link to={ROUTES.HOME} className="page">Central de Administração</Link> {" > VISITAS TÉCNICAS"}</Paginacao>
      <Space />

      <InfoZone>
        <h1>Visitas Técnicas</h1>
        <span>Aqui você poderá observar todas as suas visitas técnicas e editar novas disponibilidades.</span>
      </InfoZone>

      
    </>
  );
};

export default VisitaConfigPage;