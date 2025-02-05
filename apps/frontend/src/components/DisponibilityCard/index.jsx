import React from "react";
import { CardDiv, TextArea } from "./styled";
import Tag from "../Tag";

const DisponibilityCard = ({initTime, endTime, status, isSelected, onClick}) => {

  const initDate = new Date(initTime);
  const endDate = new Date(endTime);
  const brLocale = 'pt-br';

  return(
    <CardDiv onClick={onClick} isSelected={isSelected}>
      <TextArea>
        <span>{"Horário: " + initDate.toLocaleTimeString(brLocale).slice(0,5) + " - " 
          + endDate.toLocaleTimeString(brLocale).slice(0,5) }</span>
        { status === 'disponivel' ? (
            <Tag bgcolor={"#006343"} ftcolor={"white"}>{status}</Tag>
          ) : status === 'solicitado' ? (
            <Tag bgcolor={"#DA731F"} ftcolor={"white"}>{status}</Tag>
          ) : status === 'agendado' ? (
            <Tag bgcolor={"#A93439"} ftcolor={"white"}>{status}</Tag>
          ) : (<></>)}
      </TextArea>
    </CardDiv>
  );
};

export default DisponibilityCard;