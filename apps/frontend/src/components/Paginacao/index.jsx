import React from "react";
import { DivLetreiro, DivPagincacao, Letreiro } from "./styled";

function Paginacao({text}) {
  return (
    <DivPagincacao>
      <DivLetreiro>
        <Letreiro className="container">{text}</Letreiro>
      </DivLetreiro>
    </DivPagincacao>
  )
}

export default Paginacao;