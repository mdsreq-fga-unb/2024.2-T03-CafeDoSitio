import React from "react";
import { DivPagincacao, Letreiro } from "./styled";

function Paginacao({text}) {
  return (
    <DivPagincacao>
      <Letreiro className="container">{text}</Letreiro>
    </DivPagincacao>
  )
}

export default Paginacao;
