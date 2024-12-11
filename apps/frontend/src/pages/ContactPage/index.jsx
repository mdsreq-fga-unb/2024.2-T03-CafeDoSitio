import React from 'react';
import Paginacao from '../../components/Paginacao';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sac from '../../components/SacSection'
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
  Horario_redes
} from './styled';
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaComments } from "react-icons/fa"; // Ícones do Font Awesome
import { FaXTwitter } from "react-icons/fa6";
// esses importes aqui embaixo são só um teste pra
// mostrar na tela os sacs que foram feitos
// vou alterar depois pra página isso ser feito na página de adm
import { Card } from '../../components/Card';
import sacService from '../../services/sac.service.js';
import { useState, useEffect } from 'react';

const ContactPage = () => {
  const contacts = [
    {
      title: "PARA FALAR SOBRE NOSSOS PRODUTOS",
      description: "Para dúvidas, sugestões ou reclamações sobre nossos produtos, embalagens ou ponto de venda.",
      email: "qualidade@familiadositio.com.br",
      icon: <FaEnvelope />
    },
    {
      title: "CENTRAL DE ATENDIMENTO AO CONSUMIDOR",
      description: "Para suporte geral, informações ou esclarecimento de dúvidas ao consumidor.",
      email: "atendimento@familiadositio.com.br",
      icon: <FaEnvelope />
    },
    {
      title: "CENTRAL DE RELACIONAMENTO COM O LOJISTA",
      description: "Para pedidos, negociações, informações comerciais ou formação de parceria de novos lojistas.",
      email: "comercial@familiadositio.com.br",
      icon: <FaEnvelope />
    },
  ];

  //Mostrando Sacs na tela
  const [sacs, setSacs] = useState([]);

  async function findAllSacs() {
    const response = await sacService.getAllSacs();
    setSacs(response.data);
  }

  //Aqui que ativa a função de mostrar os sacs
  // useEffect(() => {
  //   findAllSacs();
  // }, []);



  return (
    <>
      <Header pagina={"CONTATOS"} />
      <Paginacao text={"FAMÍLIA DO SÍTIO > CONTATOS"} />

      <InfoSection className='container'>
        <h1>FALE CONOSCO</h1>
        <p>Precisa de ajuda com alguma dúvida, sugestão ou reclamação?<br />Utilize nossos canais de atendimento:</p>
      </InfoSection>

      <ContactSection>
        <ContactCards>
          {contacts.map((contact) => (
            <ContactCard>
              <h1>{contact.title}</h1>
              <p>{contact.description}</p>
              <EmailZone>
                <FaEnvelope size={20} color="#006343" />
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
          <FaComments size={60} color="white" />
          <h2>FALE COM < br /> A FAMÍLIA</h2>
        </div>
        <ContactInfo>
          <div className="phone">
            <FaPhoneAlt size={28} color="#006343" />
            <label> (61) 2108-0101</label>
          </div>
          <div className='email_zone'>
            <FaEnvelope size={28} color="#006343" />
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
      {/*mapeando o vetor de sacs*/}
      <div style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}>
        {sacs.map((item, index) => {
          console.log(sacs);
          return <Card key={index} sacs={item} />;
        })}
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
