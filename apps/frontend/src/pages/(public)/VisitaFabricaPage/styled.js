import styled from "styled-components";

export const Space = styled.div`
  height: 40px;
`;

export const Space2 = styled.div`
  height: 640px;

  @media (max-width: 600px) {
    height: 300px;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 600px;
  overflow: hidden; /* Garante que a imagem e o efeito não ultrapassem o contêiner */

  img {
    height: 600px;
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

  @media (max-width: 600px) {
    height: 300px;

    img{
      height: 300px;
    }
  }
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;

  h1 {
    font-size: 2.5rem;
    color: #333;
    font-family: 'Myriad Pro', sans-serif;
    margin-bottom: 0;
  }

  p {
    margin-top: 0;
    font-weight: 300;
    color: #333;
    font-family: 'Myriad Pro', sans-serif;
    font-size: 1rem;
  }

  .visitas-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

export const Vazio = styled.div`
  display: flex;
  height: 178px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  gap: 2rem;

  .icon{
    color: #DA731F;
    font-size: 40px;
  }

  span {
    font-size: 1rem;
    color: #333;
    font-family: 'Myriad Pro', sans-serif;
  }
`;

export const FilterZone = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 30px;

  .ButtonsZone{
    display: flex;
    flex-direction: row;
    gap: 10px;
  }
`;

export const DateFilterContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;

  input {
    width: 100%;
    padding: 8px 12px;
    border: 2px solid #006343;
    border-radius: 4px;
    font-family: 'Myriad Pro', sans-serif;
    background-color: transparent;

    &:focus {
      outline: none;
      border-color: green;
      box-shadow: 0 0 5px green;
    }
  }

  @media (max-width: 630px) {
    flex-direction: column;
  }
`;