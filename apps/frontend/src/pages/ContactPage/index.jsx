import React from 'react';
import Paginacao from '../../components/Paginacao';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {  ContactSection,
          ContactCards, 
          ContactCard, 
          EmailLink, 
          InfoSection, 
          EmailZone 
        } from './styled';
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa"; // Ícones do Font Awesome

const ContactPage = () => {
  const contacts = [
    {
      title: "PARA FALAR SOBRE NOSSOS PRODUTOS",
      description: "Utilize dúvidas, sugestões ou reclamações sobre nossos produtos, embalagens ou ponto de venda.",
      email: "qualidade@familiadositio.com.br",
      icon: <FaEnvelope />
    },
    {
      title: "PARA FALAR SOBRE NOSSOS PRODUTOS",
      description: "Utilize dúvidas, sugestões ou reclamações sobre nossos produtos, embalagens ou ponto de venda.",
      email: "atendimento@familiadositio.com.br",
      icon: <FaEnvelope />
    },
    {
      title: "PARA FALAR SOBRE NOSSOS PRODUTOS",
      description: "Utilize dúvidas, sugestões ou reclamações sobre nossos produtos, embalagens ou ponto de venda.",
      email: "comercial@familiadositio.com.br",
      icon: <FaEnvelope />
    },
  ];

  return (
    <>
      <Header />
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
                <span>{contact.icon}</span>
                <EmailLink href={`mailto:${contact.email}`}>
                  {contact.email}
                </EmailLink>
              </EmailZone>
            </ContactCard>
          ))}
        </ContactCards>
      </ContactSection>

      <Footer />
    </>
  );
};

export default ContactPage;
