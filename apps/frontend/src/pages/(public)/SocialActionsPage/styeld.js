import styled from "styled-components";

//@media 1125px width
export const DivStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const Title = styled.h1`
  text-align: left;
  font-size: 1.7rem;
  justify-content: space-between;
  color: #2B674B;
  margin: 2;
`;

export const Text = styled.div`
  align-items: left;
  text-align: left;
  font-size: 1.3rem;
`;

export const Space = styled.div`
  height: 50px;
`;

export const ImageWrapper = styled.div`
  flex: 1; 
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */
  background-color: #fff;
  overflow: hidden;
`;

export const DivImagem = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
`;

export const DivTexto = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 2rem;
  font-weight: bold;
`;

export const DivOverlay = styled.div`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #006343;
  mix-blend-mode: multiply;
  opacity: 1;
`;