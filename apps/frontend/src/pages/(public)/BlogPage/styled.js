import styled from "styled-components";

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
    height: 100%;
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .text-container {
      width: 100%;
      left: 0;
      display: flex;
      flex-direction: row;
      justify-content: end;
      left: 0;
      padding-inline: 120px;
      position: absolute;
      margin-top: -220px;

      h2 {
        font-size: 2.4rem;
        font-family: "Myriad Pro", sans-serif;
        color: #fff;
        text-align: right;
        max-width: 560px;
        position: absolute;
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
      h2 {
        font-size: 1.5rem;
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
    padding: 8px;

    h1 {
      font-size: 2.5rem;
      font-family: "Impact", sans-serif;
      color: #fff;
      margin: 0px;

      
      
    }
  }
`;
