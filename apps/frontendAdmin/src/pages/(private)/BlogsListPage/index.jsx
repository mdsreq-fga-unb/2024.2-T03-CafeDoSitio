import React, { useState, useEffect } from "react";
import { createBlog, filterBlogs } from "@familiadositio/core";
import {
  Space,
  InfoZone,
  FilterZone1,
  BarraPesquisa,
  Content,
  ButtonSection,
  ControlePaginacao,
} from "./styled";
import Paginacao from "../../../components/Paginacao";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes/RoutesConstants";
import { FaSearch, FaPlus } from "react-icons/fa";
import Button from "../../../components/Button";
import RedButton from "../../../components/RedButton";
import Popup from "../../../components/PopUp";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // CSS do <ToastContainer />

import noImage from "../../../assets/noImage.jpg";

const BlogsListPage = () => {

  const navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [filtroTexto, setFiltroTexto] = useState("");
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [StatusFilter, setStatusFilter] = useState("all");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const limit = 10;

  const handleChangeTexto = (e) => {
    setFiltroTexto(e.target.value);
  };

  const countStatus = (reference) => {
    let count = 0;
    allBlogs.forEach((blog) => {
      if (blog.status === reference) {
        count++;
      }
    });
    return count;
  };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const fetchBlogs = async () => {
    try {
      const data = await filterBlogs(currentPage, limit, StatusFilter, filtroTexto);
      setAllBlogs(data.totalPosts);
      setBlogs(data.blogs);
      setTotalPages(data.totalPages);
      setTotalBlogs(data.NumberOfPosts);
    } catch (error) {
      console.error("Erro ao buscar blogs:", error);
      toast.error("Erro ao buscar blogs.");
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [currentPage, StatusFilter]); 

  useEffect(() => {
      const handleKeyPress = (e) => {
        if (e.key === "Enter") {
          fetchBlogs();
        }
      };
  
      // Adiciona o listener de teclado
      document.addEventListener("keydown", handleKeyPress);
  
      // Remove o listener ao desmontar o componente
      return () => {
        document.removeEventListener("keydown", handleKeyPress);
      };
    }, [filtroTexto]);

  const handleCreateBlog = async () => {
    try {
      await createBlog(
        "Novo Blog - " + new Date().toLocaleString("pt-BR", "DD/MM/YYYY")
      );
      toast.success("Blog criado com sucesso!");
      setIsPopupOpen(false);
    } catch (err) {
      console.log(err);
      toast.error("Erro ao criar o blog.");
    }
    fetchBlogs();
  };

  const changePageToEdit = (item) => {
    sessionStorage.setItem("blogId", item._id);
    navigate(`${ROUTES.BLOG}/${item._id}`);
  }

  return (
    <div>
      <Paginacao>
        <Link to={ROUTES.HOME} className="page">
          Central de Administração
        </Link>{" "}
        {" > Gerenciar Blogs"}
      </Paginacao>
      <Space />

      <ToastContainer />

      <InfoZone>
        <h1>Gerenciamento do Blog</h1>
        <span>
          Aqui você poderá criar, publicar e editar novas postagens para gerar
          conteúdo informativo ao Site Institucional da Família do Sítio.
        </span>
      </InfoZone>

      <FilterZone1>
        <div className="filter-zone status-filter">
          <label
            className="clickFilter"
            onClick={() => setStatusFilter("all")}
            style={{
              color: StatusFilter === "all" ? "#006343" : "black",
              textDecoration: StatusFilter === "all" ? "underline" : "none",
            }}
          >
            Todos ({totalBlogs})
          </label>
          <label>|</label>
          <label
            className="clickFilter"
            onClick={() => setStatusFilter("rascunho")}
            style={{
              color: StatusFilter === "rascunho" ? "#006343" : "black",
              textDecoration:
                StatusFilter === "rascunho" ? "underline" : "none",
            }}
          >
            Rascunhos ({countStatus("rascunho")})
          </label>
          <label>|</label>
          <label
            className="clickFilter"
            onClick={() => setStatusFilter("publicado")}
            style={{
              color: StatusFilter === "publicado" ? "#006343" : "black",
              textDecoration:
                StatusFilter === "publicado" ? "underline" : "none",
            }}
          >
            Publicados ({countStatus("publicado")})
          </label>
        </div>
        <div className="filter-zone search-filter">
          <BarraPesquisa>
            <input
              type="text"
              placeholder="Pesquisa..."
              value={filtroTexto}
              onChange={handleChangeTexto}
            />
            <FaSearch className="search-icon" color="grey" onClick={fetchBlogs}/>
          </BarraPesquisa>
          <Button onClick={openPopup} text={"Criar"}>
            <FaPlus className="icon" />
          </Button>
        </div>
      </FilterZone1>

      <Content>
        {/* Tabela de Blogs */}
        <table>
          <thead>
            <tr>
              <th>Título</th>
              {/* <th>Autor</th> */}
              <th>Status</th>
              <th>Data de Publicação</th>
            </tr>
          </thead>
          <tbody>
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <tr key={blog._id}>
                  <td style={{ display: "flex", alignItems: "center", gap: "20px" }}>
                      {!blog.banner ? (
                        <img src={noImage} alt="No Image" style={{ width: "100px", height: "80px", objectFit: "cover" }} />
                      ) : (
                        <img src={blog.banner} alt="Banner" style={{ width: "100px", height: "80px", objectFit: "cover" }} />
                      )}
                    <div className="title" onClick={() => changePageToEdit(blog)} style={{ color: "#006343" }}>
                      {blog.titulo}
                    </div>
                  </td>
                  {/* <td>{blog.author}</td> */}
                  <td style={{ textTransform: "capitalize"}}>{blog.status}</td>
                  <td>{blog.dataHoraPublicacao ? (new Date(blog.dataHoraPublicacao).toLocaleString()) : ("Não Publicado")}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  Nenhum blog encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Content>

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

      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <div>
          <h3>Criar novo Blog</h3>
        </div>

        <label>
          <b>Você realmente deseja criar um novo Blog?</b> <br />
          <br />O blog será criado com o status de rascunho e você poderá
          editá-lo posteriormente.
        </label>

        <ButtonSection>
          <Button text={"Sim"} onClick={handleCreateBlog} />
          <RedButton text={"Não"} onClick={closePopup} />
        </ButtonSection>
      </Popup>
    </div>
  );
};

export default BlogsListPage;
