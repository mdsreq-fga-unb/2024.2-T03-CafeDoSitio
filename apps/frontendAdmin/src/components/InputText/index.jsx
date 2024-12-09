import React from "react";
import { Input, InputZone } from "./styled";

const InputText = ({text, type, placeholder}) => {
  return(
    <InputZone>
      <label>{text}</label>
      <Input type={type} placeholder={placeholder}/>
    </InputZone>
  );
};

export default InputText;