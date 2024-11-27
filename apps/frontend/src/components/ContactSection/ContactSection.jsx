import React from 'react';
import './ContactSection.css'; // Arquivo para estilização, se necessário.

const ContactSection = () => {
  const contacts = [
    {
      title: "PARA FALAR SOBRE NOSSOS PRODUTOS",
      description: "Utilize dúvidas, sugestões ou reclamações sobre nossos produtos, embalagens ou ponto de venda.",
      email: "qualidade@familiadositio.com.br",
    },
    {
      title: "PARA FALAR SOBRE NOSSOS PRODUTOS",
      description: "Utilize dúvidas, sugestões ou reclamações sobre nossos produtos, embalagens ou ponto de venda.",
      email: "atendimento@familiadositio.com.br",
    },
    {
      title: "PARA FALAR SOBRE NOSSOS PRODUTOS",
      description: "Utilize dúvidas, sugestões ou reclamações sobre nossos produtos, embalagens ou ponto de venda.",
      email: "comercial@familiadositio.com.br",
    },
  ];

  return (
    <section className="contact-section">
      <h2>FALE CONOSCO</h2>
      <p>Precisa de ajuda com alguma dúvida, sugestão ou reclamação? Utilize nossos canais de atendimento:</p>
      <div className="contact-cards">
        {contacts.map((contact, index) => (
          <div key={index} className="contact-card">
            <h3>{contact.title}</h3>
            <p>{contact.description}</p>
            <a href={`mailto:${contact.email}`} className="email-link">
              {contact.email}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ContactSection;
