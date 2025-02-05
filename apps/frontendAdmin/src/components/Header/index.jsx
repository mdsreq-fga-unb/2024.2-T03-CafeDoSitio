import React from "react";
import { useNavigate } from "react-router-dom";
import { NavArea, NavBar, DirNav, EsqNav, NavButton } from "./styled";
import { FaHome, FaPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { ROUTES } from "../../routes/RoutesConstants";
import { jwtDecode } from "jwt-decode";
import SitioLogo from "../../assets/FamiliaDoSitioBorda.png";

const Header = () => {

  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate(ROUTES.HOME);
  }

  const token = sessionStorage.getItem("authToken");
  let username;
  if (token) {
    try {
      const decodedToken = jwtDecode(token);
      username = decodedToken.name || "Usuário";
    } catch (err) {
      console.error("Erro ao decodificar o token:", err);
    }
  }

  return(
    <NavBar>
      <NavArea>
        <EsqNav>
          <NavButton onClick={navigateToHome}>
            <img src={SitioLogo} alt="Família do Sítio" />
          </NavButton>
          <NavButton className="site-button">
            <FaHome className="icon"/>
            <span>famíliadositio.com.br</span>
          </NavButton>
          <NavButton className="new-button">
            <FaPlus className="icon"/>
            <span>Novo</span>
          </NavButton>
        </EsqNav>
        <DirNav>
          <NavButton>
            <CgProfile className="icon"/>
            <span>Olá, {username}</span>
          </NavButton>
        </DirNav>
      </NavArea>
    </NavBar>
  );
};

export default Header;