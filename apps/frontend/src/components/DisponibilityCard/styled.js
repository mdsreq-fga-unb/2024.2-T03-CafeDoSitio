import styled from "styled-components";

export const CardDiv = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  background-color: ${(props) => (props.isSelected ? "#006343" : "white")}; /* Apenas o selecionado fica verde */
  color: ${(props) => (props.isSelected ? "white" : "#555")}; /* Apenas o selecionado fica com texto branco */
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
  padding-inline-start: 30px;
  transition: 200ms;
  font-family: 'Myriad Pro', sans-serif;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 200ms, box-shadow 200ms;

  &:hover {
    transform: scale(1.02); /* Aumenta ligeiramente o tamanho */
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); /* Torna a sombra mais intensa */
  }
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-bottom: -10px;
  }

`;