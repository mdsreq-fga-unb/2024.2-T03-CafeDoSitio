import styled from "styled-components";

export const Section1 = styled.section`
  .details {
    display: flex;
    flex-direction: row; 
    align-items: center;
    gap: 5px;
    max-width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .content {
      display: flex;
      flex-direction: column;
      gap: 2px;
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;

      h1 {
        font-size: 1.5rem;
        font-family: "Myriad Pro", sans-serif;
        color: #2b674b;
        margin-block: 20px;
        padding: 0;
      }

      .categoria {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 70px;
        height: 30px;
        background-color: #fb8b22;
        border-radius: 10px;

        p {
          font-size: 0.8rem;
          color: #fff;
          margin: 0;
          padding: 0;
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
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 170px;
  margin-top: 1px;

  &:hover {
    background-color: #004c2e;
  }
`;