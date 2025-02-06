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
  justify-content: space-between; 
  gap: 20px;

  .posts {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 70%; 
  }

  .categorias {
    width: 20%; 
    display: flex;
    flex-direction: column; 
    align-items: flex-start; 
    padding: 15px;
    border: 2px solid #2b674b; 
    border-radius: 8px; 
    background-color: #fff; 
    font-family: "Arial", sans-serif;
    gap: 10px; 
    height: auto; 
    max-height: 500px; 
    overflow-y: auto; 
  }

  h2 {
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background-color: #2b674b; 
    padding: 10px; 
    margin: 0; 
    text-align: center;
    border-radius: 5px; 
    width: 100%; 
  }

  ul {
    list-style: none; 
    padding: 0; 
    margin: 0; 
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px; 
  }

  li {
    background-color: #fb8b22; 
    color: white; 
    padding: 8px 10px; 
    border-radius: 5px; 
    text-align: left; 
    font-size: 0.8rem;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap; 
    margin-left: 0; 
  }

  li:hover {
    background-color: #e97a1c; 
  }
`;








