import styled from "styled-components";

export const Space = styled.div`
  height: 68px;
`;

export const TituloBlog = styled.textarea`
  width: 100%;
  min-height: 40px; /* Altura inicial */
  max-height: 300px; /* Opcional: definir um limite */
  overflow-y: hidden; /* Evita scroll interno */
  resize: none; /* Impede redimensionamento manual */
  font-size: 2rem;
  color: #006343;
  font-family: 'Myriad Pro', sans-serif;
  font-weight: bold;
  border-radius: 0px;
  border: none;
  padding-inline: 20px;
  outline: none;
  word-wrap: break-word;
  white-space: normal;
  overflow-wrap: break-word;
  display: block;
  align-items: center;
  justify-content: center;
  resize: none;

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
  margin-bottom: 50px;

  img {
    width: 100%;
    height: auto; /* Mantém a proporção */
    aspect-ratio: 3 / 1; /* Define a proporção 3:1 */
    object-fit: cover; /* Evita distorções */
  }

  .EditorText .ql-editor {
    font-family: 'Myriad Pro', sans-serif !important;
    font-size: 1rem;
    color: #333 !important;
  }

  .infoSize {
    display: flex;
    flex-direction: row;
    width: 100%;
    align-items: center;
    justify-content: center;
    padding-block: 10px;
    padding-inline: 10px;
    background-color:rgb(202, 201, 201);
    gap: 20px;

    .icon{
      font-size: 20px;
      color: #333;
    }

    span{
      font-family: 'Myriad Pro', sans-serif;
      font-size: 1rem;
      color: #333;
    }
  }

  .infoUrl {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 40px;
    align-items: center;
    justify-content: center;
    padding-block: 10px;
    padding-inline: 10px;
    background-color:rgb(202, 201, 201);
    gap: 20px;

    .icon{
      font-size: 20px;
      color: #333;
    }

    span{
      font-family: 'Myriad Pro', sans-serif;
      font-size: 1rem;
      color: #333;
    }
  }

  select {
    width: 100%;
    height: 40px;
    margin-bottom: 20px;
    font-family: 'Myriad Pro', sans-serif;
    font-size: 1rem;
    color: #333;
    border-radius: 0px;
    border: none;
    padding-inline: 20px;
    outline: none;
    word-wrap: break-word;
    white-space: normal;
    overflow-wrap: break-word;
    display: block;
    align-items: center;
    justify-content: center;
    resize: none;
    background-color: #f5f5f5;
    border: 1px solid #006343;
  }

  .metaDescription {
    width: 100%;
    min-height: 200px; /* Altura inicial */
    max-height: 400px; /* Opcional: definir um limite */
    overflow-y: hidden; /* Evita scroll interno */
    font-size: 1rem;
    color: #333;
    background-color: #f5f5f5;
    font-family: 'Myriad Pro', sans-serif;
    border: 1px solid #006343;
    padding-inline: 20px;
    outline: none;
    word-wrap: break-word;
    white-space: normal;
    overflow-wrap: break-word;
    display: block;
    align-items: center;
    justify-content: center;
    resize: none;
  }
  
  .urlInput {
    width: 100%;
    height: 40px;
    font-family: 'Myriad Pro', sans-serif;
    font-size: 1rem;
    color: #333;
    border-radius: 0px;
    border: none;
    padding-inline: 20px;
    outline: none;
    word-wrap: break-word;
    white-space: normal;
    overflow-wrap: break-word;
    display: block;
    align-items: center;
    justify-content: center;
    resize: none;
    background-color: #f5f5f5;
    border: 1px solid #006343;
  }

  .tagsContainer {
    display: flex;
    flex-wrap: wrap;
    margin-top: 10px;
  }

  .tag {
    background-color: #f0f0f0;
    padding: 5px 10px;
    border-radius: 20px;
    margin: 5px;
    display: flex;
    align-items: center;
    gap: 5px;
  }

  .removeIcon {
    cursor: pointer;
    color: red;
  }

  .urlResult {
    width: 100%;
    height: 40px;
    font-family: 'Myriad Pro', sans-serif;
    font-size: 1rem;
    color: white;
    font-weight: bold;
    border-radius: 0px;
    border: none;
    padding-inline: 20px;
    outline: none;
    word-wrap: break-word;
    white-space: normal;
    overflow-wrap: break-word;
    display: block;
    align-items: center;
    justify-content: center;
    resize: none;
    background-color: #DA731F;
  }

  @media (max-width: 800px) {
    img {
      height: auto;
      max-height: 40vw; /* Ajuste para telas menores */
    }
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const SemImagem = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  aspect-ratio: 3 / 1; /* Mantém o formato 3:1 */
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

  @media (max-width: 800px) {
    max-height: 40vw;
  }
`;

export const Input = styled.input`
  display: none;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 40px;
`;
