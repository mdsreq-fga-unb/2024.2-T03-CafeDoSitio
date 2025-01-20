import React, { useState } from 'react';
import Paginacao from '../../../components/Paginacao';
import { Link, useNavigate } from 'react-router-dom';
import { Space, InfoZone, ContentZone, FilterZone, BarraPesquisa, Dropdown, InputsArea, InputText, EmailList, EmailCard, IconsZone } from './styled';
import { ROUTES } from '../../../routes/RoutesConstants';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { FaSearch, FaPlus, FaTrash } from "react-icons/fa";
import Button from '../../../components/Button';
import Popup from '../../../components/PopUp';
import Tag from '../../../components/Tag';
import { createUser } from '@familiadositio/core';

const AdminAccountsPage = () => {

  // INICIANDO O NAVIGATE:
  const navigate = useNavigate();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [sector, setSector] = useState('Administrator');

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  }

  const handleChangeSector = (e) => {
    setSector(e.target.value);
  }

  async function saveUser(){
    try{
      await createUser(email, sector);
      toast.success("Usuário criado com sucesso!");
    } catch (err) {
      console.log(err);
      toast.error("Erro ao criar usuário.");
    }
    closePopup();
  }

  return (
    <>

      <Paginacao><Link to={ROUTES.HOME} className="page">Central de Administração</Link> {"> Gerenciar Contas"}</Paginacao>
      <Space />

      <ToastContainer />
      
      <InfoZone>
        <h1>Gerenciamento de Contas</h1>
        <span>Aqui, você poderá visualizar e gerenciar as contas que terão acesso à esta central de controle, cujo poderá controlar as informações do site institucional da Família do Sítio.</span>
      </InfoZone>

      <ContentZone>
        <FilterZone>

          <BarraPesquisa>
            <input type="text" placeholder="Pesquisa..."/>
            <FaSearch className="search-icon" color="grey"/>
          </BarraPesquisa>

          <div className='ButtonsZone'>

            <Dropdown name="filter" id="filter">
              <option value="all">Todos</option>
              <option value="System-Administrator">Administrador do Sistema</option>
              <option value="Administrator">Administrador</option>
              <option value="Marketing">Marketing</option>
              <option value="Information Technology">Tecnologia da Informação</option>
              <option value="Design">Design</option>
            </Dropdown>

            <Button text={"Criar"} onClick={openPopup}><FaPlus className="icon"/></Button>
          </div>
        </FilterZone>

        <EmailList>
          
          <EmailCard> 
            <div className='info'>
              <label className='name'>Nome do Colaborador</label>
              <label className='email'>emailExemplo@gmail.com</label>
              <Tag bgcolor={"#006343"} ftcolor={"white"}>Marketing</Tag>
            </div>

            <IconsZone>
              <FaTrash className='icon'/>
            </IconsZone>
          </EmailCard>

        </EmailList>

      </ContentZone>

      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <div>
          <h3>Criar Acesso</h3>
        </div>

        <InputsArea>
          <div className="input1 input-zone">
            <span>Insira o email do colaborador:</span>
            <InputText label="Nome" type="text" placeholder="Digite o nome..." onChange={handleChangeEmail}/>
          </div>

          <div className="input2 input-zone">
            <span>Selecione a setor do colaborador:</span>
            <Dropdown name="filter" id="filter" onChange={handleChangeSector}>
              <option value="Administrator">Administrador</option>
              <option value="Marketing">Marketing</option>
              <option value="Information Technology">Tecnologia da Informação</option>
              <option value="Design">Design</option>
            </Dropdown>
          </div>
        </InputsArea>

        <Button text={"Salvar"} onClick={saveUser}/>
      </Popup>
    
    </>
  );
};

export default AdminAccountsPage;