import styled from "styled-components";

export const Space = styled.div`
  height: 50px;
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 30px;
    color: #333;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 0;
    color: #333;
  }

  p {
    font-weight: 300;
    font-size: 1rem;
    color: #333;
  }
`;