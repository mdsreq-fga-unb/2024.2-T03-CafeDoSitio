import styled from "styled-components";

export const Space = styled.div`
  height: 68px;
`;

export const TituloBlog = styled.input`
  width: 100%;
  height: 80px;
  font-size: 2rem;
  color: #006343;
  font-family: 'Myriad Pro', sans-serif;
  font-weight: bold;
  border-radius: 0px;
  border: none;
  padding-inline: 20px;
  outline: none;

  &:focus {
    border: solid 1px #333;
    padding-inline: 19px;
  }
`;

export const EdicaoBlog = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;

  img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

export const SemImagem = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: #f5f5f5;
  cursor: pointer;
  transition: 200ms;

  span {
    font-family: 'Myriad Pro', sans-serif;
    font-weight: bold;
    color: #333;
    font-size: 1rem;
  }

  &:hover {
    background-color: #DA731F;
    span {
      color: white;
    }
  }
`;

export const Input = styled.input`
  display: none;
`;

export const TextoBlog = styled.textarea`
  width: 100%;
  height: 300px;
  font-size: 1rem;
  color: #333;
  font-family: 'Myriad Pro', sans-serif;
  border-radius: 0px;
  border: none;
  padding-inline: 20px;
  outline: none;

  &:focus {
    border: solid 1px #333;
    padding-inline: 19px;
  }
`;
