import React from "react";
import {
  Content,
  Title,
  Description,
  Button,
  Image
} from "./styled"
import { DivContainer } from "../../pages/(public)/nossaHistoria/styled";

const BigPost = ({title, description, imagelink}) => {
  return (
    <Content>
      <div>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button>Ler Mais</Button>
      </div>

      <div>
        <Image src = {imagelink}/>
      </div>
    </Content>
  );
};

export default BigPost;
