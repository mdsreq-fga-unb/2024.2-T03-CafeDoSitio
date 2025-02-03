import React, { useState, useEffect } from "react";
import Paginacao from "../../../components/Paginacao";
import { Space, Space2, Space3, ImageContainer, Conteudo, Informacoes, QuebraMobile, FlexImagesContainer, Agendamento, Legenda } from "./styled";
import { findAllVisita } from "@familiadositio/core";
import ModalVisita from "../../../components/ModalVisita";
import CustomCalendar from "../../../components/CustomCalendar";
import Button from "../../../components/Button";

// IMPORTAÇÃO DE IMAGENS E SVG's:
import VisiteaFabrica from "../../../assets/visitaFabrica.jpg";
import calendario from "../../../assets/calendario.svg";
import VisitaTecnica from "../../../assets/VisitaTecnica.png";
import VisitaTecnica2 from "../../../assets/VisitaTecnica2.png";
import VisitaTecnica3 from "../../../assets/VisitaTecnica3.png";
import atencao from "../../../assets/atencao.svg";
import VisitaTecnica4 from "../../../assets/VisitaTecnica4.png";
import VisitaTecnica5 from "../../../assets/VisitaTecnica5.png";
import VisitaTecnica6 from "../../../assets/VisitaTecnica6.png";


const VisitaFabricaPage = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [disponibilidades, setDisponibilidades] = useState([]); // Dias disponíveis
  const [agendamentos, setAgendamentos] = useState([]); // Dias agendados

   // Simulação de dados de disponibilidade e agendamento
   useEffect(() => {
    // Exemplo de dias disponíveis (formato YYYY-MM-DD)
    setDisponibilidades(["2025-02-15", "2025-02-16", "2025-02-20"]);

    // Exemplo de dias agendados (formato YYYY-MM-DD)
    setAgendamentos(["2025-02-10", "2025-02-12"]);
  }, []);

   // Função chamada quando o usuário seleciona uma data
   const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <Paginacao text={"FAMÍLIA DO SÍTIO > VISITA TÉCNICA"} />
      <Space />

      <ImageContainer>
        <img src={VisiteaFabrica} alt="Visite a fábrica" />
      </ImageContainer>

      <Space2 />

      <Conteudo>

        <Informacoes>
          <div className="redLine"/>
          <QuebraMobile>
          <div className="infos">
            <h1>Visite nossa Fábrica</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummynibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisienim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortisnisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quisnostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex eacommodo consequat. Ut wisi enim ad minim veniam, quis nostrud exercitation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>

            <h1>O que você precisa saber:</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummynibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisienim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortisnisl ut aliquip ex ea commodo consequat. Ut wisi enim ad minim veniam, quisnostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex eacommodo consequat. Ut wisi enim ad minim veniam, quis nostrud exercitation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.</p>
          
            <ul>
              <li>Ut wisi enim ad minim veniam.</li>
              <li>Ut wisi enim ad minim veniam.</li>
              <li>Ut wisi enim ad minim veniam.</li>
              <li>Ut wisi enim ad minim veniam.</li>
            </ul>
          </div>
          <div className="images">
            <img src={VisitaTecnica} alt="Visita" />
            <img src={VisitaTecnica2} alt="Visita" />
            <img src={VisitaTecnica3} alt="Visita" />
          </div>
          </QuebraMobile>
        </Informacoes>


          <h1>Agendamento:</h1>
          <div className="DateInfo">
            <img src={calendario} alt="Calendário" className="calendario"/>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
          </div>

          <Agendamento>
            <div className="CalendarioFunct">
            <CustomCalendar
              onDateSelect={handleDateSelect}
              disponibilidades={disponibilidades}
              agendamentos={agendamentos}
            />
            </div>
            <div className="Form">
              <form>

                <h1>Informe seus dados:</h1>
                <h3>Data selecionada: {selectedDate ? selectedDate.toLocaleDateString("pt-BR") : "Nenhuma data selecionada"}</h3>

                <div className="input-zone">
                  <label>Nome e Sobrenome:</label>
                  <input type="text"/>
                </div>
                <div className="input-zone">
                  <label>E-mail:</label>
                  <input type="text" />
                </div>
                <div className="input-zone">
                  <label>Telefone:</label>
                  <input type="text"  />
                </div>
                <div className="input-zone">
                  <label>Número de Pessoas:</label>
                  <input type="text" />
                </div>
                <div className="input-zone">
                  <label>Mensagem:</label>
                  <textarea type="text" />
                </div>

                <input type="submit" value="Solicitar Agendamento" className="submit"></input>
              </form>
            </div>
          </Agendamento>

          <Legenda>

            <div className="legenda legenda1">
              <div className="colorlegend colorlegend1"/>
              <label>DATA DISPONÍVEL</label>
            </div>

            <div className="legenda legenda2">
              <div className="colorlegend colorlegend2"/>
              <label>DATA ESGOTADA</label>
            </div>

          </Legenda>

          <div className="attetionDiv">
            <img src={atencao} alt="Atenção" />
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
          </div>
      </Conteudo>
      <FlexImagesContainer>
        <img src={VisitaTecnica4} alt="Visita" />
        <img src={VisitaTecnica5} alt="Visita" />
        <img src={VisitaTecnica6} alt="Visita" />
      </FlexImagesContainer>

      <Space3 />

    </>
  );
}

export default VisitaFabricaPage;
