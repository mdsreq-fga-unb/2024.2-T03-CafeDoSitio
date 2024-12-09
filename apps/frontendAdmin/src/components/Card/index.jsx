import React from "react";
import { CardDiv, TextArea } from "./styled";

const Card = ({children, title, description, onClick}) => {
  return(
    <CardDiv onClick={onClick}>
      {children}
      <TextArea>
        <h3>{title}</h3>
        <span>{description}</span>
      </TextArea>
    </CardDiv>
  );
};

export default Card;