import styled from "styled-components";

export const FullWidthContainer = styled.div`
  width: 100% !important;
  max-width: 100% !important;
  flex-grow: 1;
`;

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

export const DivStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; //O "grid-template-columns: 1fr 1fr;" define duas colunas para telas maiores.

  @media(max-width: 1125px){
    grid-template-columns: 1fr; //Como aqui muda pra apenas 1, entao vira uma coluna apenas
    
  }
`;

export const DivStyled2 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr; //O "grid-template-columns: 1fr 1fr;" define duas colunas para telas maiores.

  @media(max-width: 1125px){
    grid-template-columns: 1fr; //Como aqui muda pra apenas 1, entao vira uma coluna apenas
    & > :first-child {
      order: 2;
    }

    & > :last-child {
      order: 1;
    }
  }
`;

export const Container = styled.div`
  background-color: #458260;
`;
export const SitioSemLixoTitle = styled.h1`
  color: #FFF;
  background-color: #458260;
  font-size: 2.5rem;
  margin-top:0;
  margin-bottom: 3vh;
  margin-left: 3vw;

  @media (max-width: 1125px) {
    /* Para centralizar usando grid */
    margin-left: 0;
    margin-right: 0;
    font-size: 2rem; /* Ajuste o tamanho da fonte */
    display: grid;
    place-items: center; /* Centraliza tanto horizontal quanto vertical */    
  }
`;

export const SitioSemLixo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media(max-width: 1125px){
    grid-template-columns: 1fr; //Como aqui muda pra apenas 1, entao vira uma coluna apenas
  }
`;
export const ImgStyled = styled.img`
  grid-area: imagem;
  width: 100%;
  height: auto;
  object-fit: contain;
`;

export const Title = styled.h1`
  text-align: justify;
  font-size: 1.7rem;
  justify-content: space-between;
  color: #2B674B;
  margin: 2;
`;

export const IconWrapper = styled.div`
  margin-left: 1.4vw;
  max-width: 12vw;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;

export const Text = styled.div`
  align-items: left;
  text-align: justify;
  font-size: 1.3rem;
`;

export const MiniSpace = styled.div`
  height: 30px;
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
  display: flex;
  gap:70px;
  top: 50%;
  left: 50%;
  height: 100%;
  width: 100%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 3vw;
  font-weight: bold;
  justify-content: center; /* Centraliza horizontalmente */
  align-items: center; /* Centraliza verticalmente */

  @media(max-width: 1135px){
    font-size: 1.vw;
  }
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

export const SitioVerdeTitle = styled.div`
  font-family: Impact;
  font-size: 1.vw;
  margin-left: 13vw;

`;