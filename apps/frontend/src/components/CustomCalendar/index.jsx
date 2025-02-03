import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Estilo padrão do calendário
import { CalendarContainer } from "./styled";

const CustomCalendar = ({ onDateSelect, disponibilidades, agendamentos }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Verifica se um dia está disponível
  const isDayAvailable = (date) => {
    const dateString = date.toISOString().split("T")[0];
    return disponibilidades.includes(dateString);
  };

  // Verifica se um dia está agendado
  const isDayBooked = (date) => {
    const dateString = date.toISOString().split("T")[0];
    return agendamentos.includes(dateString);
  };

  // Função para definir a classe do dia
  const tileClassName = ({ date, view }) => {
    if (view === "month") {
      if (isDayAvailable(date)) return "available";
      if (isDayBooked(date)) return "booked";
    }
    return null;
  };

  // Função chamada quando o usuário seleciona uma data
  const handleDateChange = (date) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  return (
    <CalendarContainer>
      <Calendar
        value={selectedDate}
        onChange={handleDateChange}
        tileClassName={tileClassName}
        minDetail="month"
        maxDetail="month"
        defaultView="month"
        locale="pt-BR" // Define o idioma para português
      />
    </CalendarContainer>
  );
};

export default CustomCalendar;