import styled from "styled-components";

export const CardDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  align-items: center;
  padding-inline-start: 30px;
  transition: 200ms;
  font-family: 'Myriad Pro', sans-serif;
  color: #555;
  gap: 30px;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 200ms, box-shadow 200ms;

  &:hover {
    transform: scale(1.02); /* Aumenta ligeiramente o tamanho */
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); /* Torna a sombra mais intensa */
  }
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  margin-block: 30px;

  h3{
    margin: 0 0 8px 0;
    font-size: 30px;
    margin-bottom: 20px;
  }

 @media (max-width: 600px) {
    
  h3 {
    font-size: 20px;
    margin: 0 0 4px 0;
  }

  span{
    font-size: 10px;
  }
 }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 178px;
  overflow: hidden; /* Garante que a imagem e o efeito não ultrapassem o contêiner */

  img {
    height: 160px;
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