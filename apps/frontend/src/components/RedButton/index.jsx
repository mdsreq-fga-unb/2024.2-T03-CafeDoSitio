import React from "react";
import { BotaoCSimbolo, IconWrapper } from "./styled";

function RedButton({simbolo, text}) {
  return(
    <BotaoCSimbolo>
      <IconWrapper>{simbolo}</IconWrapper>
      <label>{text}</label>
    </BotaoCSimbolo>
  )
}

export default RedButton;