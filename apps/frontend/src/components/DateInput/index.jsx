import React from "react";
import { Input } from "./styled";

const DateInput = ({onChange}) => {
  return (
    <Input type="Date" onChange={onChange}/>
  );
};

export default DateInput;