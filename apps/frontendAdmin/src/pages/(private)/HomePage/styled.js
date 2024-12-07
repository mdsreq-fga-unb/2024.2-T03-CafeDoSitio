import styled from "styled-components";

export const ConteudoGeral = styled.div`
  height: 100vh; 
  width: 100vw;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #006343;
`;

export const LoginCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px; /* Limita o tamanho máximo */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;