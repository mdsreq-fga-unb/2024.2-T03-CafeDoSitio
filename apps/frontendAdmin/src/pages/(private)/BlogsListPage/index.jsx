import React from "react";
import { createBlog, findAllBlog } from "@familiadositio/core"
import { Space, InfoZone, FilterZone1 } from "./styled";
import Paginacao from "../../../components/Paginacao";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/RoutesConstants";

const BlogsListPage = () => {
  return(
    <div>
      <Paginacao><Link to={ROUTES.HOME} className="page">Central de Administração</Link> {" > Gerenciar Blogs"}</Paginacao>
      <Space />

      <InfoZone>
        <h1>Gerenciamento de Blogs</h1>
        <span>Aqui você poderá criar, publicar e editar novos blogs para gerar conteúdo informativo ao Site Institucional da Família do Sítio.</span>
      </InfoZone>

      <FilterZone1>
        <div className="filter-zone status-filter">
          <label>Todos (80)</label>
          <label>|</label>
          <label>Rascunhos (80)</label>
          <label>|</label>
          <label>Publicados (80)</label>
        </div>
        <div className="filter-zone search-filter">
          
        </div>

      </FilterZone1>

    </div>
  );
}

export default BlogsListPage;