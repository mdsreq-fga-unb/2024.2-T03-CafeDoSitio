import React from "react";
import { DivTag } from "./styled";

const Tag = ({children, bgcolor, ftcolor}) => {
  return(
    <DivTag style={{ backgroundColor: bgcolor }}>
      <span style={{ color: ftcolor }}>{children}</span>
    </DivTag>
  );
};

export default Tag;