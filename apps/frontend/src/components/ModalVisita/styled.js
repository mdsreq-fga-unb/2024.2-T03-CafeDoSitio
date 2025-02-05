import styled from 'styled-components';

export const ButtonConfirm = styled.button`
  background-color: #006343;
  font-family: 'Myriad Pro', sans-serif;
  font-weight: bold;
  color: white;
  padding-block: 8px;
  padding-inline: 20px;
  border-radius: 6px;
  transition: 100ms;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #004c2e;
  }
`;

export const ButtonCancel = styled.button`
  background-color: #A93439;
  font-family: 'Myriad Pro', sans-serif;
  font-weight: bold;
  color: white;
  padding-block: 8px;
  padding-inline: 24px;
  border: none;
  border-radius: 6px;
  transition: 100ms;
  cursor: pointer;
  margin-right: 15px;

  &:hover {
    background-color:rgb(129, 9, 15);
  }
`;