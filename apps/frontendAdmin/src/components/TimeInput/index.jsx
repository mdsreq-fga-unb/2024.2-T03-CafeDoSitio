import React from "react";
import { Input } from "./styled";

const TimeInput = ({onChange}) => {
  return (
    <Input type="Time" onChange={onChange}/>
  );
};

export default TimeInput;