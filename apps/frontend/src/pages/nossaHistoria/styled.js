import styled from "styled-components";

export const Title = styled.h2`
  text-align: left;
  font-size: 1.5rem;
  justify-content: space-between;
  color: #2B674B;
  margin: 2;
`;

export const Text = styled.p`
    text-align: justify;


`;

export const TimelineSection = styled.div`

`;

export const FirstTextSection = styled.div`

`;

export const Container = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

export const SecondTextSection = styled.div`
    display: grid;
    align-items: center;
    grid-template-columns: repeat(2, 0.5fr); // A primeira coluna com largura automática, a segunda ocupando o restante
    gap: 40px; /* Adiciona 20px de espaço entre linhas e colunas */

    .image{
        align-items: right;
    }
`;

export const ThirdTextSection = styled.div`
  display: flex;
`;

export const DiferencialSection = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 100%;
    margin: auto;
`;

export const DiferencialCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;

//   &::before {
//     content: '';
//     width: 2px;
//     height: 100%;
//     background-color: red;
//     order: 1; /* Posiciona a linha no meio */
  }
`;

export const BackgroundLine = styled.div`
    z-index: 1;    
    display: flex;
    background-color: #F29947;  
    padding: 20px;
    height: 100;
    width: 100%;
    margin: 0;
`;

