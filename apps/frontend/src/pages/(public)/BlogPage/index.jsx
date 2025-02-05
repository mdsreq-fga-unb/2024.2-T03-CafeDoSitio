import React from "react";
import Paginacao from '../../../components/Paginacao';
import BlogInfo from '../../../assets/blog_info.png';
import BannerBlog from '../../../assets/banner_blog.png';

import {
  Space,
  Section1,
  Section2,
  StyledButton as Button
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
      </Section1>

      <Section2>
        <div className="container">
          <h1>Últimas publicações</h1>
        </div>

        <div className="details">
          <img src={BannerBlog} alt="Banner Blog" />
          <div className="content">
            <h1>O pretinho básico mais versátil da gastronomia</h1>
            <div className="categoria">
              <p>categoria</p>
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt animi autem inventore, eius vero sapiente quod laboriosam facere maxime quos, excepturi corrupti tenetur quasi sint. Eos veritatis velit similique nam?
            </p>
          </div>
        </div>

        <Button>Ler Mais...</Button>
        <div className="linha-botao" /> 
      </Section2>
    </>
  );
};

export default BlogPage;