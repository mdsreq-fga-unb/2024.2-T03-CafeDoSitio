import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Paginacao from "../../../components/Paginacao";
import { Space, Conteudo, Categoria, Linha, Section2, ControlePaginacao, Divisor, Select } from "./styled";
import { ROUTES } from "../../../routes/RoutesConstants";
import { filterBlogsBasicUser } from "@familiadositio/core";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // CSS do <ToastContainer />
import CardPost from "../../../components/CardPost";
import { FaInfoCircle } from "react-icons/fa";

const baseURL = "http://localhost:3002";

const BlogViewPage = () => {

  const navigate = useNavigate();

  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);
  const [tagFilter, setTagFilter] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const limit = 2;

  const changePageToBlogView = (item) => {
      window.scrollTo(0, 0);
      navigate(`${ROUTES.BLOG}/${item.slug}`);
  }

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(`${baseURL}/blog/slug/${slug}`);
        setBlog(response.data.blog);
      } catch (error) {
        console.error("Erro ao buscar blog:", error);
      }
    };

    fetchBlog();
  }, [slug]);

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

  if (!blog) return <p>Carregando...</p>;

  return (
    <>
      <Paginacao>
        <Link className="page" to={ROUTES.HOME}>Família do Sítio</Link>
        {" > "}
        <Link className="page" to={ROUTES.BLOG}>Blog</Link>
        {" > "}
        <span>{blog.titulo}</span>
      </Paginacao>
      <Space />

      <Helmet>
        <title>{blog.titulo} - Família do Sítio</title>
        <meta name="description" content={blog.conteudo.substring(0, 150)} />
        <meta property="og:title" content={blog.titulo} />
        <meta property="og:description" content={blog.conteudo.substring(0, 150)} />
        <meta property="og:image" content={blog.banner} />
        <meta property="og:type" content="article" />
        <meta property="og:date" content={blog.dataHoraPublicacao} />
      </Helmet>

      <ToastContainer />

      <Conteudo>
        <h1 className="titulo-blog">{blog.titulo}</h1>
        <Categoria>
          <p className="tag">
            {blog.tag}
          </p>
        </Categoria>
        <img src={blog.banner} alt={blog.titulo} className="banner-blog"/>
        <div className="conteudo-blog" dangerouslySetInnerHTML={{ __html: blog.conteudo }} />
      </Conteudo>
      <Linha />
      <Divisor>
          <h1>Outras Publicações</h1>
      </Divisor>
      <Select onChange={(e) => {setTagFilter(e.target.value); setCurrentPage(1)}}>
        <option value="">Todos</option>
        <option value="curiosidades">Curiosidades</option>
        <option value="dicas">Dicas</option>
        <option value="noticias">Notícias</option>
        <option value="novidades">Novidades</option>
        <option value="receitas">Receitas</option>
      </Select>
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
                onClick={() => changePageToBlogView(blog)}
              />
            ))
          ) : (
            <div className="infoSize">
              <FaInfoCircle className="icon"/>
              <span>Nenhuma publicação encontrada.</span>
            </div>
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
            <li onClick={() => {setTagFilter(""); setCurrentPage(1)}} style={{backgroundColor: tagFilter === "" ? "#2b674b" : "#F39729"}}>Todos</li>
            <li onClick={() => {setTagFilter("curiosidades"); setCurrentPage(1)}} style={{backgroundColor: tagFilter === "curiosidades" ? "#2b674b" : "#F39729"}}>Curiosidades</li>
            <li onClick={() => {setTagFilter("dicas"); setCurrentPage(1)}} style={{backgroundColor: tagFilter === "dicas" ? "#2b674b" : "#F39729"}}>Dicas</li>
            <li onClick={() => {setTagFilter("noticias"); setCurrentPage(1)}} style={{backgroundColor: tagFilter === "noticias" ? "#2b674b" : "#F39729"}}>Notícias</li>
            <li onClick={() => {setTagFilter("novidades"); setCurrentPage(1)}} style={{backgroundColor: tagFilter === "novidades" ? "#2b674b" : "#F39729"}}>Novidades</li>
            <li onClick={() => {setTagFilter("receitas"); setCurrentPage(1)}} style={{backgroundColor: tagFilter === "receitas" ? "#2b674b" : "#F39729"}}>Receitas</li>
          </ul>
        </div>
      </Section2>
    </>
  );
};

export default BlogViewPage;