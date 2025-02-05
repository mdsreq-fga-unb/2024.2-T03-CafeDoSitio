import React from "react";
import Paginacao from '../../../components/Paginacao';
import BlogInfo from '../../../assets/blog_info.png'


import {
  Space,
  Section1,
  Section2,
} from "./styled";

const BlogPage = () => {
  return (
    <>
    <Paginacao text={"Família do sítio > Blog"}/>
    <Space />

    <Section1>
      <h1>Nosso Blog</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis ab magni amet exercitationem neque, error quos expedita nemo explicabo laborum architecto odit eum ipsa quod libero minus magnam ut nulla.</p>
      <div className="image-container">
        <img src={BlogInfo}></img>
        <div className="text-container">
          <h2>Aqui você encontrar curiosidades, informações e receitas para os amantes de café!</h2>
        </div>
      </div>

      <div className="linha"/>
    </Section1>

    <Section2>
      <div className="container">
        <h1>Últimas publições</h1>
      </div>

    </Section2>
    
   
    </>
  );
};

export default BlogPage;