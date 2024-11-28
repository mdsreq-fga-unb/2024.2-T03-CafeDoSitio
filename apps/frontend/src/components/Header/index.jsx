import React from "react";
import { DivHeader, InfoDiv, NavBar, NavSection } from "./styled";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa"; // Ícones do Font Awesome

function Header() {
  return(
    <DivHeader>
      <img src="./favicon.png"/>

      <NavSection>
        <InfoDiv>
          <div className="socialMedias">
            <FaInstagram size={20}/>
            <FaFacebook size={20}/>
            <FaYoutube size={20}/>
            <FaLinkedin size={20}/>
          </div>
        </InfoDiv>
        <NavBar>
          <a>INICIAL</a>
          <a>NOSSOS PRODUTOS</a>
          <a>NOSSA HISTÓRIA</a>
          <a>BLOG</a>
          <a>SÍTIO VERDE</a>
          <a>VISITE A FÁBRICA</a>
          <a>CONTATO</a>

        </NavBar>
      </NavSection>
    </DivHeader>
  )
}

export default Header;