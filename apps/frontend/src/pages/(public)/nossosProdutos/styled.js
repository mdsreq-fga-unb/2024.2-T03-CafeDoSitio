import styled from "styled-components";

export const Title = styled.h1`
  text-align: left;
  font-size: 1.7rem;
  justify-content: space-between;
  color: #2B674B;
  margin: 2;
  font-family: "Impact";
  font-weight: normal;
`;

export const Text = styled.div`
  align-items: left;
  text-align: left;
  font-size: 1.3rem;


`;

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
      right: 60px;
      top: -45px;
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

export const ImagemContainer = styled.div`
    position: relative; /* Permite posicionar o botão sobre a imagem */
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 100%;
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
`;


export const TimelineSection = styled.div`

`;

export const FirstTextSection = styled.div`

`;

export const DivContainer = styled.div`
  //padding: 20px;
  max-width: 80%;
  margin: 4rem;
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
  }
`;


export const ImagemSelosABIC = styled.img`
  width: 40%; 
  max-width: 300px; 
  height: auto;
  margin-right: -8rem;
  margin-left: -5rem;
  margin-top: 7rem;
`;

export const TextSelosABIC = styled.p`
  width: 100%; 
  align-items: left;
  text-align: left;
  font-size: 1.5rem;
  margin-top: -1rem;
   
`;

export const DivContainerTitleSelosABIC = styled.div`
  //padding: 20px;
  max-width: 80%;
  margin-left: 0rem;
  margin-right: 4rem;
  margin-bottom: -3rem
`;

export const DivContainerEncontreNossosProdutos = styled.div`
  //padding: 20px;
  max-width: 100%;
  margin-left: 5rem;
  margin-right: 4rem;
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
`;



/*
export const Container = styled.div`
  //padding: 20px;
  max-width: 600px;
  margin: 4rem;
  
  .img {
    align-items: left;
    width: auto; 

    @media(max-width: 800px){
      width: 70vw;
    }
  }
`;
*/

export const SecondTextSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 3rem;
    justify-content: center; 


    @media(max-width: 1327px){
      flex-direction: column;
    }
`;

export const ThirdTextSection = styled.div`
  align-items: center;
  justify-content: center;
  padding: 3vw;
`;

export const DiferencialSection = styled.div`
    display: flex;
    flex-direction: row;
    background-color: red;
    border-radius: 20px;
    //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    margin: auto;
    justify-content: center;

    @media(max-width: 1320px){
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
`;


export const DiferencialCard = styled.div`
  display: flex;
  margin: 2rem;
  align-items: center;
  max-width: 400px;
`;

export const BackgroundLine = styled.div`
    z-index: 1;    
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F29947;  
    //padding: 20px;
    width: 100%;

    @media(max-width: 900px){
      display: none;
    }
`;

export const RedLine = styled.div`
  display : flex;
  width: 5px;
  border-radius: 3px;
  height: 100%;
  background-color: #A53A44;  

`;



