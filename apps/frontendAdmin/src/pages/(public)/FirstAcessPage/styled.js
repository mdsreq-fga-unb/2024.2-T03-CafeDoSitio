import styled from 'styled-components';

export const ConteudoGeral = styled.div`
  height: 100vh; 
  width: 100vw;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #006343;
`;

export const Card = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px; /* Limita o tamanho máximo */
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const ParteSuperior = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  h1 {
    font-family: 'Myriad Pro', sans-serif;
    font-size: 1.5rem;
    color: #333;
    text-align: center;
  }

  span {
    font-family: 'Myriad Pro', sans-serif;
  }
`;

export const Formulario = styled.form`
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: green;
    box-shadow: 0 0 5px green;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
`;

export const EyeIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #666;

  &:hover {
    color: #000;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  background-color: #006343;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: 'Myriad Pro', sans-serif;
  font-weight: bold;

  &:hover {
    background-color: darkgreen;
  }
`;