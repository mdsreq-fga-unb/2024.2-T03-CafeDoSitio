import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../routes/RoutesConstants";
import { ConteudoGeral, Card, ParteSuperior, Formulario, Input, Button, InputContainer, EyeIcon } from "./styled";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // CSS do <ToastContainer />
import { findByEmailUser, findByIdUserAndUpdate } from "@familiadositio/core";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Ícones de olho

const FirstAcessPage = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [emailValido, setEmailValido] = useState(false);
  const [novaSenha, setNovaSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeNovaSenha = (e) => {
    setNovaSenha(e.target.value);
  };

  const handleChangeConfirmarSenha = (e) => {
    setConfirmarSenha(e.target.value);
  };

  const toggleShowPassword1 = () => {
    setShowPassword1(!showPassword1); 
  };

  const toggleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleConfirm = async (e) => {
    e.preventDefault(); // Previne o comportamento padrão do formulário (recarregar a página)
    try {
      const response = await findByEmailUser(email);
      if (response.status === 200 && response.data.user.length > 0) {
        if(response.data.user[0].password){
          toast.success("Sua conta já foi devidamente configurada! Faça login com sua senha para acessar o sistema.");
          return;
        }
        toast.success("Email encontrado com sucesso!");
        setEmailValido(true);
        setId(response.data.user[0]._id);
      } else {
        toast.error("Email não encontrado! Tente contactar os administradores do sistema.");
      }
    } catch (err) {
      console.log(err);
      toast.error("Erro inesperado!");
    }
  };

  const handleCreatePassword = async (e) => {
    e.preventDefault();
    if (novaSenha !== confirmarSenha) {
      toast.error("As senhas não coincidem!");
      return;
    };

    const body = {
      name: name,
      password: novaSenha,
    };


    try {
      const response = await findByIdUserAndUpdate(id ,body);
      if (response.status === 200) {
        toast.success("Senha criada com sucesso!");
        navigate(ROUTES.LOGIN);
      } else {
        toast.error("Erro ao criar senha!");
      }
    } catch (err) {
      console.log(err);
      toast.error("Erro inesperado!");
    }
  }

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        handleConfirm(e);
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [email]);

  return (
    <ConteudoGeral>
      <ToastContainer />

      <Card>
        {!emailValido ? (
          <>
            <ParteSuperior>
              <h1>Primeiro Acesso</h1>
              <center>
                <span>Para acessar o sistema, você precisa criar uma nova senha. <b>Insira seu email da família do sítio no campo abaixo.</b></span>
              </center>
            </ParteSuperior>

            <Formulario onSubmit={handleConfirm}>
              <Input type="email" placeholder="Email" onChange={handleChangeEmail} />
              <Button type="submit">Confirmar</Button>
            </Formulario>
          </>
        ) : (
          <>
            <ParteSuperior>
              <h1>Definição de Informações</h1>
              <center>
                <span>Informe seu nome e sobrenome e crie uma senha para entrar no sistema.</span>
              </center>
            </ParteSuperior>
            
            <Formulario onSubmit={handleCreatePassword}>

              <InputContainer>
                <Input type="text" placeholder="Nome e Sobrenome" onChange={handleChangeName} />
              </InputContainer>

              <InputContainer>
                <Input
                  type={showPassword1 ? "text" : "password"}
                  placeholder="Nova Senha"
                  value={novaSenha}
                  onChange={handleChangeNovaSenha}
                />
                <EyeIcon onClick={toggleShowPassword1}>
                  {showPassword1 ? <FaEyeSlash /> : <FaEye />}
                </EyeIcon>
              </InputContainer>

              <InputContainer>
                <Input
                  type={showPassword2 ? "text" : "password"}
                  placeholder="Confirmar Senha"
                  value={confirmarSenha}
                  onChange={handleChangeConfirmarSenha}
                />
                <EyeIcon onClick={toggleShowPassword2}>
                  {showPassword2 ? <FaEyeSlash /> : <FaEye />} {/* Alterna entre ícones */}
                </EyeIcon>
              </InputContainer>

              <Button type="submit">Confirmar</Button>
            </Formulario>
          </>
        )}
      </Card>
    </ConteudoGeral>
  );
};

export default FirstAcessPage;