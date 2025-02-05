import React from "react";
import { ConfigsZone, InfoZone, OptionGroup, Space } from "./styled";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { FaCalendar, FaUserCog } from "react-icons/fa";
import { BiSolidMegaphone } from "react-icons/bi";
import Paginacao from "../../../components/Paginacao";
import Card from "../../../components/Card";
import { ROUTES } from "../../../routes/RoutesConstants";

const HomePage = () => {

  const navigate = useNavigate();

  const navigateToVisita = () => {
    navigate(ROUTES.VISITA);
  };
  
  const navigateToSac = () => {
    navigate(ROUTES.SAC);
  };

  const navigateToAdminAccounts = () => {
    navigate(ROUTES.ADMIN_ACCOUNTS);
  };

  const token = sessionStorage.getItem("authToken");
    let sector;
    if (token) {
      try {
        const decodedToken = jwtDecode(token);
        sector = decodedToken.sector;
        console.log(jwtDecode(token));
      } catch (err) {
        console.error("Erro ao decodificar o token:", err);
      }
    }


  return(
    <>

      <Paginacao>Central de Administração</Paginacao>
      <Space />

      <InfoZone>
        <h1>Central de Administração</h1>
        <span>Selecione o que configurar no site Institucional da Família do Sítio.</span>
      </InfoZone>

      <ConfigsZone>
        <OptionGroup>
          <Card onClick={navigateToVisita} title={"Visualizar Disponibilidades"} description={"Acesse o calendário e verifique as suas disponibilidades, status e informações de suas visitas técnicas."}><FaCalendar className="icon"/></Card>
          
          <Card onClick={navigateToSac} title={"Visualizar Sacs"} description={"Veja os Sacs que já foram feitos. Seja todos ao mesmo tempo ou filtrados por assunto."}><BiSolidMegaphone className="icon"/></Card>

          { sector === "Administrator" || sector === "System-Administrator" ? (
            <Card onClick={navigateToAdminAccounts} title={"Gerenciar Contas"} description={"Adicione ou exclua contas que terão acesso à Central de Administração do Site Institucional da Família do Sítio."}><FaUserCog className="icon"/></Card>
          ) : null }
        </OptionGroup>
      </ConfigsZone>
  
    </>
  );
};

export default HomePage;