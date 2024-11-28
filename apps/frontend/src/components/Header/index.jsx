import React from "react";
import { NavArea, NavBar, LogoImg, InfoAreaDesktop, BarraPesquisa, InfoAreaMobile } from "./styled";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaSearch, FaWhatsapp } from "react-icons/fa"; // Ícones do Font Awesome
import { FaCartShopping } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import RedButton from "../RedButton";

function Header({pagina}) {
  return(
    <NavBar>
      <NavArea>
        <div className="area1">
          <a href="/"><LogoImg src="./favicon.png"/></a>
          <label className="page-name">{pagina}</label>
        </div>
        <InfoAreaDesktop>
          <div className="area1">
          <ul className="social-medias">
            <li><a href="#"><FaInstagram color="black" size={20}/></a></li>
            <li><a href="#"><FaFacebook color="black" size={20}/></a></li>
            <li><a href="#"><FaYoutube color="black" size={20}/></a></li>
            <li><a href="#"><FaLinkedin color="black" size={20}/></a></li>
          </ul>

          <BarraPesquisa>
            <input type="text" placeholder="Pesquisa..."/>
            <FaSearch className="search-icon" color="grey"/>
          </BarraPesquisa>
          
          <h1>COMPRE COM O SEU CNPJ</h1>

          <RedButton simbolo={<FaWhatsapp />} text={"(61) 2108-0108"}/>
          <RedButton simbolo={<FaCartShopping />} text={"Nossa Loja"}/>

          </div>

          <ul className="nav-list">
            <li><a href="#">INICIO</a></li>
            <li><a href="#">NOSSOS PRODUTOS</a></li>
            <li><a href="#">NOSSA HISTÓRIA</a></li>
            <li><a href="#">BLOG</a></li>
            <li><a href="#">SÍTIO VERDE</a></li>
            <li><a href="#">VISITE A FÁBRICA</a></li>
            <li><a href="#">CONTATO</a></li>
          </ul>
        </InfoAreaDesktop>

        <InfoAreaMobile>
          <div className="area2">
            <BarraPesquisa>
              <input type="text" placeholder="Pesquisa..."/>
              <FaSearch className="search-icon" color="grey"/>
            </BarraPesquisa>
          </div>
          <MdOutlineMenu size={40} className="menu-icon"/>
        </InfoAreaMobile>
      </NavArea>
    </NavBar>
  )
}

export default Header;