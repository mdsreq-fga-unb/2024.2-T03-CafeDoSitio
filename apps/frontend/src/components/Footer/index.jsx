import React from "react";
import { CallArea, DivFooter, DivInfoSection, LogoImg } from "./styled";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <DivFooter>
      <DivInfoSection>
        <LogoImg src="../src/assets/FamiliaDoSitioBorda.png"/>

        <div className="info1">
          <ul className="institucional list">
            <li className="title">INSTITUCIONAL</li>
            <li><a href="#">NOSSA HISTÓRIA</a></li>
            <li><a href="#">VISITE A FÁBRICA</a></li>
            <li><a href="#">TRABALHE CONOSCO</a></li>
          </ul>
        </div>

        <div className="info2">
          <ul className="social-medias list">
            <li className="title">REDES SOCIAIS</li>
            <li><a href="https://www.instagram.com/cafedositio/" target="_blank">INSTAGRAM</a></li>
            <li><a href="https://www.facebook.com/cafedositio" target="_blank">FACEBOOK</a></li>
            <li><a href="https://www.youtube.com/@cafedositio7991" target="_blank">YOUTUBE</a></li>
            <li><a href="https://x.com/cafe_do_sitio" target="_blank">X (ANTIGO TWITTER)</a></li>
            <li><a href="https://www.facebook.com/cafedositio" target="_blank">LINKEDIN</a></li>
          </ul>
        </div>

        <div className="info3">
          <label className="title">FALE CONOSCO</label>
          <CallArea>
            <FaPhoneAlt size={28} color="white"/>
            <label className="number">(61) 2108-0101</label>
          </CallArea>
          <label className="info">atendimento@familiadositio.com.br</label>
          <label className="extra">Segunda a quinta das 08h às 18h e <br/> Sexta das 08h às 17h</label>
          <a className="extra">Perguntas Frequentes</a>
        </div>
      </DivInfoSection>

      <div className="copyrights-section">
        <p>Café do Sítio Indústria e Comércio Ltda - Todos os direitos reservados <br/> QS 09 RUA 100 LOTE 04 - Taguatinga - Distrito Federal - CNPJ: 00.452.102/0001-48</p>
        <img src="../src/assets/UnBLogo.png"/>
      </div>
    </DivFooter>
  );
}

export default Footer;