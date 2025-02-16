import React from "react";
import { Content, Image, Title, Description, Button } from "./styled";
import cafe from "../../assets/cafe.png"

const SmallPost = () => {
  return (
    <Content>
      <div className="section1">
        <Image src = {cafe}/>
      </div>

      <div className="section2">
        <Title>Título de um Blog Aqui</Title>
        <Description>Lorem ipsum dolor sit, amet ti facilis recusandae modi praesentium delectus excepturi sint quia cumque maiores quas aliquam rem magni veritatis beatae non ea. Vitae.</Description>
        <Button>Ler Post</Button>
      </div>
    </Content>
  );
};

export default SmallPost;