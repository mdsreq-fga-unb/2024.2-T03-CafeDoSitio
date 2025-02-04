import React from "react";
import { CardDiv, TextArea, ImageContainer } from "./styled";
import Tag from "../Tag";
import FabricaImage from "../../assets/Fabrica.jpg";

const DisponibilityCard = ({initTime, endTime, status, onClick}) => {

  const initDate = new Date(initTime);
  const endDate = new Date(endTime);
  const brLocale = 'pt-br';

  return(
    <CardDiv onClick={onClick}>
      <TextArea>
        <h3>{initDate.toLocaleDateString(brLocale)}</h3>
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
      
        <ImageContainer>
          <img src={FabricaImage} alt="Foto da Fábrica da Família do Sítio" />
        </ImageContainer>
    </CardDiv>
  );
};

export default DisponibilityCard;