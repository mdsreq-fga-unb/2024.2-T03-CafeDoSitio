import React from "react";
import Paginacao from '../../../components/Paginacao';
import BlogInfo from '../../../assets/blog_info.png';
import CardPost from '../../../components/CardPost';


import {
  Space,
  Section1,
  Section2

} from "./styled";

const BlogPage = () => {
  return (
    <>
      <Paginacao text={"Família do sítio > Blog"} />
      <Space />

      <Section1>
        <h1>Nosso Blog</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Perspiciatis ab magni amet exercitationem neque, error quos expedita
          nemo explicabo laborum architecto odit eum ipsa quod libero minus
          magnam ut nulla.
        </p>
        <div className="image-container">
          <img src={BlogInfo} alt="Blog Info" />
          <div className="text-container">
            <h2>
              Aqui você encontra curiosidades, informações e receitas para os
              amantes de café!
            </h2>
          </div>
        </div>
        <div className="linha" />

        <div className="container">
          <h1>Últimas publicações</h1>
        </div>
      </Section1>

      <Section2>
        <div className="posts">
          <CardPost />
          <CardPost />
        </div>

        <div className="categorias">
          <h2>Categorias</h2>
          <ul>
            <li>Curiosidades</li>
            <li>Dicas</li>
            <li>Notícias</li>
            <li>Novidades</li>
            <li>Receitas</li>
          </ul>
        </div>
      </Section2>




    </>
  );
};

export default BlogPage;