import React from "react";
import BannerBlog from '../../assets/banner_blog.png';

import {
    Section1,
    StyledButton as Button
  } from "./styled";

const CardPost = () => {
    return (
        <Section1>

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

        </Section1>
    )
}

export default CardPost;