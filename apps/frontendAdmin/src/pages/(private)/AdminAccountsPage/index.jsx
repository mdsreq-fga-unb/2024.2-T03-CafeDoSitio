import React from 'react';
import Paginacao from '../../../components/Paginacao';
import { Link } from 'react-router-dom';
import { Space, InfoZone, ContentZone } from './styled';
import { ROUTES } from '../../../routes/RoutesConstants';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 

const AdminAccountsPage = () => {
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
        
      </ContentZone>
    
    </>
  );
};

export default AdminAccountsPage;