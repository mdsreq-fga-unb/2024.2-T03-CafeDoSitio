  import React, { useEffect, useState } from 'react';
  import Paginacao from '../../../components/Paginacao';
  import { Link, useNavigate } from 'react-router-dom';
  import { Space, InfoZone, ContentZone, FilterZone, BarraPesquisa, Dropdown, InputsArea, InputText, EmailList, EmailCard, IconsZone, Vazio, TextArea, ButtonArea } from './styled';
  import { ROUTES } from '../../../routes/RoutesConstants';
  import { toast, ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css'; 
  import { FaSearch, FaPlus, FaTrash, FaExclamationCircle } from "react-icons/fa";
  import Button from '../../../components/Button';
  import Popup from '../../../components/PopUp';
  import Tag from '../../../components/Tag';
  import { createUser, findAllUser, deleteUser } from '@familiadositio/core';
  import RedButton from '../../../components/RedButton';

  const AdminAccountsPage = () => {

    // INICIANDO O NAVIGATE:
    const navigate = useNavigate();

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isPopupOpen1, setIsPopupOpen1] = useState(false);
    const [idSelected, setIdSelected] = useState('');
    const [email, setEmail] = useState('');
    const [sector, setSector] = useState('Administrator');
    const [contas, setContas] = useState([]);
    const [contasFiltrada, setContasFiltrada] = useState([]);
    const [filtro, setFiltro] = useState('all');
    const [filtroTexto, setFiltroTexto] = useState('');

    const openPopup = () => setIsPopupOpen(true);
    const openPopup1 = (id) => { setIsPopupOpen1(true); setIdSelected(id); };
    const closePopup = () => setIsPopupOpen(false);
    const closePopup1 = () => setIsPopupOpen1(false);


    const handleChangeEmail = (e) => {
      setEmail(e.target.value);
    }

    const handleChangeSector = (e) => {
      setSector(e.target.value);
    }

    const handleChangeFilter = (e) => {
      setFiltro(e.target.value);
    }

    const handleChangeTexto = (e) => {
      setFiltroTexto(e.target.value);
    }

    const validateEmail = (email) => {
      // Regex para validar o formato do email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        return false; // Email inválido
      }
  
      // Verifica se o domínio é "@familiadositio.com.br"
      const domain = email.split('@')[1];
      return domain === 'familiadositio.com.br';
    };

    async function saveUser(){
      if (!validateEmail(email)) {
        toast.error("Por favor, insira um email válido do domínio @familiadositio.com.br.");
        return;
      }

      try{
        await createUser(email, sector);
        toast.success("Usuário criado com sucesso!");
        fetchContas(); // Atualiza a lista de contas após criar um usuário
      } catch (err) {
        if(err.response){
          if(err.response.status === 400 && err.response.data.case === 1)
            toast.error("Insira um Email!");
          else if(err.response.status === 400 && err.response.data.case === 2)
            toast.error("Insira um Email válido!");
          else if(err.response.status === 400 && err.response.data.case === 3)
            toast.error("Email em uso!");
          else
            toast.error("Erro inesperado!");
        }
      }
      setEmail('');
      closePopup();
    }

    const handleDeleteUser = async () => {
      try{
        await deleteUser(idSelected); // Usa a função importada do módulo
        toast.success("Usuário deletado com sucesso!");
        fetchContas(); // Atualiza a lista de contas após deletar um usuário
      } catch (err) {
        console.error("Erro ao deletar usuário:", err);
        toast.error("Erro ao deletar usuário.");
      }
      closePopup1();
    }

    async function fetchContas(){
      try{
        const response = await findAllUser();
        setContas(response.data.user);
      } catch (err) {
        console.error("Erro ao carregar contas.")
        toast.error("Erro ao carregar contas.");
      }
    }

    useEffect(() => { 
      fetchContas();
    }, [])

    useEffect(() => {
      const filtered = contas.filter((item) => {
        const matchesTexto =  (item.email && item.email.includes(filtroTexto)) || (item.name && item.name.includes(filtroTexto));
        const matchesSetor = filtro === 'all' || item.sector === filtro;
        return matchesTexto && matchesSetor;
      });
      setContasFiltrada(filtered);
    }, [contas, filtroTexto, filtro]);

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
              <input type="text" placeholder="Pesquisa..." value={filtroTexto} onChange={handleChangeTexto}/>
              <FaSearch className="search-icon" color="grey"/>
            </BarraPesquisa>

            <div className='ButtonsZone'>

              <Dropdown name="filter" id="filter" onChange={handleChangeFilter}>
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

            { contasFiltrada.length > 0 ? (
                contasFiltrada.map((item, index) => {
                  return (
                  <EmailCard key={index}> 
                    <div className='info'>
                      <label className='name'>{item.name === "" ? ("Sem nome") : (item.name)}</label>
                      <label className='email'>{item.email}</label>
                      <Tag bgcolor={"#006343"} ftcolor={"white"}>{item.sector}</Tag>
                    </div>
        
                    <IconsZone>
                      <FaTrash className='icon' onClick={() => openPopup1(item._id)} style={{display: item.sector === 'System-Administrator' ? "none" : "visible"}}/>
                    </IconsZone>
                  </EmailCard>
                          )
                })
            ) : (
              <Vazio>
                <FaExclamationCircle className="icon"/>
                <span>Nenhuma conta encontrada.</span>
              </Vazio>
            )}
          </EmailList>

        </ContentZone>

        <Popup isOpen={isPopupOpen} onClose={closePopup}>
          <div>
            <h3>Criar Acesso</h3>
          </div>

          <InputsArea>
            <div className="input1 input-zone">
              <span>Insira o email do colaborador:</span>
              <InputText label="Nome" type="text" placeholder="Digite o Email..." onChange={handleChangeEmail}/>
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

        <Popup isOpen={isPopupOpen1} onClose={closePopup1}>
          <div>
            <h3>Deletar acesso</h3>
          </div>

          <span>Tem certeza que deseja deletar o acesso deste usuário? <b>Esta ação não poderá ser desfeita.</b></span>
          
          <ButtonArea>
            <Button text={"Sim"} onClick={handleDeleteUser}/>
            <RedButton text={"Não"} onClick={closePopup1}/>
          </ButtonArea>
        </Popup>
      
      </>
    );
  };

  export default AdminAccountsPage;