import React from "react";
import { Container, Section1 } from "./styled";
import CapaCafe from "../../../assets/CapaCafé.jpg";
import Content1MainPage from "../../../assets/Content1MainPage.jpg";

const MainPage = () => {
  return (
    <Container>
      <img src={CapaCafe} alt="CapaCafé" className="img"/>

      <Section1>
        <div className="section1-left section1Part">
          <h1>Conheça a nossa família, do Sítio para a sua casa</h1>
        </div>
        <div className="section1-right section1Part">
          Olá
        </div>
      </Section1>

    </Container>
  );
};

export default MainPage;