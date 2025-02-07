import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;

  .img-background {
    width: 95%;
    height: auto;
    max-width: 100%;
    object-fit: contain;
  }

  .img-produto {
    width: 30%;
    height: auto;
    max-width: 50%;
    object-fit: contain;
  }

  .img-icon {
    height: 130%;
    position: absolute;
    right: 35px;
    top: -45px;
  }

  .produto-container {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 20px;
  }

  .img-esquerda {
      flex-direction: row; /* Imagem à esquerda, texto à direita */
  }

  .img-direita {
      flex-direction: row-reverse; /* Imagem à direita, texto à esquerda */
  }

  @media (max-width: 768px) {
    .img-background {
      width: 100%;
    }

    .img-icon {
      right: 20px;
      top: -30px;
    }
  }
`;

export const Title = styled.h1`
  text-align: left;
  font-size: 1.7rem;
  justify-content: space-between;
  color: #2B674B;
  margin: 2;
  font-family: "Impact";
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const DivContainer = styled.div`
  max-width: 80%;
  margin: 4rem;

  @media (max-width: 768px) {
    margin-top: 4rem;
  }
`;

export const ImagemContainer = styled.div`
  position: relative; /* Permite posicionar o botão sobre a imagem */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;
  margin-bottom: 70px;

  @media (max-width: 768px) {
    margin-bottom: 50px;
  }
`;

export const BotaoSobreposto = styled.button`
  position: absolute;
  top: 30%; /* Posiciona no meio vertical */
  left: 43%; /* Posiciona no meio horizontal */
  transform: translate(-50%, 110%); /* Corrige para centralizar exatamente */
  background-color: white;
  color: black;
  width: 30%;
  height: 42px;
  border: 2px;
  border-radius: 10px;
  font-size: 1.1vw;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  @media (max-width: 1045px) {
    top: 20%;
  }

  @media (max-width: 818px) {
    top: 10%;
  }

  @media (max-width: 684px) {
    margin-top: 3.5vh;
    top: 1vh;
    height: 20px;
    width: 29vw;
  }
  
  @media (max-width: 531px) {
    margin-top: 3vw;
    height: 20px;
    width: 29vw;
  }
  
  @media (max-width: 438px) {
    margin-top: 2vw;
    height: 20px;
    width: 29vw;
  }
  
  @media (max-width: 400px) {
    margin-top: 1vw;
    height: 20px;
    width: 29vw;
  }
`;

export const TextoDescricao = styled.button`
  position: absolute;
  color: white;
  top: 25px;
  left: 27%;
  width: 45%;
  font-size: 1.2vw;
  font-weight: normal;
  border: none;
  text-align: left;
  background-color: initial;

  @media (max-width: 768px) {
    left: 22%;
    top: 15px;
  }

`;

export const Text = styled.div`
  align-items: left;
  text-align: left;
  font-size: 1.3rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Rotate = styled.svg`
  transform: rotate(45deg);
`;
