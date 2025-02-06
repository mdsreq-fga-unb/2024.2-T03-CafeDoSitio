import React, { useState, useEffect } from "react";
import Paginacao from "../../../components/Paginacao";
import { TituloBlog, Space, EdicaoBlog, SemImagem, Input, TextoBlog } from "./styled";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/RoutesConstants";
import { findBlogById, patchBlog, base64Encode } from "@familiadositio/core";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // CSS do <ToastContainer />

const EditBlogsPage = () => {
  const BlogSelected = sessionStorage.getItem("blogId");

  const [blog, setBlog] = useState({});
  const [titulo, setTitulo] = useState("");
  const [banner, setBanner] = useState("");
  const [conteudo, setConteudo] = useState("");

  const handleTitulo = (e) => {
    setTitulo(e.target.value);
  };

  const handleConteudo = (e) => {
    setConteudo(e.target.value);
  };

  const handleBlurTitulo = (e) => {
    if (titulo !== blog.titulo) {
      updateBlog({ titulo: titulo });
    }
  };

  const handleBlurConteudo = (e) => {
    if (conteudo !== blog.conteudo) {
      updateBlog({ conteudo: conteudo });
    }
  };

  const updateBlog = async (date) => {
    try {
      await patchBlog(BlogSelected, date);
      toast.success("Blog atualizado com sucesso!");
      fetchBlog();
    } catch (err) {
      console.log(err);
      toast.error("Erro ao atualizar o blog. Tente novamente mais tarde!");
    }
  }

  const handleChangeImage = async (e) => {
    const file = e.target.files[0];

    if (file.size > 5 * 1024 * 1024) {
      toast.error("O arquivo é muito grande! O limite é de 5MB.");
      return;
    }

    if (file) {
      const base64 = await base64Encode(file);
      setBanner(base64);
      updateBlog({ banner: base64 });
    }
  }

  const fetchBlog = async () => {
    try {
      const data = await findBlogById(BlogSelected);
      setBlog(data.data.blog);
      setTitulo(data.data.blog.titulo);
      setBanner(data.data.blog.banner);
    } catch (err) {
      toast.error(
        "Erro ao buscar o blog selecionado. Tente novamente mais tarde!"
      );
    }
  };

  useEffect(() => {
    fetchBlog();
  }, []);

  return (
    <div>
      <Paginacao>
        <Link to={ROUTES.HOME} className="page">
          Central de Administração
        </Link>{" "}
        {" > "}
        <Link to={ROUTES.BLOG} className="page">
          GERENCIAR BLOGS
        </Link>{" "}
        {" > "}
        {"Edição de Blog"}
      </Paginacao>
      <Space />

      <ToastContainer />


      <EdicaoBlog>
        <TituloBlog type="text" value={titulo} onChange={handleTitulo} onBlur={handleBlurTitulo}/>
        {banner ? (
          <SemImagem htmlFor="file-upload">
            <img src={banner} alt="Banner" />
            <Input
              type="file"
              name="Imagem"
              id="file-upload"
              accept=".jpeg, .jpg, .png"
              onChange={handleChangeImage}        
            />
          </SemImagem>
        ) : (
          <>
            <SemImagem htmlFor="file-upload">
              <span>Adicionar Imagem</span>
            </SemImagem>
            <Input
              type="file"
              name="Imagem"
              id="file-upload"
              accept=".jpeg, .jpg, .png"
              onChange={handleChangeImage}        
            />
          </>
        )}

        {/* CAMPO DE TEXTO AQUI */}
          
      </EdicaoBlog>


    </div>
  );
};

export default EditBlogsPage;
