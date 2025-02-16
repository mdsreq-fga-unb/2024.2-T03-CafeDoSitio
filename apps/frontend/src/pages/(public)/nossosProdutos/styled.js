import styled from "styled-components";

export const Title = styled.h1`
  text-align: left;
  font-size: 2.5rem;
  justify-content: space-between;
  color: #2B674B;
  margin: 2;
  font-family: "Impact";
  font-weight: normal;
  margin-bottom: 0;
`;

export const Space = styled.div`
  height: 40px;
`;


export const Text = styled.div`
  align-items: left;
  text-align: left;
  font-size: 1.1rem;
  font-family: 'Myriad Pro', sans-serif;
  color: #333;

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
  display: flex;
  flex-direction: column;
  margin-bottom: 60px;
`;

export const DivContainerSelosABIC = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    margin-top: 6rem; /* Ajusta a margem superior */
  }
`;

export const ImagemSelosABIC = styled.img`
  width: 30%;
  height: auto;

  @media (max-width: 768px) {
    width: 80%;
    margin-top: 2rem;
  }
`;

export const TextSelosABIC = styled.p`
  width: 100%;
  align-items: left;
  text-align: left;
  font-size: 1.1rem;
  font-family: 'Myriad Pro', sans-serif;
  color: #333;
  margin-top: 0;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-top: 1rem; /* Ajusta a margem superior para a descrição */
  }
`;

export const DivContainerTitleSelosABIC = styled.div`
  width: 60%;
  display: visible;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const DivContainerEncontreNossosProdutos = styled.div`
  margin-top: 5rem;
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
