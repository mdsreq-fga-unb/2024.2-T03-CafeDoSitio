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
              <svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" style={{ width: "40px", height: "50px" }}>
                <path className="cls-1" fill="#fff" d="M383.62,188.67c0,8.31,7.3,15.6,15.61,15.6s15.61-7.29,15.61-15.6c0-57.08-46.43-103.51-103.5-103.51-8.31,0-15.61,7.3-15.61,15.62s7.3,15.6,15.61,15.6c39.86,0,72.29,32.43,72.29,72.29Z"/>
                <path className="cls-1" fill="#fff" d="M311.33,32.43c-8.31,0-15.61,7.29-15.61,15.6s7.3,15.62,15.61,15.62c68.93,0,125.02,56.08,125.02,125.02,0,8.31,7.3,15.6,15.61,15.6s15.61-7.29,15.61-15.6c0-86.15-70.09-156.24-156.24-156.24Z"/>
                <path className="cls-1" fill="#fff" d="M392.84,298.5c-20.99-20.99-55.13-20.99-76.12,0l-32.62,32.63c-22.55-14.11-44.05-31.34-63.97-51.26-19.91-19.91-37.13-41.41-51.24-63.97l32.62-32.61c10.15-10.14,15.75-23.67,15.75-38.06s-5.6-27.92-15.75-38.06l-41-41c-10.15-10.16-23.67-15.75-38.06-15.75s-27.92,5.6-38.07,15.75l-21.55,21.55c-29.53,29.52-37.9,75.78-23.56,130.27,13.58,51.61,46.21,105.18,91.89,150.85,45.67,45.67,99.25,78.31,150.85,91.9,17.24,4.54,33.84,6.84,49.35,6.84,33.06,0,61.05-10.51,80.92-30.4l21.55-21.56c10.15-10.14,15.75-23.67,15.75-38.06s-5.6-27.9-15.75-38.06l-41-41ZM139.05,202.82c-4.85,4.85-5.84,12.39-2.41,18.32,16.45,28.49,37.32,55.47,62.04,80.18,24.69,24.7,51.67,45.57,80.19,62.05,5.94,3.41,13.47,2.42,18.3-2.42l41-41c8.87-8.86,24.36-8.84,33.22,0l41,41c4.43,4.42,6.87,10.32,6.87,16.6s-2.44,12.19-6.87,16.61l-21.55,21.56c-21.58,21.57-57.49,27.12-101.09,15.66-46.48-12.23-95.17-42.06-137.13-84.01-41.94-41.95-71.77-90.64-84-137.12-11.48-43.62-5.91-79.52,15.66-101.09l21.55-21.56c4.43-4.42,10.33-6.87,16.61-6.87s12.18,2.44,16.61,6.87l40.99,41c4.41,4.41,6.84,10.32,6.84,16.61s-2.43,12.2-6.83,16.61l-41,40.99Z"/>
              </svg>
              <label className="number">(61) 2108-0101</label>
            </DivisaoTelefone>
            
            <p>atendimento@familiadositio.com.br</p>
            <p>Segunda a quinta das 08h às 18h e <br/> Sexta das 08h às 17h</p>
            <a>Perguntas Frequentes</a>
          </Divisao2>

        </ParteSuperior>

          

        <CopyRigthSection>
          <p>Café do Sítio Indústria e Comércio Ltda - Todos os direitos reservados <br/> QS 09 RUA 100 LOTE 04 - Taguatinga - Distrito Federal - CNPJ: 00.452.102/0001-48</p>
          <img src="./assets/UnBLogo.png"/>
        </CopyRigthSection>

      </Conteudo>
    </DivFooter>
  );
}

export default Footer;