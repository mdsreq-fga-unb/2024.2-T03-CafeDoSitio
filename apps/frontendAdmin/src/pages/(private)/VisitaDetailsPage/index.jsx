import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Paginacao from "../../../components/Paginacao";
import { Context } from "../../../context/Provider";
import { Space } from "./styled";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/RoutesConstants";

const VisitaDetailsPage = () => {

  const navigate = useNavigate();

  const {idVisita} = useContext(Context);
  const {dateVisita} = useContext(Context);
  const {startTimeVisita} = useContext(Context);
  const {endTimeVisita} = useContext(Context);
  const {status} = useContext(Context);
  const {nameVisitor} = useContext(Context);
  const {emailVisitor} = useContext(Context);
  const {phoneVisitor} = useContext(Context);
  const {timeRequested} = useContext(Context);
  const {institution} = useContext(Context);

  return (
    <>
      <Paginacao><Link to={ROUTES.HOME} className="page">Central de Administração</Link> {" > "} <Link to={ROUTES.VISITA} className="page">Visitas Técnicas</Link> {` > ${idVisita}`} </Paginacao>
      <Space />

    </>
  );
};

export default VisitaDetailsPage;