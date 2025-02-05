import styled from "styled-components";

export const BotaoCSimbolo = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
  align-items: center;
  padding: 15px 15px ;
  background-color: #A93439;
  border-radius: 10px;
  cursor: pointer;
  transition: 200ms;

  label {
    font-size: 15px;
    font-weight: bold;
    color: white;
  }

  &:hover {
    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.2);
    background-color: #DA731F;
  }
`;

export const IconWrapper = styled.span`
  font-size: 16px; 
  color: white;
  margin-right : 5px;
`;