import styled from 'styled-components';

export const DivPagincacao = styled.div`
  display: flex;
  align-items: center;
  left: 0;
  position: absolute;
  height: 40px;
  width: 100%;
  background: #006343;
  /* margin-bottom: 50px; */
`;

export const Letreiro = styled.h1`
  font-size: 12px;
  width: 100%;
  color: white;
  text-transform: uppercase;
  margin: 2vh 20vh;

  @media (max-width: 1640px) {
    margin: 2vh 8vh;
  }

  @media (max-width: 850px) {
    margin: 2vh 2vh;
  }
`;