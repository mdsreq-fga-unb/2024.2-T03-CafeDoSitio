import styled from "styled-components";

export const Space = styled.div`
  height: 40px;
`;

export const Space2 = styled.div`
  height: 300px;
`;

export const Space3 = styled.div`
  height: 260px;
`;


export const ImageContainer = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 250px;
  overflow: hidden; /* Garante que a imagem e o efeito não ultrapassem o contêiner */

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position:  0% 90%; /* Foca na parte inferior da imagem */
  }
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    color: #006343;
    font-family: 'Impact', 'Myriad Pro', sans-serif;
    font-size: 2.5rem;
  }

  .DateInfo {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;

    img {
      width: 70px;
    }
  }

  .attetionDiv {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;

    img {
      width: 70px;
    }
  }
`;

export const Informacoes = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;

  .redLine {
    width: 40px;
    background-color: #A93439;
  }

  p {
    font-size: 1.1rem;
    font-family: 'Myriad Pro', sans-serif;
  }

  h1 {
    color: #006343;
    font-family: 'Impact', 'Myriad Pro', sans-serif;
    font-size: 2.5rem;
  }
`;

export const QuebraMobile = styled.div`
  display: flex;
  flex-direction: row;

  .images {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-left: 100px;

    img {
      width: 200px;
      border-radius: 10px;
    }
  }

  ul {
    font-size: 1.1rem;
    
    li {
      margin-block: 10px;
    }
  }

  @media (max-width: 700px) {
    flex-direction: column;

    .images {
      margin-left: 0;
      flex-direction: row;
      justify-content: center;
      column-gap: 1rem;
      row-gap: 2.8rem;
      margin-inline: 0;
      flex-wrap: wrap;
      align-items: center;
    }
  }
`;

export const FlexImagesContainer = styled.div`
  margin-top: 50px;
  position: absolute;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  background-color: #DA731F;
  left: 0;
  width: 100%;
  padding-block: 30px;
  gap: 10vw;

  @media (max-width: 800px){
    justify-content: left;
    padding-inline: 20px;
  }
  
  img {
    height: 200px;
    width: 300px;
    border-radius: 10px;
    object-fit: cover;
  }
`;
export const Agendamento = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 50px;

  @media (max-width: 800px) {
      flex-direction: column;
  }

  h1 {
    font-family: 'Myriad Pro', sans-serif;
    color: white;
    font-size: 1.8rem;
  }

  h3 {
    font-family: 'Myriad Pro', sans-serif;
    color: #DA731F;
    font-size: 1rem;
  }

  .Form {
    width: 100%;
    align-items: center;
    justify-content: center;
    background: #006343;
    padding-inline: 40px;
    padding-block: 30px;
    border-radius: 10px;

    .submit {
      padding-block: 10px;
      padding-inline: 20px;
      font-family: 'Myriad Pro', sans-serif;
      font-weight: bold;
      color: white;
      border: none;
      background-color: #DA731F;
      transition: 100ms;
      cursor: pointer;

      &:hover {
        background-color: #A93439;
      }
    }

    .visitas-list {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }

  .input-zone {
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding-block: 10px;

    label {
      font-family: 'Myriad Pro', sans-serif;
      color: white;
      font-size: 0.8rem;
      font-weight: bold;
    }

    textarea {
      font-family: 'Myriad Pro', sans-serif;
      height: 100px;
      resize: none;
    }

    select {
      padding: 10px;
      border: none;
      outline: none;
      background-color: white;
      font-family: 'Myriad Pro', sans-serif;
    }

    textarea, input {
      padding: 10px;
      border: none;
      outline: none;
    }
  }
`;

export const Legenda = styled.div`
  margin-bottom: 50px;
  display: flex;
  flex-direction: row;
  font-family: 'Myriad Pro', sans-serif;
  font-weight: bold;
  gap: 50px;
  
  .legenda {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
  }

  .colorlegend {
    width: 40px;
    height: 40px;
  }

  .colorlegend1 {
    background: #006343;
  }

  .colorlegend2 {
    background: #A93439;
  }

`;

export const Vazio = styled.div`
  display: flex;
  height: 80px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  gap: 2rem;
  font-family: 'Myriad Pro', sans-serif;
  margin-block: 20px;

  span {
    color: white;
    font-weight: bold;
  }

  .icon{
    color: white;
    font-size: 40px;
  }
`;