import React, { useEffect, useState } from "react";
import Paginacao from '../../../components/Paginacao';
import BlogInfo from '../../../assets/blog_info.png';
import CardPost from '../../../components/CardPost';
import { filterBlogsBasicUser } from "@familiadositio/core";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // CSS do <ToastContainer />

import {
  Space,
  Section1,
  Section2,
  ControlePaginacao
} from "./styled";

const BlogPage = () => {

  const [blogs, setBlogs] = useState([]);
  const [tagFilter, setTagFilter] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const limit = 2;
  
  useEffect(() => {
    const fetchBlogs = async (tag = "") => {
      try {
        const data = await filterBlogsBasicUser(currentPage, limit, undefined, tagFilter);
        setBlogs(data.blogs);
        setTotalPages(data.totalPages);
      } catch (err) {
        console.error("Erro ao buscar os blogs:", err);
        toast.error("Erro ao buscar os blogs, tente novamente mais tarde!");
      }
    };
    fetchBlogs();
  }, [currentPage, tagFilter]);

  return (
    <>
      <Paginacao text={"Família do sítio > Blog"} />
      <Space />

      <ToastContainer />

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
          {blogs.length > 0 ? (
            blogs.map((blog) => (
              <CardPost
                key={blog._id}
                titulo={blog.titulo}
                banner={blog.banner}
                tag={blog.tag}
                descricao={blog.conteudo}
              />
            ))
          ) : (
            <h2>Nenhum post encontrado</h2>
          )}
        
          {/* Controles de Paginação */}
          <ControlePaginacao>
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
            >
              {"< Anterior"}
            </button>
            <span style={{ margin: "0 15px" }}>
              Página {currentPage} de {totalPages === 0 ? 1 : totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages || totalPages === 0}
            >
              {"Próxima >"}
            </button>
          </ControlePaginacao>
        </div>

        <div className="categorias">
          <h2>Categorias</h2>
          <ul>
            <li onClick={() => {setTagFilter(""); setCurrentPage(1)}} style={{backgroundColor: tagFilter === "" ? "#2b674b" : "#e97a1c"}}>Todos</li>
            <li onClick={() => {setTagFilter("curiosidades"); setCurrentPage(1)}} style={{backgroundColor: tagFilter === "curiosidades" ? "#2b674b" : "#e97a1c"}}>Curiosidades</li>
            <li onClick={() => {setTagFilter("dicas"); setCurrentPage(1)}} style={{backgroundColor: tagFilter === "dicas" ? "#2b674b" : "#e97a1c"}}>Dicas</li>
            <li onClick={() => {setTagFilter("noticias"); setCurrentPage(1)}} style={{backgroundColor: tagFilter === "noticias" ? "#2b674b" : "#e97a1c"}}>Notícias</li>
            <li onClick={() => {setTagFilter("novidades"); setCurrentPage(1)}} style={{backgroundColor: tagFilter === "novidades" ? "#2b674b" : "#e97a1c"}}>Novidades</li>
            <li onClick={() => {setTagFilter("receitas"); setCurrentPage(1)}} style={{backgroundColor: tagFilter === "receitas" ? "#2b674b" : "#e97a1c"}}>Receitas</li>
          </ul>
        </div>
      </Section2>




    </>
  );
};

export default BlogPage;