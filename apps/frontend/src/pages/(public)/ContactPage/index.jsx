import React from 'react';
import Paginacao from '../../../components/Paginacao';
import Sac from '../../../components/SacSection'
import {
  ContactSection,
  ContactCards,
  ContactCard,
  EmailLink,
  InfoSection,
  EmailZone,
  FaleCom,
  SocialIcons,
  Links,
  ContactInfo,
  Horario_redes,
  Space,
  ImageWrapper
} from './styled';
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaComments } from "react-icons/fa"; // Ícones do Font Awesome
import { FaXTwitter } from "react-icons/fa6";

const ContactPage = () => {
  const contacts = [
    {
      title: "PARA FALAR SOBRE NOSSOS PRODUTOS",
      description: "Para dúvidas, sugestões ou reclamações sobre nossos produtos, embalagens ou ponto de venda.",
      email: "qualidade@familiadositio.com.br",
    },
    {
      title: "CENTRAL DE ATENDIMENTO AO CONSUMIDOR",
      description: "Para suporte geral, informações ou esclarecimento de dúvidas ao consumidor.",
      email: "atendimento@familiadositio.com.br",
    },
    {
      title: "CENTRAL DE RELACIONAMENTO COM O LOJISTA",
      description: "Para pedidos, negociações, informações comerciais ou formação de parceria de novos lojistas.",
      email: "comercial@familiadositio.com.br",
    },
  ];
  
  return (
    <>
      <Paginacao text={"FAMÍLIA DO SÍTIO > CONTATOS"} />
      <Space />

      <InfoSection>
        <h1>FALE CONOSCO</h1>
        <p>Precisa de ajuda com alguma dúvida, sugestão ou reclamação?<br />Utilize nossos canais de atendimento:</p>
      </InfoSection>

      <ContactSection>
        <ContactCards>
          {contacts.map((contact) => (
            <ContactCard className='card'>
              <h1>{contact.title}</h1>
              <p>{contact.description}</p>
              <EmailZone>
                <ImageWrapper>
                  {/* svg do icone do email  */}
                  <svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
                    <path class="cls-1" fill="#333" d="M457.46,88.54c-.39-.25-.79-.47-1.23-.67-2.23-1.37-4.52-2.65-6.93-3.62-.87-.37-1.77-.63-3.73-1.19l-1.13-.38c-1.33-.45-2.67-.87-4.07-1.15-3.18-.64-6.4-.96-9.55-.96H69.19c-3.15,0-6.36.32-9.55.96-1.46.29-2.84.74-4.22,1.21l-1.96.61c-.93.26-1.86.53-2.74.89-2.44,1.01-4.74,2.28-7.04,3.67l-1.11.63c-13.95,9.1-22.29,24.4-22.29,40.93v241.09c0,13.27,5.31,25.72,14.95,35.08,9.21,8.92,21.27,13.82,33.95,13.82h361.63c11.86,0,23.17-4.3,32.18-12.2l1.8-1.66c9.63-9.33,14.93-21.78,14.93-35.04v-241.09c0-16.53-8.32-31.83-22.26-40.92ZM450.79,129.45v241.09c0,.45-.02.89-.05,1.33l-131.78-121.87,131.78-121.87c.03.45.05.88.05,1.33ZM49.21,370.55v-241.09c0-.43.02-.88.05-1.31l131.78,121.86-131.78,121.87c-.03-.45-.05-.88-.05-1.33ZM202.35,269.7l15.35,14.19c17.83,15.7,46.54,15.94,64.87-.24l15.09-13.95,130.65,120.82H71.7l130.65-120.82ZM237.06,262.4L71.68,109.48h356.64l-165.17,152.74c-7.52,6.56-18.78,6.6-26.08.18Z" />
                  </svg>
                </ImageWrapper>
                <EmailLink href={`mailto:${contact.email}`}>
                  {contact.email}
                </EmailLink>
              </EmailZone>
            </ContactCard>
          ))}
        </ContactCards>
      </ContactSection>

      <FaleCom>
        <div className='marcador'>
          {/* svg do icone do fale com a familia  */}
          <svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
            <path class="cls-1" fill='#FFF' d="M73.81,360.42c-.92,0-1.76-.06-2.52-.18-4.18-.66-6.35-2.86-7.43-4.59-3.52-5.6.21-10.75,2.94-14.52,2.47-3.41,5.85-8.08,9.04-15.61.06-.14.12-.29.18-.44-1.67-.09-3.44-.19-5.3-.3l.48-7.78-.66,7.76c-9.15-.56-13.75-.84-17.02-1.35-8.63-1.35-21.62-3.38-32.19-13.7-6.82-6.65-10.18-14.25-11.79-19.45-1.41-4.53-2.13-9.27-2.13-14.06v-135.64c0-26.08,21.22-47.31,47.31-47.31h257.84c26.09,0,47.31,21.22,47.31,47.31l-.04,136.47c-1.22,11.5-5.75,32.1-22.37,40.99-6.47,3.46-13.05,4.2-23.96,5.44-12.02,1.37-21.7,1.06-26.41.76-10.03-.61-37.28-.17-91.58.7l-8.76.15c-10.89.2-22.84.42-40.23.47-6.12.02-11.42.02-15.55,0-4.3,5.96-9.28,11.3-14.83,15.93-14.29,11.91-32.41,18.95-42.31,18.95ZM54.71,108.83c-17.49,0-31.73,14.23-31.73,31.73v135.64c0,3.23.48,6.4,1.42,9.43.89,2.86,3.08,8.33,7.8,12.93,7.01,6.84,15.87,8.23,23.68,9.45,2.57.4,7.2.68,15.6,1.19h.18c6.37.4,11.66.62,15.34.74l9.85.33-2.59,9.51c-1.09,4.01-2.47,7.98-4.1,11.81-1.75,4.12-3.58,7.59-5.31,10.49,6.24-2.45,14.06-6.58,21.28-12.6,5.44-4.53,10.21-9.92,14.19-16.02l2.31-3.55h4.23c4.38.02,11.22.03,19.58.01,17.28-.05,29.17-.27,39.99-.46l8.8-.16c54.7-.88,82.15-1.32,92.77-.67,4.25.27,12.88.54,23.66-.68,9.73-1.11,14.59-1.66,18.43-3.71,10.47-5.6,13.39-21.49,14.18-28.5v-135.22c0-17.5-14.23-31.73-31.73-31.73H54.71ZM220.98,254.25c10.6-12.23,15.36-28.44,13.06-44.49-.61-4.26-4.55-7.2-8.82-6.61-4.26.61-7.22,4.56-6.61,8.81,1.66,11.57-1.77,23.26-9.41,32.08-6.93,7.99-16.25,12.57-25.58,12.57s-18.65-4.58-25.58-12.57c-7.64-8.81-11.07-20.5-9.41-32.08.61-4.26-2.35-8.21-6.61-8.81-4.27-.63-8.21,2.34-8.82,6.61-2.3,16.05,2.46,32.26,13.07,44.49,9.89,11.4,23.5,17.95,37.35,17.95s27.46-6.54,37.35-17.95ZM223.67,186.78c-8.43,0-15.29-6.86-15.29-15.29s6.86-15.29,15.29-15.29,15.29,6.86,15.29,15.29-6.86,15.29-15.29,15.29ZM223.38,171.49c0,.16.13.29.29.29l-.29-.29ZM140.43,186.78c-8.43,0-15.29-6.86-15.29-15.29s6.86-15.29,15.29-15.29,15.29,6.86,15.29,15.29-6.86,15.29-15.29,15.29ZM140.14,171.49c0,.16.13.29.29.29l-.29-.29ZM445.29,139.58h-69.66c-.09,4.43-.33,8.84-.6,13.26.08.78.17,1.55.24,2.32h70.02c17.49,0,31.73,14.23,31.73,31.73v135.65c0,3.23-.48,6.4-1.43,9.44-.89,2.85-3.08,8.32-7.79,12.93-7.03,6.85-16.27,8.3-23.71,9.45-2.53.39-7.09.68-15.38,1.19l-.37.02c-6.37.38-11.66.6-15.35.72l-9.84.32,2.57,9.51c1.08,3.97,2.46,7.95,4.1,11.83,1.75,4.12,3.58,7.59,5.3,10.49-6.24-2.46-14.06-6.58-21.28-12.6-5.45-4.53-10.22-9.93-14.18-16.02l-2.31-3.55h-4.24c-4.38.03-11.21.05-19.57.01-17.32-.05-29.21-.26-40.05-.46l-8.74-.16c-54.69-.87-82.15-1.32-92.83-.66-4.2.27-12.84.54-23.6-.69-10.37-1.17-14.72-1.73-18.43-3.71-3.82-2.04-6.62-5.47-8.69-9.33h-16.95c3.23,8.93,8.71,17.95,18.3,23.07,6.49,3.47,13.08,4.21,24.01,5.45,11.97,1.38,21.64,1.06,26.38.76,10-.62,37.25-.18,91.55.7l8.71.15c10.9.2,22.87.42,40.29.46,6.12.02,11.42.03,15.55,0,4.3,5.96,9.27,11.31,14.83,15.94,14.29,11.91,32.41,18.94,42.31,18.94.92,0,1.76-.06,2.53-.18,4.18-.66,6.35-2.87,7.43-4.59,3.52-5.61-.22-10.77-2.94-14.53-2.47-3.4-5.84-8.07-9.03-15.59-.06-.15-.12-.3-.19-.45,1.66-.08,3.43-.18,5.29-.29l.39-.02c9.03-.56,13.57-.84,16.82-1.34,8.6-1.34,21.6-3.37,32.19-13.7,6.82-6.65,10.18-14.25,11.79-19.45,1.41-4.53,2.13-9.27,2.13-14.07v-135.65c0-26.09-21.22-47.31-47.31-47.31Z" />
          </svg>
          <h2>FALE COM < br /> A FAMÍLIA</h2>
        </div>
        <ContactInfo>
          <div className="phone">
            <FaPhoneAlt size={28} color="#006343" />
            <label> (61) 2108-0101</label>
          </div>
          <div className='email_zone'>
            {/* svg do icone do email  */}
            <svg id="Camada_1" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500">
              <path class="cls-1" fill="#006343" d="M457.46,88.54c-.39-.25-.79-.47-1.23-.67-2.23-1.37-4.52-2.65-6.93-3.62-.87-.37-1.77-.63-3.73-1.19l-1.13-.38c-1.33-.45-2.67-.87-4.07-1.15-3.18-.64-6.4-.96-9.55-.96H69.19c-3.15,0-6.36.32-9.55.96-1.46.29-2.84.74-4.22,1.21l-1.96.61c-.93.26-1.86.53-2.74.89-2.44,1.01-4.74,2.28-7.04,3.67l-1.11.63c-13.95,9.1-22.29,24.4-22.29,40.93v241.09c0,13.27,5.31,25.72,14.95,35.08,9.21,8.92,21.27,13.82,33.95,13.82h361.63c11.86,0,23.17-4.3,32.18-12.2l1.8-1.66c9.63-9.33,14.93-21.78,14.93-35.04v-241.09c0-16.53-8.32-31.83-22.26-40.92ZM450.79,129.45v241.09c0,.45-.02.89-.05,1.33l-131.78-121.87,131.78-121.87c.03.45.05.88.05,1.33ZM49.21,370.55v-241.09c0-.43.02-.88.05-1.31l131.78,121.86-131.78,121.87c-.03-.45-.05-.88-.05-1.33ZM202.35,269.7l15.35,14.19c17.83,15.7,46.54,15.94,64.87-.24l15.09-13.95,130.65,120.82H71.7l130.65-120.82ZM237.06,262.4L71.68,109.48h356.64l-165.17,152.74c-7.52,6.56-18.78,6.6-26.08.18Z" />
            </svg>
            <a href="mailto:atendimento@familiadositio.com.br" class="email">atendimento@familiadositio.com.br</a>
          </div>
        </ContactInfo>
        <Horario_redes>
          <div className='horario_redes'>
            <h3>Horário de atendimento:</h3>
            <p>
              Segunda a quinta das 08h às 18h e<br />
              Sexta das 08h às 17h
            </p>
            <SocialIcons>
              <a href="https://www.instagram.com/cafedositio/" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </a>
              <a href="https://www.facebook.com/cafedositio" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </a>
              <a href="https://www.youtube.com/channel/UCVlH17pdWNMS6l5XzBqsOoA" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </a>
              <a href="https://www.linkedin.com/company/cafedositio/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>
              <a href="https://x.com/cafe_do_sitio" target="_blank" rel="noopener noreferrer">
                <FaXTwitter />
              </a>
            </SocialIcons>
          </div>
        </Horario_redes>
        <Links>
          <a href="#faq">Perguntas Frequentes</a>
          <a href="#privacy">Política de Privacidade</a>
        </Links>
      </FaleCom>
      <Sac />
    </>
  );
};

export default ContactPage;
