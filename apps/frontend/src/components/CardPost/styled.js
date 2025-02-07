import styled from "styled-components";

export const Section1 = styled.section`
  .details {
    display: flex;
    flex-direction: row; 
    align-items: start;
    justify-content: start;
    gap: 5px;
    max-width: 100%;

    img {
      width: 60%;
      height: 250px;
      object-fit: cover;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 2px;
      width: 100%;
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;

      label {
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5; /* Número máximo de linhas */
        overflow: hidden;
      }

      p {
        margin-bottom: 0;
        color: #333;
        font-size: 1rem;
      }

      h1 {
        font-size: 1rem;
        font-family: "Myriad Pro", sans-serif;
        font-weight: 100;
        text-align: start;
        padding: 0;
        padding: 0;
        margin: 0;
        color: #333;
        background: none;
      }

      h2 {
        font-size: 1rem;
        font-family: "Myriad Pro", sans-serif;
        font-weight: 100;
        text-align: start;
        padding: 0;
        margin: 0;
        color: #333;
        background: none;
      }

      h3 {
        font-size: 1rem;
        font-family: "Myriad Pro", sans-serif;
        font-weight: 100;
        text-align: start;
        padding: 0;
        margin: 0;
        color: #333;
        background: none;
      }

      h4 {
        font-size: 1rem;
        font-family: "Myriad Pro", sans-serif;
        font-weight: 100;
        text-align: start;
        padding: 0;
        margin: 0;
        color: #333;
        background: none;
      }

      .titulo {
        font-size: 1.5rem;
        font-family: "Myriad Pro", sans-serif;
        font-weight: bold;
        color: #2b674b;
        margin-bottom: 20px;
        margin-top: 0;
        padding: 0;
      }

      .categoria {
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #DA731F;
        border-radius: 8px;
        padding-block: 6px;
        padding-inline: 10px;
        width: fit-content;

        .tag {
          font-size: 0.8rem;
          color: #fff;
          margin: 0;
          padding: 0;
          font-family: 'Myriad Pro', sans-serif;
          font-weight: bold;
          text-transform: capitalize;
        }
      }
    }

    @media (max-width: 650px) {
      flex-direction: column;
      gap: 10px;

      img {
        width: 100%;
        height: auto; /* Mantém a proporção */
        aspect-ratio: 3 / 1; /* Define a proporção 3:1 */
        object-fit: cover; /* Evita distorções */
      }

      .content {
        padding: 10px;
        gap: 5px;
        width: 100%;

        .titulo {
          font-size: 1.7rem;
          margin-block: 10px;
        }
      }
    }
  }

  .linha-botao {
    height: 2px;
    width: 100%; 
    max-width: 70%; 
    background-color: #2b674b;
    margin-block: 20px;
    box-sizing: border-box;
  }
`;

export const StyledButton = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #006343;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 120px;
  margin-top: 20px;
  font-family: 'Myriad Pro', sans-serif;
  font-weight: bold;

  &:hover {
    background-color: #004c2e;
  }
`;