import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Paginacao from "../../../components/Paginacao";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // CSS do <ToastContainer />
import { Link } from "react-router-dom";
import { ROUTES } from "../../../routes/RoutesConstants";
import { InfoZone, Space, ContentZone, InputsArea, Vazio, FilterZone, Dropdown, DateFilterContainer} from "./styled";
import { FaPlus } from "react-icons/fa";
import Button from "../../../components/Button";
import Popup from "../../../components/PopUp";
import DateInput from "../../../components/DateInput";
import TimeInput from "../../../components/TimeInput";
import DisponibilityCard from "../../../components/DisponibilityCard"
import { createVisita } from "@familiadositio/core";
import { findAllVisita } from "../../../../../../packages/core/src/services/visitaService";
import { FaExclamationCircle } from "react-icons/fa";

const VisitaConfigPage = () => {

  // INICIANDO O NAVIGATE:
  const navigate = useNavigate();

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [visitas, setVisitas] = useState([]);
  const [filtroStartDate, setFiltroStartDate] = useState('');
  const [filtroEndDate, setFiltroEndDate] = useState(''); 
  const [filtroStatus, setFiltroStatus] = useState('disponivel');
  const [visitasFiltradas, setVisitasFiltradas] = useState([]);
  const [visitasSolicitadas, setVisitasSolicitadas] = useState([]);

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

  const handleChangeFiltroStartDate = (e) => {
    setFiltroStartDate(e.target.value); 
  };

  const handleChangeFiltroEndDate = (e) => {
    setFiltroEndDate(e.target.value);
  };

  const handleChangeFiltroStatus = (e) => {
    setFiltroStatus(e.target.value);
  };

  
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
        status: "disponivel",
      };

      await createVisita(payload);
      toast.success("Disponibilidade Criada!");

      setDate('');
      setStartTime('');
      setEndTime('');
      setIsPopupOpen(false);
      fetchDisponibility();
    } catch (err) {
      console.log(err);
      toast.error("Houve algum erro nosso! Tente novamente mais tarde.");
    }
  };
  
  function navToVisitaDetail(item) {
    const initDate = new Date(item.startDateTime);
    sessionStorage.setItem("VisitaSelected", JSON.stringify({
      _id: item._id,
      date: initDate.toLocaleDateString('pt-br'),
      startDateTime: item.startDateTime,
      endDateTime: item.endDateTime,
      status: item.status,
      nameVisitor: item.nameVisitor,
      emailVisitor: item.emailVisitor,
      phoneVisitor: item.phoneVisitor,
      numberVisitors: item.numberVisitors,
      institution: item.institution,
      message: item.message,
    }));
    navigate(`${ROUTES.VISITA_DETALHADA}/${item._id}`);
  }

  useEffect(() => { fetchDisponibility() }, []);
  useEffect(() => {
    const filtered = visitas.filter((item) => {
      const startDate = new Date(item.startDateTime);
      const endDate = new Date(item.endDateTime);

      const matchesStatus = item.status === filtroStatus;
      const matchesStartDate = !filtroStartDate || new Date(filtroStartDate) <= startDate;
      const matchesEndDate = !filtroEndDate || new Date(filtroEndDate) >= endDate;

      return matchesStatus && matchesStartDate && matchesEndDate;
    });
    const filtered2 = visitas.filter((item) => {
      const matchesStatus = item.status === "solicitado";
      return matchesStatus;
    });
    setVisitasFiltradas(filtered);
    setVisitasSolicitadas(filtered2);
  }, [visitas, filtroStartDate, filtroEndDate, filtroStatus]);


  return(
    <>
      <Paginacao><Link to={ROUTES.HOME} className="page">Central de Administração</Link> {" > VISITAS TÉCNICAS"}</Paginacao>
      <Space />

      <ToastContainer />

      <InfoZone>
        <h1>Visitas Técnicas</h1>
        <span>Aqui você poderá observar todas as suas visitas técnicas e editar novas disponibilidades.</span>
      </InfoZone>

      <ContentZone>

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
        <h2>1. Visitas em Solicitação:</h2>

        <div className="visitas-list">
        { visitasSolicitadas.length > 0 ? (
            visitasSolicitadas.map((item, index) => {
              return ( <DisponibilityCard 
                          key={index}
                          initTime={item.startDateTime}
                          endTime={item.endDateTime}
                          status={item.status}
                          onClick={() => navToVisitaDetail(item)}/>
                      )
            })
        ) : (
          <Vazio>
            <FaExclamationCircle className="icon"/>
            <span>Nenhuma visita solicitada!</span>
          </Vazio>
        )}
        </div>
        
        <br />
        <br />
        <h2>2. Suas Disponibilidades:</h2>
        <FilterZone>
          <DateFilterContainer>
                <DateInput
                  placeholder="Data de Início"
                  value={filtroStartDate}
                  onChange={handleChangeFiltroStartDate}
                />
                <DateInput
                  placeholder="Data de Fim"
                  value={filtroEndDate}
                  onChange={handleChangeFiltroEndDate}
                />
          </DateFilterContainer>

          <div className='ButtonsZone'>

            <Dropdown name="filter" id="filter" onChange={handleChangeFiltroStatus}>
              <option value="disponivel">Disponíveis</option>
              <option value="agendado">Agendados</option>
            </Dropdown>

            <Button text={"Criar"} onClick={openPopup}><FaPlus className="icon"/></Button>
          </div>
        </FilterZone>
        <div className="visitas-list">
        { visitasFiltradas.length > 0 ? (
            visitasFiltradas.map((item, index) => {
              return ( <DisponibilityCard 
                          key={index}
                          initTime={item.startDateTime}
                          endTime={item.endDateTime}
                          status={item.status}
                          onClick={() => navToVisitaDetail(item)}/>
                      )
            })
        ) : (
          <Vazio>
            <FaExclamationCircle className="icon"/>
            <span>Nenhuma disponibilidade encontrada!</span>
          </Vazio>
        )}
        </div>
      </InfoZone>
      </ContentZone>
    </>
  );
};

export default VisitaConfigPage;