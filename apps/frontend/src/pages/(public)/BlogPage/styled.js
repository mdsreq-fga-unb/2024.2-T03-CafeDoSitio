import styled from "styled-components";

// Espaçamento genérico
export const Space = styled.div`
  height: 68px;
`;

export const Section1 = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;

  h1 {
    font-size: 2.5rem;
    font-family: "Impact", sans-serif;
    color: #2b674b;
    margin-block: 0px;
  }

  p {
    font-size: 1.1rem;
    font-family: "Myriad Pro", sans-serif;
    color: #333;
  }

  .image-container {
    position: relative;
    height: 100%;
    width: 100%;

    img {
      max-width: 100%;
      height: auto;
      object-fit: cover;
    }

    .text-container {
      position: absolute;
      bottom: 20px;
      right: 20px;
      max-width: 560px;
      text-align: right;

      h2 {
        font-size: 2.4rem;
        font-family: "Myriad Pro", sans-serif;
        color: #fff;
        margin: 0;
      }
    }
  }

  .linha {
    height: 2px;
    width: 100%;
    background-color: #2b674b;
    margin-block: 40px;
  }

  @media (max-width: 900px) {
    .text-container {
      max-width: 80%;
      right: 10px;
      bottom: 10px;

      h2 {
        font-size: 1.5rem;
        text-align: center;
      }
    }
  }
`;

export const Section2 = styled.section`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .container {
    width: 100%;
    background-color: #2b674b;
    margin-block: 40px;
    padding: 9px;
    display: flex;
    justify-content: left;
    align-items: center;
    height: 50px;
    border-radius: 10px;

    h1 {
      font-size: 2rem;
      font-family: "Impact", sans-serif;
      color: #fff;
      margin: 0;
      padding: 0;
    }
  }

`;