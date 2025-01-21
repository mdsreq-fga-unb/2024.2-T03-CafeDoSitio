import React from "react";
import Paginacao from '../../../components/Paginacao';
import BigPost from "../../../components/BigPost";
import SmallPost from "../../../components/SmallPost";
import {
  Space,
  Space2,
  BlogsDiv,
} from "./styled";

const BlogPage = () => {
  return (
    <>
    <Paginacao text={"Família do sítio > Blog"}/>
    <Space />
    
    <BigPost title={"Teste"}/>
    <Space2 />

    <BlogsDiv>
      <SmallPost />
      <SmallPost />
      <SmallPost />
    </BlogsDiv>
    </>
  );

};

export default BlogPage;