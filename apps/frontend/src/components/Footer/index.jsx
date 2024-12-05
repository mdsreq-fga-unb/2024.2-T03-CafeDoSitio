import React from "react";
import { DivFooter, CopyRigthSection, Conteudo, Divisao1, ParteSuperior, Divisao2, DivisaoTelefone } from "./styled";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <DivFooter>
      <Conteudo>

        <ParteSuperior>
          <img src="./assets/FamiliaDoSitioBorda.png" className="logo-img"/>
          <Divisao1>
            <div className="info1">
              <ul className="institucional list">
                <li className="title">INSTITUCIONAL</li>
                <li><a href="#">• NOSSA HISTÓRIA</a></li>
                <li><a href="#">• VISITE A FÁBRICA</a></li>
                <li><a href="#">• TRABALHE CONOSCO</a></li>
              </ul>
            </div>

            <div className="info2">
              <ul className="social-medias list">
                <li className="title">REDES SOCIAIS</li>
                <li><a href="https://www.instagram.com/cafedositio/" target="_blank">• INSTAGRAM</a></li>
                <li><a href="https://www.facebook.com/cafedositio" target="_blank">• FACEBOOK</a></li>
                <li><a href="https://www.youtube.com/@cafedositio7991" target="_blank">• YOUTUBE</a></li>
                <li><a href="https://x.com/cafe_do_sitio" target="_blank">• X/TWITTER</a></li>
                <li><a href="https://www.linkedin.com/company/cafedositio/" target="_blank">• LINKEDIN</a></li>
              </ul>
            </div>
          </Divisao1>

          <Divisao2>
            <h1 className="title">FALE CONOSCO</h1>

            <DivisaoTelefone>
              <FaPhoneAlt size={28} color="white"/>
              <label className="number">(61) 2108-0101</label>
            </DivisaoTelefone>
            
            <p>atendimento@familiadositio.com.br</p>
            <p>Segunda a quinta das 08h às 18h e <br/> Sexta das 08h às 17h</p>
            <a>Perguntas Frequentes</a>
          </Divisao2>

        </ParteSuperior>

          

        <CopyRigthSection>
          <p>Café do Sítio Indústria e Comércio Ltda - Todos os direitos reservados <br/> QS 09 RUA 100 LOTE 04 - Taguatinga - Distrito Federal - CNPJ: 00.452.102/0001-48</p>
          <img src="../src/assets/UnBLogo.png"/>
        </CopyRigthSection>

      </Conteudo>
    </DivFooter>
  );
}

export default Footer;