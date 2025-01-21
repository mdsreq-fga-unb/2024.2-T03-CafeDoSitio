import React from "react";
import { ButtonDiv } from "./styled";

const RedButton = ({children, text, onClick}) => {
  return(
    <ButtonDiv onClick={onClick}>
      {children}
      <input type="button" value={text || "Digite..."}/>
    </ButtonDiv>
  );
};

export default RedButton;