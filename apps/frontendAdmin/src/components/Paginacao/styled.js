import styled from "styled-components";

export const DivPaginacao = styled.div`
  display: flex;
  align-items: center;
  left: 0;
  width: 100%;
  background: #E6D5B3;
  position: absolute;
  z-index: 9;

  display: flex;
  justify-content: center;

  @media (max-width: 800px){
    justify-content: left;
    padding-inline: 20px;
  }
`;

export const Letreiro = styled.h1`
  text-transform: uppercase;
  font-size: 12px;
  width: 100%;
  color: black;

  .page{
    color: black;
  }
`;

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 1900px;

  @media (max-width: 2000px){
    width: 90%;
  }
`;