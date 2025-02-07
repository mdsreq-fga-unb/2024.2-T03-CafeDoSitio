import styled from "styled-components";

// Estilização do contêiner principal
export const Container = styled.div`
  width: 100%;
  max-width: 400px;
  background: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 16px;
`;

// Estilização do título
export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

// Estilização da área com scroll próprio
export const ScrollArea = styled.div`
  max-height: 300px; /* Define altura fixa */
  overflow-y: auto; /* Permite rolagem vertical */
  padding-right: 8px; /* Evita sobreposição da barra de rolagem */
  
  /* Personaliza a barra de rolagem */
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 6px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }
`;

// Estilização de cada card individual
export const Card = styled.div`
  background: #f9f9f9;
  padding: 12px;
  border-radius: 8px;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 8px;
  border: 1px solid #ddd;
`;