import React from "react";
import Paginacao from '../../../components/Paginacao';
import BigPost from "../../../components/BigPost";
import {
  Space
} from "./styled";

const BlogPage = () => {
  return (
    <>
    <Paginacao text={"Família do sítio > Blog"}/>
    <Space />
    
    <BigPost title={"Teste"}/>
    </>
  );

};

export default BlogPage;