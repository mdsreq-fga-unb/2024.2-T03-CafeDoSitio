import React from "react";
import { CardButton, CardDiv, TextArea, ButtonContainer } from "./styled";

const DisponibilityCard = ({id, initTime, endTime}) => {

  const initDate = new Date(initTime);
  const endDate = new Date(endTime);
  const brLocale = 'pt-br';

  return(
    <CardDiv >
      <TextArea>
        <h3>{initDate.toLocaleDateString(brLocale)}</h3>
        <span>{"Horário: " + initDate.toLocaleTimeString(brLocale).slice(0,5) + " - " 
          + endDate.toLocaleTimeString(brLocale).slice(0,5) }</span>
      </TextArea>
    </CardDiv>
  );
};

export default DisponibilityCard;