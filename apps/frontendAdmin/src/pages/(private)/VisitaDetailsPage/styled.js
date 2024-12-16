import styled from "styled-components";

export const Space = styled.div`
  height: 175px;

  @media (max-width: 990px) {
    height: 198px;
  }

  @media (max-width: 570px) {
    height: 204px;
  }

  @media (max-width: 450px) {
    height: 214px;
  }

  @media (max-width: 300px) {
    height: 90px;
  }
`;

export const ImageContainer = styled.div`
  z-index: 1;
  position: absolute;
  left: 0;
  top: 0;
  margin-top: 78px;
  width: 100%;
  height: 200px;
  overflow: hidden; /* Garante que a imagem e o efeito não ultrapassem o contêiner */

  img {
    height: 200px;
    width: 100%;
    object-fit: cover;
    object-position:  0% 64%; /* Foca na parte inferior da imagem */
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(218, 115, 31, 0.7); /* Verde com 50% de opacidade */
    pointer-events: none; /* Garante que a camada não bloqueie cliques */
  }

  @media (max-width: 300px) {
    display: none;
  }
`;

export const Conteudo = styled.div`
  position: absolute;
  width: 90vw;
  z-index: 2;
  display: flex;
  flex-direction: column;

  h1{
    font-family: 'Myriad Pro', sans-serif;
    font-size: 70px;
    margin: 0;
    color: white
  }

  h2{
    font-family: 'Myriad Pro', sans-serif;
    font-size: 24px;
    color: #555;
  }

  @media (max-width: 990px) {
    h1{
      font-size: 40px;
    }
  }

  @media (max-width: 570px) {
    h1{
      font-size: 30px;
    }
  }

  @media (max-width: 450px) {
    h1{
      font-size: 18px;
    }
  }

  @media (max-width: 300px) {
    h1{
      color: #555;
      font-size: 15px;
    }
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Card = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  gap: 30px;
  background-color: white;
  padding-inline: 30px;
  padding-block: 20px;

  .title{
    font-family: 'Myriad Pro', sans-serif;
    font-weight: bold;
  }

  .description{
    font-family: 'Myriad Pro', sans-serif;
  }

  .status{
    text-transform: capitalize;
  }

  @media (max-width: 350px) {
    .title{
      font-size: 12px;
    }

    .description{
      font-size: 10px;
    }
  }

`;

export const Vazio = styled.div`
  display: flex;
  height: 178px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  gap: 2rem;

  .icon{
    color: #DA731F;
    font-size: 40px;
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const InputsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 26px;

  .input-zone{
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;