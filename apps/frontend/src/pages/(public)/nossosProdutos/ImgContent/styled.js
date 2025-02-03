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
  top: 40%; /* Posiciona no meio vertical */
  left: 43%; /* Posiciona no meio horizontal */
  transform: translate(-50%, 110%); /* Corrige para centralizar exatamente */
  background-color: white;
  color: black;
  width: 30%;
  height: 42px;
  border: 2px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  @media (max-width: 768px) {
    width: 50%;
    font-size: 14px;
    top: 35%;
  }
`;

export const TextoDescricao = styled.button`
  position: absolute;
  color: white;
  top: 25px;
  left: 27%;
  width: 45%;
  font-size: larger;
  font-weight: normal;
  border: none;
  text-align: left;
  background-color: initial;

  @media (max-width: 768px) {
    font-size: 14px;
    left: 20%;
    width: 60%;
    top: 15px;
  }
`;

export const Rotate = styled.svg`
  transform: rotate(45deg);
`;
