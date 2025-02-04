import React from "react";
import { Container, Section1, Space } from "./styled";
import CapaPagina from "../../../assets/Capa.jpg";

import inicial2 from "../../../assets/inicial2.jpg"

const MainPage = () => {
  return (
    <div className="app">
      <Container>
        <img src={CapaPagina} alt="CapaCafé" className="img"/>

        <Section1>
          
            <h1>Conheça a nossa família, do Sítio para a sua casa</h1>
          
          
        </Section1>

        
      </Container>



    </div>
  );
};

export default MainPage;