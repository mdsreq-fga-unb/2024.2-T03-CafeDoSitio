import styled from "styled-components";

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;

  p {
    margin: 0rem;
    padding: 0rem;
    text-align: left;
    font-size: 1rem;
    font-size: 1rem;
    color: #006343; /* Cor do texto verde */
    cursor: pointer;
    text-decoration: underline; /* Texto sublinhado */
  &:hover {
    color: #004c2e; /* Cor do texto verde escuro ao passar o mouse */
  }
  }

`;

export const Button = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #006343;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  border-color: black;

  &:hover {
    background-color: #004c2e;
  }
`;
export const TesteButton = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #006343;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004c2e;
  }
`;


export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
  font-weight: normal;
  font-family: 'Impact', sans-serif;  
  color: #006343;
`;


export const Label = styled.label`
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
`;


export const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  margin-bottom: 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #006343;
  }
`;

export const LocAtual = styled.button`

`;