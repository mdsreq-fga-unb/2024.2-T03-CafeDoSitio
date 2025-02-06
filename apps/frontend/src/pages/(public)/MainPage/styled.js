import styled from 'styled-components';
import inicial1 from "../../../assets/inicial1.jpg"
import inicial2 from "../../../assets/inicial2.jpg"

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
  border-radius: 0 40px 40px 0;
  padding: 20px;
  height: 60vh;

  h1 {
    font-size: 4.5rem;
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

export const Section2 = styled.section`
  background-image: url(${inicial2});
  background-position: center; /* Centraliza a imagem */
  background-repeat: no-repeat; /* Evita que a imagem se repita */
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 20px;
  background-size: cover;

`;

export const Acoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: right;
  justify-content: space-around;
  width: 50vw;
  text-align: right;
  border-radius: 0 20px 20px 0;
  padding: 20px;

   h1 {
  font-size: 3rem;
  font-family: Impact, sans-serif;
  margin: 1.5rem 2rem;
  color: #2B674B;
  box-shadow: 8px 0 0 0 white, -3px 0 0 0 white; /* Valores reduzidos */
  background: white;
  display: inline;
  padding: 3px 0 !important;
  position: relative;
  }


  p {
    font-size: 1.2rem;
    color: white;
    font-weight: 600;
    margin:0 2.5rem 1rem 2.5rem;
  }

  button {
    background-color: #2B674B;
    color: white;
    font-size: 1.2rem;
    font-weight: 600;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
    transition: 0.3s;
    width: 10rem;

    &:hover {
      background-color: #2B674B;
      color: white;
    }
  }
`;