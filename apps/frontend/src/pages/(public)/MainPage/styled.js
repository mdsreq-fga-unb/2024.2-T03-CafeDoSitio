import styled from 'styled-components';
import inicial1 from "../../../assets/inicial1.jpg"

export const Container = styled.div`
  z-index: -1;
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  img{
    width: 100%;
    object-fit: cover;
  }
`;



export const Space = styled.div`
height: 1000px;
`;

export const Section1 = styled.section`
  background-image: url(${inicial1});
  background-size: cover; /* Faz a imagem cobrir toda a área da seção */
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Evita que a imagem se repita */
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 0;
  height: 100vh;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 40vw;
  background-color: white;
  object-fit: cover;
  border-radius: 0 20px 20px 0;
  padding: 20px;
  height: 60vh;

  h1 {
    font-size: 4rem;
    font-family: impact;
    margin: 1.5rem 2rem;
    color: #2B674B ;
  }

  p {
    font-size: 1.2rem;
    color: #000;
    font-weight: 600;
    margin:0 2.5rem 1rem 2.5rem;
  }
`;