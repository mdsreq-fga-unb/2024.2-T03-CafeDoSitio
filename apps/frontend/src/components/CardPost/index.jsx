import React from "react";

import {
    Section1,
    StyledButton as Button
  } from "./styled";

const CardPost = ({titulo, banner, tag, descricao}) => {
    return (
        <Section1>

        <div className="details">
          <img src={banner} alt="Banner Post" />
          <div className="content">
            <h1 className="titulo">{titulo}</h1>
            <div className="categoria">
              <p className="tag">{tag}</p>
            </div>
            <label dangerouslySetInnerHTML={{ __html: descricao }} />
          </div>
        </div>

        <Button>Ler Mais...</Button>
        <div className="linha-botao" /> 

        </Section1>
    )
}

export default CardPost;