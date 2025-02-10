import styled from "styled-components";

export const Space = styled.div`
  height: 68px;
`;

export const InfoZone = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 50px;
  gap: 50px;
  align-items: center;

  .parte-perfil{
    display: flex;
    flex-direction: column;
    gap: 0px;
  }

  .tag {
    background-color: #F39729;
    width: fit-content;
    padding: 10px;
    border-radius: 50px;

    span{
      font-family: 'Myriad Pro', sans-serif;
      font-weight: bold;
      color: #fff;
      font-size: 14px;
    }
  }
  
  h1{
    padding: 0px;
    color: #555;
    margin-bottom: -10px;
  }

  span{
    font-family: 'Myriad Pro', sans-serif;
    color: #555;
    font-size: 16px;
    padding: 0;
  }

  .icon{
    font-size: 150px;
    color: #006343;
  }

  @media (max-width: 450px) {
    h2{
      font-size: 15px;
    }
  }
`;

export const Conteudo = styled.div`
  display: flex;
  flex-direction: column;

  h1{
    color: #555;
    font-family: 'Myriad Pro', sans-serif;
  }

  .infos {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-block: 40px;
`;

export const Informacao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-family: 'Myriad Pro', sans-serif;

  label{
    font-size: 20px;
    font-weight: bold;
    color: #333;
  }

  input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    background-color: #f9f9f9;
  }
`;

export const InputZone = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #ccc;
    font-size: 16px;
    background-color: #f9f9f9;
    outline: none;

    &:focus {
      border-color: green;
      box-shadow: 0 0 5px green;
    }
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  margin-bottom: 1rem;
`;

export const EyeIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: #666;

  &:hover {
    color: #000;
  }
`;

export const Input = styled.input`
  width: 100%;
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

export const Juncao = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-bottom: 20px;
`;