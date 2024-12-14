import styled from 'styled-components';

export const DivPagincacao = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  left: 0;
  position: absolute;
  height: 40px;
  width: 100%;
  background: #006343;
  /* margin-bottom: 50px; */

  @media (max-width: 800px){
    justify-content: left;
    padding-inline: 20px;
  }
`;

export const DivLetreiro = styled.div`
  display: flex;
  justify-content: space-between;
  width: 1900px;

  @media (max-width: 2000px){
    width: 90%;
  }

  @media (max-width: 800px){
    width: 100%;
  }
`;

export const Letreiro = styled.h1`
  font-size: 12px;
  color: white;
  text-transform: uppercase;
`;