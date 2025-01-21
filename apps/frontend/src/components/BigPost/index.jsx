import React from "react";
import {
  Content,
  Title,
  Description,
  Button,
  Image,
  Data,
} from "./styled"
import { DivContainer } from "../../pages/(public)/nossaHistoria/styled";
import cafe from "../../assets/cafe.png"


const BigPost = ({title, description, imagelink, date}) => {
  return (
    <Content >
      <div className="section1">
        <Title>{title}</Title>
        <Description>
          Lorem ipsum dolondus sint rerum ex maiores placeat, corporis odit cumque voluptate cum harum totam quibusdam!
        </Description>
        <div className="info-section1">
          <Button>Ler Mais</Button>
          <Data>
            Janeiro 12 de 2025
          </Data>
        </div>
      </div>

      <div className="section2">
        <Image src = {cafe}/>
      </div>

    </Content>
  );
};

export default BigPost;
