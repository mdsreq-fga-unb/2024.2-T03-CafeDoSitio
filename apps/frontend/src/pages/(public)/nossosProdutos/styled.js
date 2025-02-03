import styled from "styled-components";

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

export const Text = styled.div`
  align-items: left;
  text-align: left;
  font-size: 1.3rem;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const NossosProdutosdiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 100%;

  img {
    width: 95%;
    height: auto;
    max-width: 100%;
    object-fit: contain;
  }
`;

export const DivContainer = styled.div`
  max-width: 80%;
  margin: 4rem;

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 2rem;
  }
`;
export const DivContainerSelosABIC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 80%;
  margin-left: 5rem;
  margin-right: 0rem;
  margin-top: -6rem;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 6rem; /* Ajusta a margem superior */
  }
`;

export const ImagemSelosABIC = styled.img`
  width: 40%;
  max-width: 300px;
  height: auto;
  margin-right: -8rem;
  margin-left: -5rem;
  margin-top: 7rem;

  @media (max-width: 768px) {
    width: 60%;
    margin-right: 0;
    margin-left: 0;
    margin-top: 2rem;
  }
`;

export const TextSelosABIC = styled.p`
  width: 100%;
  align-items: left;
  text-align: left;
  font-size: 1.5rem;
  margin-top: -1rem;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-top: 4rem; /* Ajusta a margem superior para a descrição */
  }
`;

export const DivContainerTitleSelosABIC = styled.div`
  max-width: 80%;
  margin-left: 0rem;
  margin-right: 4rem;
  margin-bottom: -3rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const DivContainerEncontreNossosProdutos = styled.div`
  max-width: 100%;
  margin-left: 5rem;
  margin-right: 4rem;
  margin-top: 5rem;

  @media (max-width: 768px) {
    margin-left: 2rem;
    margin-right: 2rem;
    margin-top: 3rem;
  }
`;

export const SubtitleSelosABIC = styled.h1`
  text-align: left;
  font-size: 1.7rem;
  color: #2B674B;
  margin: 2;
  margin-bottom: 2rem;
  margin-top: 4rem;
  font-family: "Impact";
  font-weight: normal;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    margin-top: 10rem; /* Ajusta a margem superior para dispositivos móveis */
  }
`;

export const BotaoSobreposto = styled.button`
  position: absolute;
  top: 45%; /* Posiciona no meio vertical */
  left: 43%; /* Posiciona no meio horizontal */
  transform: translate(-50%, 110%); /* Corrige para centralizar exatamente */
  background-color: white;
  color: black;
  width: 25%;
  height: 40px;
  border: 2px solid black;
  border-radius: 5px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: black;
    color: white;
  }

  @media (max-width: 768px) {
    width: 40%;
    font-size: 14px;
    top: 35%;
  }
`;

export const TextoDescricao = styled.button`
  position: absolute;
  color: black;
  top: 40px;
  left: 30%;
  width: 45%;
  font-size: larger;
  font-weight: bold;
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
