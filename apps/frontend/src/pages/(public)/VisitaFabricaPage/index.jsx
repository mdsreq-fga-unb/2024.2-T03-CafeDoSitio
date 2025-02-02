import React, { useState, useEffect } from "react";
import Paginacao from "../../../components/Paginacao";
import { Space, ImageContainer, Space2, Conteudo, FilterZone, DateFilterContainer, Vazio } from "./styled";
import Fabrica from "../../../assets/Fabrica.jpg";
import DateInput from "../../../components/DateInput";
import { findAllVisita } from "@familiadositio/core";
import DisponibilityCard from "../../../components/DisponibilityCard";
import ModalVisita from "../../../components/ModalVisita"; 

const VisitaFabricaPage = () => {
  const [filtroStartDate, setFiltroStartDate] = useState('');
  const [visitas, setVisitas] = useState([]);
  const [visitasFiltradas, setVisitasFiltradas] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [visitaSelecionada, setVisitaSelecionada] = useState(null);

  const handleChangeFiltroStartDate = (e) => {
    setFiltroStartDate(e.target.value);
  };

  async function fetchDisponibility(){
    try{
      const response = await findAllVisita();
      const arr = response.data.visita;
      arr.sort((a, b) => new Date(a.startDateTime) - new Date(b.startDateTime));
      setVisitas(arr);
    } catch (err) {
      console.error("Erro ao carregar visitas.");
    }
  };

  useEffect(() => { fetchDisponibility() }, []);
  useEffect(() => {
    const filtered = visitas.filter((item) => {
      const startDate = new Date(item.startDateTime);
      return item.status === "disponivel" && (!filtroStartDate || new Date(filtroStartDate) <= startDate);
    });
    setVisitasFiltradas(filtered);
  }, [visitas, filtroStartDate]);

  const handleOpenModal = (item) => {
    setVisitaSelecionada(item);
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
    setVisitaSelecionada(null);
  };

  const handleSubmit = () => {
    console.log("Dados enviados para a visita:", visitaSelecionada);
    setModalVisible(false);
  };

  return (
    <>
      <Paginacao text={"FAMÍLIA DO SÍTIO > VISITA TÉCNICA"} />
      <Space />

      <ImageContainer>
        <img src={Fabrica} alt="Foto da Fábrica da Família do Sítio" />
      </ImageContainer>

      <Space2 />

      <Conteudo>
        <h1>NOS FAÇA UMA VISITA!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit...</p>

        <FilterZone>
          <DateFilterContainer>
            <DateInput
              placeholder="Data de Início"
              value={filtroStartDate}
              onChange={handleChangeFiltroStartDate}
            />
          </DateFilterContainer>
        </FilterZone>

        <div className="visitas-list">
          { visitasFiltradas.length > 0 ? (
              visitasFiltradas.map((item, index) => (
                <DisponibilityCard 
                  key={index}
                  initTime={item.startDateTime}
                  endTime={item.endDateTime}
                  status={item.status}
                  onClick={() => handleOpenModal(item)} // Abre o modal
                />
              ))
          ) : (
            <Vazio>
              <span>Nenhuma disponibilidade de visita técnica no momento!</span>
            </Vazio>
          )}
        </div>
      </Conteudo>

      <ModalVisita 
        visible={modalVisible} 
        onClose={handleCloseModal} 
        onSubmit={handleSubmit} 
      />
    </>
  );
}

export default VisitaFabricaPage;
