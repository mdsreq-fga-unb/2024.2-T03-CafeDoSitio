import styled from "styled-components";

export const CalendarContainer = styled.div`
  .react-calendar {
    width: 100%;
    background: white;
    border-radius: 10px;
    
    border: none;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    font-family: 'Myriad Pro', sans-serif;
  }

  /* Estiliza o cabeçalho do mês */
  .react-calendar__navigation {
    background: #006343;
    color: white;
    border-radius: 8px 8px 0 0;
    font-weight: bold;
  }

  .react-calendar__navigation button {
    color: white;
    font-size: 1.2rem;
  }

  .react-calendar__navigation button:disabled {
    background: transparent;
  }

  /* Estiliza os dias da semana */
  .react-calendar__month-view__weekdays {
    text-transform: uppercase;
    font-weight: bold;
    color: #4b4b4b;
  }

  /* Dias disponíveis (Verde) */
  .available {
    background: #006343 !important; /* Verde suave */
    color: white !important;
  }

  /* Dias agendados (Vermelho) */
  .booked {
    background: #a93439 !important; /* Vermelho suave */
    color: white !important;
  }

  /* Dia selecionado */
  .react-calendar__tile--active {
    background: #da731f !important; /* Laranja */
    color: white !important;
  }

  /* Estiliza os dias atuais */
  .react-calendar__tile--now {
    background: #f0f0f0 !important;
    color: #006343 !important;
  }

  /* Ajusta espaçamento entre os dias */
  .react-calendar__tile {
    padding-inline: 20px;
    padding-block: 45px;
    font-size: 1rem;
  }
`;