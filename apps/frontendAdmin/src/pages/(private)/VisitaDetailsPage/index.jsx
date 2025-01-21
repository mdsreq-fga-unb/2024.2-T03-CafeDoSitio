import React, { useState } from "react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // CSS do <ToastContainer />
import { useNavigate } from "react-router-dom";
import Paginacao from "../../../components/Paginacao";
import { Space, ImageContainer, Conteudo, Card, Cards, Vazio, ButtonSection, InputsArea } from "./styled";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/RoutesConstants";
import { FaExclamationCircle } from "react-icons/fa";
import Button from "../../../components/Button";
import Popup from "../../../components/PopUp";
import RedButton from "../../../components/RedButton";
import DateInput from "../../../components/DateInput";
import TimeInput from "../../../components/TimeInput";
import { deleteVisita, patchVisita } from "@familiadositio/core";

const VisitaDetailsPage = () => {

  const navigate = useNavigate();
  const visitaSelected = sessionStorage.getItem("VisitaSelected");

  const [isPopupOpen1, setIsPopupOpen1] = useState(false);
  const [isPopupOpen2, setIsPopupOpen2] = useState(false);
  const [isPopupOpen3, setIsPopupOpen3] = useState(false);
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const openPopup1 = () => setIsPopupOpen1(true);
  const closePopup1 = () => setIsPopupOpen1(false);
  const openPopup2 = () => setIsPopupOpen2(true);
  const closePopup2 = () => setIsPopupOpen2(false);
  const openPopup3 = () => {
    if(JSON.parse(visitaSelected).status === "disponivel") {
      toast.info("Esta disponibilidade não possui solicitação de agendamento!");
      return
    }

    setIsPopupOpen3(true);
  };
  const closePopup3 = () => setIsPopupOpen3(false);

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };
  const handleChangeStartTime = (e) => {
    setStartTime(e.target.value);
  };
  const handleChangeEndTime = (e) => {
    setEndTime(e.target.value);
  };

  async function deleteVisitaSelected() {
    try {
      await deleteVisita(JSON.parse(visitaSelected)._id);
    
      toast.success("Disponibilidade apagada! Retornando para a página de visitas...");
      setIsPopupOpen2(false);

      setTimeout(() => {
        navigate(ROUTES.VISITA);
      }, 5000);
    } catch (err) {
      toast.error("Houve algum erro nosso! Tente mais tarde.");
    }
  };

  async function patchDisponibility(){
    try {
      const now = new Date();
      const formattedStart = new Date(`${date}T${startTime}:00`);
      const formattedEnd = new Date(`${date}T${endTime}:00`);

      if(date === '' || startTime === '' || endTime === '' || !date || !startTime || !endTime) {
        toast.error("Preencha todos os campos!");
        return
      }

      if (formattedStart < now) {
        toast.error("A data da Disponibilidade não pode ser menor que o atual!");
        return;
      }

      if (formattedEnd <= formattedStart) {
        toast.error("O horário de término não pode ser menor ou igual ao horário de início!");
        return;
      }

      const diffInMinutes = (formattedEnd - formattedStart) / (1000 * 60); // Diferença em minutos
      if (diffInMinutes < 60) {
        toast.error("A disponibilidade deve possuir ao menos 1 hora de duração!");
        return;
      }

      const payload = {
        startDateTime: formattedStart, 
        endDateTime: formattedEnd,
      };

      await patchVisita(JSON.parse(visitaSelected)._id, payload);
      toast.success("Disponibilidade Editada! Retornando à página de Visitas...");

      setDate('');
      setStartTime('');
      setEndTime('');
      setIsPopupOpen1(false);

      setTimeout(() => {
        navigate(ROUTES.VISITA);
      }, 5000);
    } catch (err) {
      console.log(err);
      toast.error("Houve algum erro nosso! Tente novamente mais tarde.");
    }
  };

  async function patchVisitor(){
    try {
      const payload = {
        nameVisitor: null,
        emailVisitor: null,
        phoneVisitor: null,
        institution: null,
        status: 'disponivel'
      };

      await patchVisita(JSON.parse(visitaSelected)._id, payload);
      toast.success("Solicitação removida! Retornando à página de Visitas...");
      setIsPopupOpen3(false);
      
      setTimeout(() => {
        navigate(ROUTES.VISITA);
      }, 5000);
    } catch (err) {
      console.log(err);
      toast.error("Houve algum erro nosso! Tente novamente mais tarde.");
    }
  };

  return (
    <>
      <Paginacao><Link to={ROUTES.HOME} className="page">Central de Administração</Link> {" > "} <Link to={ROUTES.VISITA} className="page">Visitas Técnicas</Link> {` > visita - ${JSON.parse(visitaSelected).date}`} </Paginacao>

      <ImageContainer>
          <img src="../src/assets/Fabrica.jpg" alt="Foto da Fábrica da Família do Sítio" />
      </ImageContainer>

      <Space />

      <ToastContainer />

      <Conteudo>
        <h1> Visita Técnica de {JSON.parse(visitaSelected).date}</h1>

        <h2>1. Dados da Visita Técnica:</h2>
        <br />
        <Cards>

          <Card>
            <span className="title">Data da Disponibilidade:</span>
            <span className="description">{JSON.parse(visitaSelected).date}</span>
          </Card>

          <Card>
            <span className="title">Período de Disponibilidade:</span>
            <span className="description"> Das {
                new Date(JSON.parse(visitaSelected).startDateTime)
                .toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
              } até {
                new Date(JSON.parse(visitaSelected).endDateTime)
                .toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
              }
            </span>
          </Card>

          <Card>
            <span className="title">Status:</span>
            <span className="description status">{JSON.parse(visitaSelected).status}</span>
          </Card>
        </Cards>
        <br />

        <h2>2. Dados do Visitante/Solicitante Representante:</h2>
        <br />

        <Cards>
          {JSON.parse(visitaSelected).status === 'disponivel' ? (
            <Vazio>
              <FaExclamationCircle className="icon"/>
              <span>Nenhuma solicitação de agendamento!</span>
            </Vazio>
          ) : (
            <>
              <Card>
                <span className="title">Nome do Representante:</span>
                <span className="description status">{JSON.parse(visitaSelected).nameVisitor}</span>
              </Card>

              <Card>
                <span className="title">Email do Representante:</span>
                <span className="description status">{JSON.parse(visitaSelected).emailVisitor}</span>
              </Card>

              <Card>
                <span className="title">Telefone do Representante:</span>
                <span className="description status">{JSON.parse(visitaSelected).phoneVisitor}</span>
              </Card>

              <Card>
                <span className="title">Instituição:</span>
                <span className="description status">{JSON.parse(visitaSelected).institution}</span>
              </Card>
            </>
          )}
        </Cards>
        <br />

        <h2>3. Operações:</h2>
        <br />
        
        <Cards>
          <Button text={"EDITAR Disponibilidade"} onClick={openPopup1}></Button>
          <Button text={"REMOVER Solicitante da Visita Técnica"} onClick={openPopup3}></Button>
          <RedButton text={"REMOVER Disponibilidade"} onClick={openPopup2}></RedButton>
        </Cards>

        <br />
        <br />

        <Popup isOpen={isPopupOpen1} onClose={closePopup1}>
          <div>
            <h3>Edição da Disponibilidade</h3>
          </div>

          <InputsArea>
            <div className="input1 input-zone">
              <span>Qual a nova data de disponibilidade da visita?</span>
              <DateInput onChange={handleChangeDate}/>
            </div>

            <div className="input2 input-zone">
              <span>Qual o novo horário de início da disponibilidade?</span>
              <TimeInput onChange={handleChangeStartTime}/>
            </div>

            <div className="input2 input-zone">
              <span>Qual o novo horário de fim da disponibilidade?</span>
              <TimeInput onChange={handleChangeEndTime}/>
            </div>
          </InputsArea>

          <Button text={"Salvar"} onClick={patchDisponibility}/>
        </Popup>

        <Popup isOpen={isPopupOpen2} onClose={closePopup2}>
          <div>
            <h3>Apagar Disponibilidade</h3>
          </div>

          <label>
            <b>Você realmente deseja cancelar essa disponibilidade?</b> <br /><br />Caso esta visita técnica tenha sido agendada por um usuário, certifique-se de avisá-lo antes de cancelar a disponibilidade.
          </label>

          <ButtonSection>
            <RedButton text={"Não"} onClick={closePopup2}/>
            <Button text={"Sim"} onClick={deleteVisitaSelected}/>
          </ButtonSection>
          
        </Popup>

        <Popup isOpen={isPopupOpen3} onClose={closePopup3}>
          <div>
            <h3>Apagar Solicitante</h3>
          </div>

          <label>
            <b>Você realmente deseja remover quem solicitou para agendar esta visita técnica?</b> <br /> <br />Esta visita técnica estará disponível para agendamentos novamente. Certifique que notificar o antigo usuário solicitante!
          </label>

          <ButtonSection>
            <RedButton text={"Não"} onClick={closePopup3}/>
            <Button text={"Sim"} onClick={patchVisitor}/>
          </ButtonSection>
          
        </Popup>

      </Conteudo>
    </>
  );
};

export default VisitaDetailsPage;