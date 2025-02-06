import React, { useState, useEffect } from "react";
import { createBlog, findAllBlog } from "@familiadositio/core";
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
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/RoutesConstants";
import { FaSearch, FaPlus } from "react-icons/fa";
import Button from "../../../components/Button";
import RedButton from "../../../components/RedButton";
import Popup from "../../../components/PopUp";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // CSS do <ToastContainer />

const BlogsListPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [filtroTexto, setFiltroTexto] = useState("");
  const [totalBlogs, setTotalBlogs] = useState(0);
  const [StatusFilter, setStatusFilter] = useState("all");
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const limit = 5;

  const handleChangeTexto = (e) => {
    setFiltroTexto(e.target.value);
  };

  const countStatus = (reference) => {
    let count = 0;
    blogs.forEach((blog) => {
      if (blog.status === reference) {
        count++;
      }
    });
    return count;
  };

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const fetchBlogs = async () => {
    const data = await findAllBlog(currentPage, limit);
    setBlogs(data.blogs);
    setTotalPages(data.totalPages);
    setTotalBlogs(data.total);
  };

  useEffect(() => {
    fetchBlogs();
  }, [currentPage]);

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

  // Filtragem dos blogs por status e pesquisa
  // const blogsFiltrados = blogs.filter((blog) => {
  //   const matchTexto = blog.title.toLowerCase().includes(filtroTexto.toLowerCase());
  //   const matchStatus = StatusFilter === "all" || blog.status === StatusFilter;
  //   return matchTexto && matchStatus;
  // });

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
        <h1>Gerenciamento de Blogs</h1>
        <span>
          Aqui você poderá criar, publicar e editar novos blogs para gerar
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
            <FaSearch className="search-icon" color="grey" />
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
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {blogs.length > 0 ? (
              blogs.map((blog) => (
                <tr key={blog._id}>
                  <td>
                    <Link to={`${ROUTES.BLOG}/${blog._id}`}>
                      {blog.titulo}
                    </Link>
                  </td>
                  {/* <td>{blog.author}</td> */}
                  <td>{blog.status}</td>
                  <td>{new Date(blog.dataHoraPublicacao).toLocaleString()}</td>
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
          <RedButton text={"Não"} onClick={closePopup} />
          <Button text={"Sim"} onClick={handleCreateBlog} />
        </ButtonSection>
      </Popup>
    </div>
  );
};

export default BlogsListPage;
