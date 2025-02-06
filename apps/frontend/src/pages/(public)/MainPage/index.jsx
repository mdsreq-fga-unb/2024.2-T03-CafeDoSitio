import React from "react";
import { Container, Section1, Card, Section2, Acoes } from "./styled";
import CapaPagina from "../../../assets/Capa.jpg";

const MainPage = () => {
  return (
    <div className="app">
      <Container>
        <img src={CapaPagina} alt="CapaCafé" className="img"/>
        <Section1>
          <Card>
            <h1>Conheça a nossa família, do Sítio para a sua casa</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
              tincidunt ut laoreet dolore magna aliquam erat.
            </p>
          </Card>
        </Section1>
        <Section2>
          <Acoes>
            <h1>Açoes Sociais e Sustentabilidade</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero consequuntur natus molestiae, excepturi vitae, iure laboriosam sint, neque blanditiis optio doloremque. Voluptatum, aliquam. Quas perspiciatis facilis ratione ipsam officiis veniam!</p>
            <button>Saiba mais</button>
          </Acoes>
        </Section2>
      </Container>
    </div>
  );
};

export default MainPage;