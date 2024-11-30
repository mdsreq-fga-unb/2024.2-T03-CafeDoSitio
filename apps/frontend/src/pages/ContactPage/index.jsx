import React from 'react';
import Paginacao from '../../components/Paginacao';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {
  ContactSection,
  ContactCards,
  ContactCard,
  EmailLink,
  InfoSection,
  EmailZone,
  CardInfo,
  SocialIcons,
  Links,
  ContactInfo,
} from './styled';
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaComments } from "react-icons/fa"; // Ícones do Font Awesome

const ContactPage = () => {
  const contacts = [
    {
      title: "PARA FALAR SOBRE NOSSOS PRODUTOS",
      description: "Utilize dúvidas, sugestões ou reclamações sobre nossos produtos, embalagens ou ponto de venda.",
      email: "qualidade@familiadositio.com.br",
      icon: <FaEnvelope />
    },
    {
      title: "CENTRAL DE ATENDIMENTO AO CONSUMIDOR",
      description: "Utilize dúvidas, sugestões ou reclamações sobre nossos produtos, embalagens ou ponto de venda.",
      email: "atendimento@familiadositio.com.br",
      icon: <FaEnvelope />
    },
    {
      title: "CENTRAL DE RELACIONAMENTO COM O LOJISTA",
      description: "Utilize dúvidas, sugestões ou reclamações sobre nossos produtos, embalagens ou ponto de venda.",
      email: "comercial@familiadositio.com.br",
      icon: <FaEnvelope />
    },
  ];

  return (
    <>
      <Header pagina={"CONTATOS"}/>
      <Paginacao text={"FAMÍLIA DO SÍTIO > CONTATOS"}/>

      <InfoSection className='container'>
        <h1>FALE CONOSCO</h1>
        <p>Precisa de ajuda com alguma dúvida, sugestão ou reclamação?<br/>Utilize nossos canais de atendimento:</p>
      </InfoSection>

      <ContactSection>
        <ContactCards>
          {contacts.map((contact) => (
            <ContactCard>
              <h1>{contact.title}</h1>
              <p>{contact.description}</p>
              <EmailZone>
              <FaEnvelope size={20} color="#006343"/>
                <EmailLink href={`mailto:${contact.email}`}>
                  {contact.email}
                </EmailLink>
              </EmailZone>
            </ContactCard>
          ))}
        </ContactCards>
      </ContactSection>

      <CardInfo>
        <div className='marcador'>
          <FaComments size={60} color="white" />
          <h2>FALE COM < br/> A FAMÍLIA</h2>
        </div>
        <ContactInfo>
          <div className="phone">
            <FaPhoneAlt size={28} color="#006343"/>
            <label> (61) 2108-0101</label>
          </div>
          <div className="email">
            <FaEnvelope size={28} color="#006343"/>
            <label>atendimento@familiadositio.com.br</label>
          </div>
        </ContactInfo>
        <div className='horario_redes'>
          <h3>Horário de atendimento:</h3>
          <p>
            Segunda a quinta das 08h às 18h e<br />
            Sexta das 08h às 17h
          </p>
          <SocialIcons>
            <FaInstagram />
            <FaFacebook />
            <FaYoutube />
            <FaLinkedin />

          </SocialIcons>
        </div>
        <Links>
          <a href="#faq">Perguntas Frequentes</a>
          <a href="#privacy">Política de Privacidade</a>
        </Links>
      </CardInfo>
      <Footer />
    </>
  );
};

export default ContactPage;
