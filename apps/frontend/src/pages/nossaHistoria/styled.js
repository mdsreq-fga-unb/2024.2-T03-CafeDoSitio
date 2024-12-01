import styled from "styled-components";

export const Title = styled.h1`
  text-align: left;
  font-size: 1.5rem;
  justify-content: space-between;
  color: #2B674B;
  margin: 2;
`;

export const Text = styled.div`
  align-items: left;
  text-align: left;


`;

export const TimelineSection = styled.div`

`;

export const FirstTextSection = styled.div`

`;

export const DivContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  max-width: 80%;
  margin: 4rem;
`;

export const Container = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 20px;
  max-width: 600px;
  margin: auto;
  .img {
    align-items: left;
    height: 38rem; /* Diminuído para metade */
    width: auto; /* Mantém a proporção */
  }
`;

export const SecondTextSection = styled.div`
    display: flex;
    align-items: center;
    margin: 90px;
    padding: 5;
    grid-template-columns: repeat(2, 0.5fr); 
    gap: 4px; 
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

  // Isso é uma tentativa de colocar a linha vermelha entre a imagem e o texto
  // Atualmente isso aqui sempre coloca antes da imagem, mesmo que altere 'order'
  // pra 1
  //
  // &::before {
  //   content: '';
  //   width: 5px;
  //   height: 100%;
  //   background-color: red;
  //   order: 0; 
  // }
`;

export const BackgroundLine = styled.div`
    z-index: 1;    
    display: flex;
    background-color: #F29947;  
    padding: 20px;
    height: 100;
    width: 100%;
    margin: 0 auto;
`;

export const RedLine = styled.div`
  display : flex;
  width: 5px;
  height: 100%;
  background-color: red;  

`;



