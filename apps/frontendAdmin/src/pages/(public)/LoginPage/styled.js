import styled from "styled-components";

export const ConteudoGeral = styled.div`
  height: 100vh; 
  width: 100vw;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #006343;
`;

export const LoginCard = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 90%;
  max-width: 400px; /* Limita o tamanho máximo */
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
`;

export const ParteSuperior = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;

  img{
    width: 150px;
    height: auto;
  }

  h1 {
    margin: -30px 0 0 0;
    font-family: 'Myriad Pro', sans-serif;
    font-size: 1.5rem;
    color: #333;
    text-align: center;
  }

  span {
    font-family: 'Myriad Pro', sans-serif;
  }
`;

export const Input = styled.input`
  width: 93%;
  padding: 0.8rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: green;
    box-shadow: 0 0 5px green;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 5px;
  background-color: #006343;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: 'Myriad Pro', sans-serif;
  font-weight: bold;

  &:hover {
    background-color: darkgreen;
  }
`;

// export const Warning = styled.div`
//     height: 20px;
//     width: auto;
//     font-size: 12px;
//     text-align: center;
//     color: red;
//     font-family: 'Myriad Pro', sans-serif;

//     span{
//       margin: 0px;
//     }
// `;

// export const Espaco = styled.div`
//     height: 20px;
// `;