import React from "react";
import { DivPaginacao, Layout, Letreiro } from "./styled";

function Paginacao({children}) {
  return (
    <DivPaginacao>
      <Layout>
        <Letreiro>{children}</Letreiro>
      </Layout>  
    </DivPaginacao>
  )
}

export default Paginacao;