import React, { useEffect, useState } from "react";
import Paginacao from "../../../components/Paginacao";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/RoutesConstants";
import { InfoZone, Space, ContentZone, ManupulationDiv, InputsArea } from "./styled";
import { FaPlus } from "react-icons/fa";
import Button from "../../../components/Button";
import Popup from "../../../components/PopUp";
import DateInput from "../../../components/DateInput";
import TimeInput from "../../../components/TimeInput";
import DisponibilityCard from "../../../components/DisponibilityCard"
import { createVisita } from "@familiadositio/core";
import { findAllVisita } from "../../../../../../packages/core/src/services/visitaService";

const VisitaConfigPage = () => {

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [visitas, setVisitas] = useState([])

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };
  const handleChangeStartTime = (e) => {
    setStartTime(e.target.value);
  };
  const handleChangeEndTime = (e) => {
    setEndTime(e.target.value);
  };

  useEffect(() => { fetchDisponibility() }, [])

  async function fetchDisponibility(){
    try{
      const response = await findAllVisita();
      const arr = response.data.visita;
      arr.sort((a, b) => {
        if(a.startDateTime < b.startDateTime) return -1;
        if(a.startDateTime > b.startDateTime) return 1;
        return 0;
      });
      setVisitas(arr);
    } catch (err) {
      console.error("Erro ao carregar visitas.")
    }
  }

  async function saveDisponibility(){
    try {
      const formattedStart = new Date(`${date}T${startTime}:00`);
      const formattedEnd = new Date(`${date}T${endTime}:00`);

      const payload = {
        startDateTime: formattedStart, 
        endDateTime: formattedEnd,
        status: "disponivel",
      };

      await createVisita(payload);
      setIsPopupOpen(false);
      fetchDisponibility();
    } catch (err) {
      console.log(err);
    }
  };

  return(
    <>
      <Paginacao><Link to={ROUTES.HOME} className="page">Central de Administração</Link> {" > VISITAS TÉCNICAS"}</Paginacao>
      <Space />

      <InfoZone>
        <h1>Visitas Técnicas</h1>
        <span>Aqui você poderá observar todas as suas visitas técnicas e editar novas disponibilidades.</span>
      </InfoZone>

      <ContentZone>

      <ManupulationDiv>
        <Button text={"Criar"} onClick={openPopup}><FaPlus className="icon"/></Button>
      </ManupulationDiv>

      <Popup isOpen={isPopupOpen} onClose={closePopup}>
        <div>
          <h3>Criar Disponibilidade</h3>
        </div>
        
        <InputsArea>
          <div className="input1 input-zone">
            <span>Qual a data de disponibilidade da visita?</span>
            <DateInput onChange={handleChangeDate}/>
          </div>

          <div className="input2 input-zone">
            <span>Qual o horário de início da disponibilidade?</span>
            <TimeInput onChange={handleChangeStartTime}/>
          </div>

          <div className="input2 input-zone">
            <span>Qual o horário de fim da disponibilidade?</span>
            <TimeInput onChange={handleChangeEndTime}/>
          </div>
        </InputsArea>

        <Button text={"Salvar"} onClick={saveDisponibility}/>
      </Popup>

      <InfoZone>
        <h2>1. Suas disponibilidades:</h2>
        {
          visitas.map((item, index) => {
            return ( <DisponibilityCard key={index} id={item._id} 
              initTime={item.startDateTime} endTime={item.endDateTime} /> )
          })
        }
      </InfoZone>

      <InfoZone>
        <h2>2. Solicitações de Agendamento:</h2>
      </InfoZone>
      </ContentZone>
    </>
  );
};

export default VisitaConfigPage;