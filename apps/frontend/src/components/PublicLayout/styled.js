import styled from "styled-components";

export const Centralização = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 800px){
    justify-content: left;
    padding-inline: 20px;
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

  @media (max-width: 800px){
    width: 100%;
  }
`;