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

  .img-icon {
    height: 130%;
    position: absolute;
    right: 35px;
    top: -45px;
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
  top: 47%; /* Posiciona no meio vertical */
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
    top: 1.5vh;
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
    top: 30%;
    width: 29vw;
  }
`;

export const TextoDescricao = styled.button`
  position: absolute;
  top: 50px;
  left: 27%;
  width: 45%;
  font-size: 1.5vw;
  font-weight: normal;
  border: none;
  text-align: left;
  background-color: initial;

  @media (max-width: 768px) {
    left: 22%;
    top: 20px;
  }

`;

export const Rotate = styled.svg`
  transform: rotate(45deg);
`;
