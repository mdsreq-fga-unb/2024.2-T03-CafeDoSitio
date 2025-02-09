import React from "react";
import { PreviewContainer, Title, URL, Description } from "./styled";

const SEOPreview = ({ title, slug, description }) => {
  return (
    <PreviewContainer>
      <Title>{title || "Título do Blog | Família do Sítio"}</Title>
      <URL>{`https://familiadositio.com.br/blog/${slug || "{SLUG}"}`}</URL>
      <Description>
        {description
          ? description.slice(0, 160)
          : "Insira uma meta descrição para otimizar seu post."}
      </Description>
    </PreviewContainer>
  );
};

export default SEOPreview;
