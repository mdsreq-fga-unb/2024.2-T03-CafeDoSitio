import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavArea, NavBar, LogoImg, InfoAreaDesktop, BarraPesquisa, InfoAreaMobile } from "./styled";
import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaSearch, FaWhatsapp } from "react-icons/fa"; // Ícones do Font Awesome
import { FaCartShopping, FaXTwitter } from "react-icons/fa6";
import { MdOutlineMenu } from "react-icons/md";
import RedButton from "../RedButton";

function Header({pagina}) {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

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
            <li><a href="https://www.instagram.com/cafedositio/" target="_blank"><FaInstagram color="black" size={20}/></a></li>
            <li><a href="https://www.facebook.com/cafedositio" target="_blank"><FaFacebook color="black" size={20}/></a></li>
            <li><a href="https://www.youtube.com/@cafedositio7991" target="_blank"><FaYoutube color="black" size={20}/></a></li>
            <li><a href="https://x.com/cafe_do_sitio" target="_blank"><FaXTwitter color="black" size={20}/></a></li>
            <li><a href="https://www.linkedin.com/company/cafedositio/" target="_blank"><FaLinkedin color="black" size={20}/></a></li>
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
            <li><Link to="/historia" style={{ color: isActive("/historia") ? "#006343" : "black"}}>NOSSA HISTÓRIA</Link></li>
            <li><a href="/" style={{ color: isActive("/") ? "#006343" : "black"}}>BLOG</a></li>
            <li><a href="#">SÍTIO VERDE</a></li>
            <li><a href="#">VISITE A FÁBRICA</a></li>
            <li><Link to="/contatos" style={{ color: isActive("/contatos") ? "#006343" : "black"}}>CONTATO</Link></li>

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