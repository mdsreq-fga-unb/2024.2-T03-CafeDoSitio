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
    margin-bottom: 40px;
    padding-inline: 20px;
    padding-top: 10px;
    padding-bottom: 4px;
    display: flex;
    justify-content: left;
    align-items: center;
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
      width: 70%;
      justify-content: end;
      bottom: 10px;

      h2 {
        font-size: 4vw !important;
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
    display: flex;
    flex-direction: column; 
    align-items: start;
    border: 2px solid #2b674b; 
    border-radius: 8px;
    background-color: #fff; 
    font-family: "Arial", sans-serif;
    gap: 10px;
    width: 20%;
    height: 100%;
  }

  h2 {
    font-size: 1rem;
    font-weight: bold;
    color: #fff;
    background-color: #2b674b; 
    padding: 10px; 
    margin: 0; 
    text-align: center;
    width: 100%;
    font-family: 'impact', sans-serif;
    font-size: 1.5rem;
  }

  ul {
    list-style: none; 
    display: flex;
    flex-direction: column;
    align-items: start;
    padding-block: 0;
    padding-inline: 20px;
    gap: 10px; 
  }

  li {
    color: white; 
    padding: 8px 10px; 
    border-radius: 5px; 
    text-align: left; 
    font-size: 0.8rem;
    cursor: pointer;
    display: inline-block;
    white-space: nowrap; 
    font-family: 'Myriad Pro', sans-serif;
    font-weight: bold;
  }

  li:hover {
    background-color: #e97a1c; 
  }

  .infoSize {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-block: 10px;
    padding-inline: 10px;
    background-color:#e97a1c;
    gap: 20px;

    .icon{
      font-size: 20px;
      color: white;
    }

    span{
      font-family: 'Myriad Pro', sans-serif;
      font-size: 1rem;
      color: white;
      font-weight: bold;
    }
  }

  @media (max-width: 900px) {
    .categorias {
      display: none;
    }

    .posts {
      width: 100%;
    }
  }
`;

export const ControlePaginacao = styled.div`
  display: flex;
  justify-content: start;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
  align-items: center;
  font-family: 'Myriad Pro', sans-serif;
  color: #333;

  button {
    padding: 8px 12px;
    font-size: 16px;
    color: white;
    background-color: #006343;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: 'Myriad Pro', sans-serif;
    font-weight: bold;

    &:hover {
      background-color: #004c2e;
    }
  }

  button + button {
    margin-left: 10px;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  button:disabled:hover {
    background-color: #ccc;
  }

  @media (max-width: 450px) {
    justify-content: center;
  }

  @media (max-width: 350px) {
    button {
      padding: 6px 10px;
      font-size: 14px;
    }
  }

  @media (max-width: 300px) {
    button {
      padding: 4px 8px;
      font-size: 12px;
    }
  }

  @media (max-width: 250px) {
    button {
      padding: 2px 6px;
      font-size: 10px;
    }
  }
`;

export const Select = styled.select`
  padding: 8px 12px;
  width: 100%;
  font-size: 16px;
  color: white;
  background-color: #F39729;
  font-family: 'Myriad Pro', sans-serif;
  font-weight: bold;
  margin-bottom: 20px;
  border: none;
  cursor: pointer;

  @media (min-width: 900px) {
    display: none;
  }

`;