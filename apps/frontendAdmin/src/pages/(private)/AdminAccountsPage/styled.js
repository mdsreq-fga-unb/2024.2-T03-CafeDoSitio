import styled from "styled-components";

export const Space = styled.div`
  height: 68px;
`;

export const InfoZone = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  
  h1{
    margin: 0px 0px 5px 0px;
    padding: 0px;
    color: #555;
  }

  h2{
    margin: 0px 0px 5px 15px;
    padding: 0px;
    color: #555;
  }

  span{
    font-family: 'Myriad Pro', sans-serif;
    color: #555;
    font-size: 16px;
  }

  .visitas-list {
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }

  @media (max-width: 450px) {
    h2{
      font-size: 15px;
    }
  }
`;

export const ContentZone = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FilterZone = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-bottom: 30px;

  .ButtonsZone{
    display: flex;
    flex-direction: row;
    gap: 10px;
  }

  @media (max-width: 630px) {
    flex-direction: column;
  }
`;

export const BarraPesquisa = styled.div`
  width: 100%;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  border: 2px solid #006343;
  border-radius: 4px;
  transition: 200ms;
  
  input {
    width: 100%;
    background-color: transparent;
    border: none;
    font-family: 'Myriad Pro', sans-serif;

    &:focus-visible {
      outline: none;
    }
  }

  .search-icon {
    cursor: pointer;
  }
`;

export const Dropdown = styled.select`
  width: 100%;
  min-width: 180px;
  padding: 8px 12px;
  border: 2px solid #006343;
  border-radius: 4px;
  background-color: transparent;
  font-family: 'Myriad Pro', sans-serif;
`;

export const InputsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 26px;

  .input-zone{
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

export const InputText = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 2px solid #006343;
  border-radius: 4px;
  background-color: transparent;
  font-family: 'Myriad Pro', sans-serif;
`;

export const EmailList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const EmailCard = styled.div`
  width: 100%;
  padding: 20px 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding-inline-start: 30px;
  transition: 200ms;
  font-family: 'Myriad Pro', sans-serif;
  color: #555;
  gap: 30px;
  justify-content: space-between;
  transition: transform 200ms, box-shadow 200ms;

  &:hover {
    transform: scale(1.02); /* Aumenta ligeiramente o tamanho */
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2); /* Torna a sombra mais intensa */
  }

  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    
    .name {
      font-size: 20px;
      font-weight: bold;
    }

    .email {
      font-size: 15px;
    }
  }
`;

export const IconsZone = styled.div`
  display: flex;
  flex-direction: row;

  .icon {
    font-size: 20px;
    color: #A93439;
    cursor: pointer;
  }
`;

export const Vazio = styled.div`
  display: flex;
  height: 178px;
  flex-direction: row;
  align-items: center;
  width: 100%;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  gap: 2rem;

  .icon{
    color: #DA731F;
    font-size: 40px;
  }
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

export const ButtonArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 10px;
`;