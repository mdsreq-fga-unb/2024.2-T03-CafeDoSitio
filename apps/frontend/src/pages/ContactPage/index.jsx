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
  FaleCom,
  SocialIcons,
  Links,
  ContactInfo,
  Horario_redes,
  Sac,
  Location,
  Form,
  Title,
  Label,
  Input,
  TextArea,
  Button
} from './styled';
import { FaEnvelope, FaPhoneAlt, FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaComments } from "react-icons/fa"; // Ícones do Font Awesome
import { FaXTwitter } from "react-icons/fa6";

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

      <FaleCom>
        <div className='marcador'>
          <FaComments size={60} color="white" />
          <h2>FALE COM < br/> A FAMÍLIA</h2>
        </div>
        <ContactInfo>
          <div className="phone">
            <FaPhoneAlt size={28} color="#006343"/>
            <label> (61) 2108-0101</label>
          </div>
          <div className='email_zone'>
            <FaEnvelope size={28} color="#006343"/>
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

      <Sac>
        <Location>
          <h2>Localização</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15350.606789028072!2d-48.0269256!3d-15.8748932!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2d87432ac44d%3A0xff6ae8c97e66c8b8!2zQ2Fmw6kgZG8gU8OtdGlv!5e0!3m2!1spt-BR!2sbr!4v1733509279879!5m2!1spt-BR!2sbr"
            width="600"
            height="450"
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade" 
          ></iframe>
          <p>QS 09 RUA 101 LOTE 04 - Taguatinga</p>
          <p>Distrito Federal - CNPJ: 00.452.002/0001-48</p>
          <p>Café do Sítio Indústria e Comércio Ltda</p>
        </Location>

        <Form>
          <Title>Fale Conosco</Title>
          <Label htmlFor="name">Nome e Sobrenome:</Label>
          <Input type="text" id="name" placeholder="Nome e Sobrenome" />

          <Label htmlFor="email">Email:</Label>
          <Input type="email" id="email" placeholder="Email" />

          <Label htmlFor="phone">Telefone:</Label>
          <Input type="tel" id="phone" placeholder="Telefone" />

          <Label htmlFor="subject">Assunto:</Label>
          <Input type="text" id="subject" placeholder="Assunto" />

          <Label htmlFor="message">Mensagem:</Label>
          <TextArea id="message" rows="5" placeholder="Mensagem"></TextArea>

          <Button type="submit">Enviar</Button>
        </Form>
      </Sac>
      <Footer />
    </>
  );
};

export default ContactPage;
