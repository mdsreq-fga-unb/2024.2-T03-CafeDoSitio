import React from "react";
import Paginacao from '../../../components/Paginacao';
import BlogInfo from '../../../assets/blog_info.png';
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
      <img src={BlogInfo}></img>
    </Section1>

    <Section2>

    </Section2>
    
   
    </>
  );
};

export default BlogPage;