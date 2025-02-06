import styled from "styled-components";

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  padding: 2rem;
  border-top-right-radius: 28px;
  border-bottom-right-radius: 28px;

  button {
    margin: 0rem;
    padding: 0;
    text-align: left;
    font-size: 1rem;
  }


  @media(max-width: 768px){
    border-radius: 28px;
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

export const Button = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: #006343; /* Cor do texto verde */
  background-color: transparent; /* Fundo transparente */
  border: none; /* Sem borda */
  border-radius: 0; /* Sem borda arredondada */
  cursor: pointer;
  text-decoration: underline; /* Texto sublinhado */
  transition: color 0.3s ease;

  &:hover {
    color: #004c2e; /* Cor do texto verde escuro ao passar o mouse */
  }
`;