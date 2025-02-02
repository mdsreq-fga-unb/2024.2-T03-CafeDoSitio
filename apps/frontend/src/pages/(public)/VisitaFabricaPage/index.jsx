import React, { useState, useEffect } from "react";
import Paginacao from "../../../components/Paginacao";
import { Space, ImageContainer, Space2, Conteudo, FilterZone, DateFilterContainer, Vazio } from "./styled";
import Fabrica from "../../../assets/Fabrica.jpg";
import DateInput from "../../../components/DateInput";
import { findAllVisita } from "@familiadositio/core";
import DisponibilityCard from "../../../components/DisponibilityCard";

const VisitaFabricaPage = () => {

  const [filtroStartDate, setFiltroStartDate] = useState('');
  const [visitas, setVisitas] = useState([]);
  const [visitasFiltradas, setVisitasFiltradas] = useState([]);

  const handleChangeFiltroStartDate = (e) => {
    setFiltroStartDate(e.target.value);
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
  };

  useEffect(() => { fetchDisponibility() }, []);
  useEffect(() => {
      const filtered = visitas.filter((item) => {
        const startDate = new Date(item.startDateTime);
  
        const matchesStatus = item.status === "disponivel";
        const matchesStartDate = !filtroStartDate || new Date(filtroStartDate) <= startDate;
  
        return matchesStatus && matchesStartDate;
      });
      setVisitasFiltradas(filtered);
    }, [visitas, filtroStartDate]);

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

        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, iusto officia perferendis suscipit consequatur ex doloribus distinctio magni veniam amet sapiente, totam in enim laborum. Alias dignissimos earum qui corporis.</p>

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
            <span>Nenhuma disponibilidade de visita técnica no momento!</span>
          </Vazio>
        )}
        </div>

        
      </Conteudo>

    </>
  );
}

export default VisitaFabricaPage;