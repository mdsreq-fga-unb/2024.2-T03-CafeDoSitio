import styled from "styled-components";

export const TimelineCardContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

export const Title = styled.h2`
  text-align: left;
  font-size: 1.5rem;
  justify-content: space-between;
  color: #333;
`;

export const Text = styled.p`

`;

export const Content2 = styled.div`
  display: grid;
  grid-template-columns: auto 1fr; // A primeira coluna com largura automática, a segunda ocupando o restante
  gap: 20px; /* Adiciona 20px de espaço entre linhas e colunas */

`;

export const Content = styled.div`
  display: flex;  
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const TimelineLine = styled.hr`
position: relative;


width: 100%;
height: 100%;
background-color: #A53A44;
z-index: 1; // Este ficará atrás
`;

export const YearDisplay = styled.div`
  display: flex;  
  flex: 2;
  background-color: #2B674B;
  text-align: center;
  border-radius: 6px;
  padding: 4px;
  align-items: center; /* Centraliza o texto verticalmente */
  transition: all .3s ease-out;


  .year {
    writing-mode: vertical-lr; 
    transform: rotate(180deg);
    font-size: 3rem;
    font-weight: bold;
    font-family: 'Impact', sans-serif;
    color: #fff;
  }
`;


export const TextBox = styled.div`
  flex: 2;
  background-color: #fff;
  height: 90%;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 0 8px 8px 0;
  padding: 10px;
  margin: 0 20px;
`;

export const Button = styled.button`
  background-color: transparent;
  color: #CFCFCF;
  border: none;
  border-radius: 20%;
  width: 32px;
  height: 32px;
  font-size: 1.2rem;
  padding: 10px
  cursor: pointer;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ;
  }

  &:disabled {
    background-color: transparent;
    cursor: not-allowed;
  }
`;

export const Navigation = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .timeline {
    display: flex;
    justify-content: space-around;
    width: 100%;

    .timeline-item {
      width: 30px;
      height: 30px;
      background-color: #ccc;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all .3s ease-out;
  
      .timeline-item-year{
        margin-top: 50px;
      }

      &.active {
        background-color: #A53A44;
        color: #A53A44;

      }
    }
  }
`;
