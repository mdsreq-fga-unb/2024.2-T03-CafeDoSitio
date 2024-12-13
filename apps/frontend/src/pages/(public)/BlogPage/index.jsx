import React from "react";
import Paginacao from '../../../components/Paginacao';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import BigPost from "../../../components/BigPost";


const BlogPage = () => {
  return (
    <>
    <Paginacao text={"Família do sítio > Blog"}/>
    <BigPost title={"Teste"}/>
    </>
  );

};

export default BlogPage;