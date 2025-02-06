import React, { useState, useEffect } from "react";
import Paginacao from "../../../components/Paginacao";
import { TituloBlog, Space, EdicaoBlog, SemImagem, Input, Cards, ButtonSection } from "./styled";
import { data, Link } from "react-router-dom";
import { ROUTES } from "../../../routes/RoutesConstants";
import { findBlogById, patchBlog, base64Encode, deleteBlog } from "@familiadositio/core";
import { toast, ToastContainer } from "react-toastify";
import { FaInfoCircle } from "react-icons/fa";
import "react-toastify/dist/ReactToastify.css"; // CSS do <ToastContainer />
import ReactQuill from "react-quill";
import 'quill/dist/quill.snow.css';
import Button from "../../../components/Button";
import RedButton from "../../../components/RedButton";
import Popup from "../../../components/PopUp";
import { useNavigate } from "react-router-dom";

const EditBlogsPage = () => {

  const navigate = useNavigate();

  const BlogSelected = sessionStorage.getItem("blogId");

  const [blog, setBlog] = useState({});
  const [titulo, setTitulo] = useState("");
  const [banner, setBanner] = useState("");
  const [conteudo, setConteudo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupDelete, setShowPopupDelete] = useState(false);
  const [slug, setSlug] = useState("");

  const closePopup = () => {
    setShowPopup(false);
  };
  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopupDelete = () => {
    setShowPopupDelete(false);
  };
  const openPopupDelete = () => {
    setShowPopupDelete(true);
  };

  const handleTitulo = (e) => {
    setTitulo(e.target.value);
  };

  const handleCategoria = (e) => {
    setCategoria(e.target.value);
    if (e.target.value !== blog.categoria) {
      updateBlog({ tag: e.target.value });
    }
  };

  const handleConteudo = (e) => {
    setConteudo(e);
  };

  const handleSlugChange = (e) => {
    const formattedUrl = e.target.value
      .toLowerCase() // Converte para minúsculas
      .replace(/\s+/g, "-") // Substitui espaços por "-"
      .replace(/[^a-z0-9-]/g, ""); // Remove caracteres inválidos

    setSlug(formattedUrl);
  };

  const handleBlurTitulo = () => {
    if (titulo !== blog.titulo) {
      updateBlog({ titulo: titulo });
    }
  };

  const handleBlurSlug = () => {
    if (slug !== blog.slug) {
      updateBlog({ slug: slug });
    }
  };

  const handlePublish = () => {
    if (blog.status === "rascunho") {
      if (conteudo === "" || titulo === "" || categoria === "0" || conteudo === "<p><br></p>" || conteudo === undefined || categoria === undefined || titulo === undefined || slug === "" || slug === undefined) {
        toast.error("Preencha todas as informações do post antes de publicar!");
        setShowPopup(false);
      } else {
        updateBlog({ status: "publicado", dataHoraPublicacao: new Date() });
        toast.success("Blog publicado com sucesso!");
        setShowPopup(false);
      };
    } else {
      toast.info("Este blog já está publicado!");
    }
  };

  const handleResize = (e) => {
    e.target.style.height = "auto"; // Reseta a altura para evitar crescimento infinito
    e.target.style.height = e.target.scrollHeight + "px"; // Ajusta a altura para o conteúdo
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
      if(err.response.data.case === 2)
        toast.error("Já existe um blog com esse slug! Escolha outro.");
      else {
        console.log(err);
        toast.error("Erro ao atualizar o blog. Tente novamente mais tarde!");
      }
    }
  };

  const deleteBlogById = async () => {
    try {
      await deleteBlog(BlogSelected);
      setShowPopupDelete(false);
      toast.success("Blog apagado com sucesso! Retornando à lista de Posts");

      setTimeout(() => {
              navigate(ROUTES.BLOG);
      }, 5000);
    } catch (err) {
      console.log(err);
      toast.error("Erro ao apagar o blog. Tente novamente mais tarde!");
    }
  };
      

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
      setConteudo(data.data.blog.conteudo);
      setCategoria(data.data.blog.tag);
      setSlug(data.data.blog.slug);
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
        {"Edição de Post"}
      </Paginacao>
      <Space />

      <ToastContainer />


      <EdicaoBlog>
        <TituloBlog type="text" value={titulo} onChange={handleTitulo} onBlur={handleBlurTitulo} onInput={handleResize}/>
        <select onChange={handleCategoria} value={categoria}>
          <option value="0">Selecione uma categoria para este Blog</option>
          <option value="curiosidades">Curiosidades</option>
          <option value="dicas">Dicas</option>
          <option value="noticias">Notícias</option>
          <option value="novidades">Novidades</option>
          <option value="receitas">Receitas</option>
        </select>

        <div className="infoSize">
          <FaInfoCircle className="icon"/>
          <span>Tamanho recomendado para o seu banner: 1200px x 400px</span>
        </div>
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
        
        <div className="infoUrl">
          <FaInfoCircle className="icon"/>
          <span>Escreva abaixo o conteúdo do seu post</span>
        </div>
        <ReactQuill value={conteudo} onChange={handleConteudo} onBlur={handleBlurConteudo} theme="snow" className="EditorText"/>
        
        <div className="infoUrl">
          <FaInfoCircle className="icon"/>
          <span>É necessário um Slug para acessar o seu post</span>
        </div>
        <input
          type="text"
          className="urlInput"
          value={slug}
          onChange={handleSlugChange}
          onBlur={handleBlurSlug}
          placeholder="Decida um Slug para este Blog"
        />
        <input
          type="text"
          className="urlResult"
          value={`https://familiadositio.com.br/blog/${!slug ? ("{SLUG}") : (slug)}.com.br`}
          disabled
        />
          
      </EdicaoBlog>

      <Cards>
          <Button text={"PUBLICAR Post"} onClick={openPopup}></Button>
          <RedButton text={"APAGAR Post"} onClick={openPopupDelete}></RedButton>
      </Cards>

      <Popup isOpen={showPopup} onClose={closePopup}>
          <div>
            <h3>Publicar Post</h3>
          </div>

          <label>
            <b>Você realmente deseja publicar este Post?</b> <br /><br />Este Post será publicado no site institucional da Família do Sítio e qualquer usuário poderá visualizar o conteúdo.
          </label>

          <ButtonSection>
            <Button text={"Sim"} onClick={handlePublish}/>
            <RedButton text={"Não"} onClick={closePopup}/>
          </ButtonSection>
        </Popup>

        <Popup isOpen={showPopupDelete} onClose={closePopupDelete}>
          <div>
            <h3>Apagar Blog</h3>
          </div>

          <label>
            <b>Você realmente deseja apagar este Post?</b> <br /><br />Este Post será apagado permanentemente e não poderá ser recuperado, independente de ter sido publicado ou não.
          </label>

          <ButtonSection>
            <Button text={"Sim"} onClick={deleteBlogById}/>
            <RedButton text={"Não"} onClick={closePopupDelete}/>
          </ButtonSection>
        </Popup>
    </div>
  );
};

export default EditBlogsPage;
