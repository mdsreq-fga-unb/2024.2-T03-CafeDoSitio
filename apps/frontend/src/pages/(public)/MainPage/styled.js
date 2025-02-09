import styled from 'styled-components';
import inicial1 from "../../../assets/inicial1.jpg"
import inicial2 from "../../../assets/inicial2.jpg"
import Fundocappuccino from "../../../assets/Fundocappuccino.jpg"
import cappuccino from "../../../assets/cappuccino.png"
import topo from "../../../assets/topo.jpeg"

export const Container = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100% !important;
  max-width: 100% !important;
  flex-grow: 1;


  img{
    width: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    background-image: url(${topo});
    background-size: contain; 
    background-position: top; 

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

  @media (max-width: 768px) {
    background-image: url(${Fundocappuccino}); 
    background-size: cover;
    background-position: center;
    height: 80vh;
    position: relative; /* Necessário para o posicionamento da imagem sobreposta */

    /* Imagem sobreposta */
    &::after {
      content: '';
      background-image: url(${cappuccino}); /* Imagem sobreposta */
      background-size: contain; /* Ajusta a imagem para caber sem cortar */
      background-repeat: no-repeat;
      background-position: center;
      position: absolute;
      width: 100%; /* Ajusta o tamanho da imagem sobreposta */
      height: 100%; /* Ajusta a altura da imagem sobreposta */
      bottom: 20%; /* Posiciona a imagem sobreposta */
    }
  }
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
    font-size: 3rem;
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

  @media (max-width: 768px) {
    width: 100%; /* Ajusta a largura do card */
    margin-top: 60vh; /* Dá um espaço entre a imagem e o card */
    height: auto; /* Ajusta a altura do card */
    border-radius: 0;

    h1 {
      font-size: 1.5rem;
      font-family: impact;
      margin: 1rem 1rem;
      color: #2B674B ;
    }

    p {
      font-size: 0.8rem;
      color: #000;
      font-weight: 600;
      margin:0 1rem 1rem 1rem;
    }
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

  button {
    margin: 2rem;
  }

  @media (max-width: 768px) {
    justify-content: center; /* Centraliza o conteúdo em telas menores */
    padding: 30px; /* Reduz o padding */
  }
`;

export const Acoes = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end; /* Alinha os itens à direita */
  justify-content: space-around;
  width: 50vw;
  text-align: right;
  border-radius: 0 20px 20px 0;
  padding: 20px;

  @media (max-width: 768px) {
    width: 80vw; /* Aumenta a largura para telas menores */
    align-items: center; /* Centraliza os itens em telas menores */
    text-align: center; /* Centraliza o texto */
    padding: 10px; /* Reduz o padding */
  }

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

    @media (max-width: 768px) {
      font-size: 2rem; /* Reduz o tamanho da fonte */
      margin: 1rem; /* Ajusta a margem */
    }
  }

  p {
    font-size: 1.2rem;
    color: white;
    font-weight: 600;
    margin: 0 2.5rem 1rem 2.5rem;

    @media (max-width: 768px) {
      font-size: 1rem; /* Reduz o tamanho da fonte */
      margin: 0 1rem 1rem 1rem; /* Ajusta a margem */
    }
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

    @media (max-width: 768px) {
      font-size: 1rem; /* Reduz o tamanho da fonte */
      width: 8rem; /* Reduz a largura do botão */
    }
  }
`;

export const DivFooter = styled.section`
  bottom: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  background: #006343;

  .logo-img {
    margin-top: -20px;
    width: 180px;
    height: auto;
  }
`;


export const Conteudo = styled.div`
  padding-inline: 4.5rem;

  @media (max-width: 850px) {
    padding-inline: 2vw;
  }
`;

export const ParteSuperior = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 2.0rem;
  column-gap: 6rem;
  flex-wrap: wrap;
  padding-bottom: 2.5rem;

  justify-content: center;
  border-bottom: 1px solid white;
`;

export const Divisao1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6rem;

  ul {
    margin: 0px;
    padding: 0px;

    .title {
      color: white;
      font-weight: bold;
      font-size: 1.0rem;
      margin-bottom: 15px;
    }
  }

  li {
    list-style: none;
    margin: 0px;

    a {
      text-decoration: none;
      color: white;
      font-size: 0.8rem;

      &:hover{
        text-decoration: underline;
      }
    }
  }
`;

export const Divisao2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;

  .title{
    color: white;
    font-weight: bold;
    font-size: 1.0rem;
    margin-bottom: 15px;
    margin: 0px;
  }

  p {
    margin: 0px;
    font-size: 0.8rem;
  }

  a {
    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const DivisaoTelefone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.0rem;

  label {
    font-weight: bold;
    font-size: 2.0rem;
  }
`;

export const CopyRigthSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p{
    color: white;
    font-size: 1.0rem;
  }

  img {
    width: 12.0rem;
    height: auto;
  }

  @media (max-width: 1420px) {
    p {
      font-size: 0.7rem;
    }

    img {
      width: 11.0rem;
      height: auto;
    }
  }

  @media (max-width: 850px) {
    padding-inline: 2vw;

    p {
      font-size: 0.5rem;
    }

    img {
      width: 9.0rem;
      height: auto;
    }
  }
`;