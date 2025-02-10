import React, { useEffect, useState } from "react";
import Paginacao from "../../../components/Paginacao";
import { Link } from "react-router-dom";
import { Space, InfoZone, Conteudo, Informacao, Cards, InputZone, Input, InputContainer, EyeIcon } from "./styled";
import { ROUTES } from "../../../routes/RoutesConstants";
import { CgProfile } from "react-icons/cg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // CSS do <ToastContainer />
import { jwtDecode } from "jwt-decode";
import { findByIdUser, findByIdUserAndUpdatePassword } from "@familiadositio/core";
import Button from "../../../components/Button";
import RedButton from "../../../components/RedButton";
import Popup from "../../../components/PopUp";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Ícones de olho
import { useNavigate } from "react-router-dom";


const EditAccountPage = () => {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [newName, setNewName] = useState("");
  const [sector, setSector] = useState("");
  const [isVisiblePopup, setIsVisiblePopup] = useState(false);
  const [isVisiblePopup1, setIsVisiblePopup1] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const openPopup = () => setIsVisiblePopup(true);
  const openPopup1 = () => setIsVisiblePopup1(true);
  const closePopup = () => setIsVisiblePopup(false);
  const closePopup1 = () => setIsVisiblePopup1(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword); 
  };
  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleChangeConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };
  const exitAccount = () => {
    sessionStorage.removeItem("authToken");
    navigate(ROUTES.LOGIN);
  };

  const handleUpdateName = async () => {
    if (newName === "" && isVisiblePopup) 
      return toast.error("Digite um novo nome de usuário!");
    if ((newPassword === "" && isVisiblePopup1) || (confirmPassword === "" && isVisiblePopup1))
      return toast.error("Digite e confirme sua nova senha!");
    if ((newPassword !== confirmPassword) && isVisiblePopup1)
      return toast.error("As senhas não coincidem!");
    if(!password)
      return toast.error("Digite sua senha para confirmar a alteração!");
    
    const updateBody = {}

    if (newName != "" && newName != null && newName != undefined)
      updateBody.name = newName;
    if (newPassword != "" && newPassword != null && newPassword != undefined)
      updateBody.password = newPassword;

    try {
      const { sub } = jwtDecode(sessionStorage.getItem("authToken"));
      const response = await findByIdUserAndUpdatePassword(sub, password, updateBody);
      toast.success("Nome de usuário alterado com sucesso!");
      sessionStorage.setItem("authToken", response.data.token);
      fetchUser();
      closePopup();
      closePopup1();
      setPassword("");
      setNewName("");
      setNewPassword("");
    } catch (err) {
      console.log(err);
      if (err.status === 403)
        return toast.error("Senha incorreta, tente novamente!");
      toast.error("Erro ao alterar o nome de usuário, tente novamente mais tarde!");
    }
  };

  const fetchUser = async () => {
    try {
      const { sub } = jwtDecode(sessionStorage.getItem("authToken"));
      const user = await findByIdUser(sub);
      setName(user.data.user.name);
      setEmail(user.data.user.email);
      setSector(user.data.user.sector);
    } catch (err) {
      console.error("Erro ao buscar o usuário:", err);
      toast.error("Erro ao buscar o usuário, tente novamente mais tarde!");
    }
  };
  
  useEffect(() => {
    fetchUser();
  } , []);
  
  return (
    <div>
      <Paginacao>
        <Link className="page" to={ROUTES.HOME}>Família do Sítio</Link>
        {" > "}
        <span>Edição da Conta</span>
      </Paginacao>
       <Space />

       <ToastContainer />

       <InfoZone>
        <CgProfile className="icon"/>
        <div className="parte-perfil">
          <h1>Olá, {name}!</h1>
          <p>Edite as principais informações pessoas de sua conta.</p>
          <div className="tag">
            <span>{sector}</span>
          </div>
        </div>
      </InfoZone>

      <Conteudo>
        <h1>Suas principais informações:</h1>

        <div className="infos">
          <Informacao>
            <label>Nome de Usuário:</label>
            <input type="text" value={name} disabled/>
          </Informacao>

          <Informacao>
            <label>Email de Usuário:</label>
            <input type="text" value={email} disabled/>
          </Informacao>

          <Informacao>
            <label>Setor/Acesso de Usuário:</label>
            <input type="text" value={sector} disabled/>
          </Informacao>
        </div>

        <Cards>
          <Button text={"ALTERAR Nome de usuário"} onClick={openPopup}></Button>
          <Button text={"ALTERAR Senha"} onClick={openPopup1}></Button>
          <RedButton text={"SAIR da Conta"} onClick={exitAccount}></RedButton>
        </Cards>

      </Conteudo>

      <Popup isOpen={isVisiblePopup} onClose={closePopup}>
          <div>
            <h3>Alteração de Nome de Usuário</h3>
          </div>

          <InputZone>
            <label>Digite o novo nome de usuário:</label>
            <input type="text" placeholder="Novo nome de usuário" onChange={(e) => setNewName(e.target.value)}/>
          </InputZone>

          <InputZone>
            <label>Para confirmar sua alteração, insira sua senha:</label>
            <InputContainer>
                    <Input
                      type={showPassword ? "text" : "password"}
                      placeholder="Senha"
                      value={password}
                      onChange={handleChangePassword}
                    />
                  <EyeIcon onClick={toggleShowPassword}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </EyeIcon>
            </InputContainer>
          </InputZone>
        
          <Button text={"Confirmar"} onClick={handleUpdateName}/>
        </Popup>

    </div>
  );
}

export default EditAccountPage;