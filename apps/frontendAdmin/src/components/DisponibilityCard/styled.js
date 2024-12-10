import styled from "styled-components";

export const CardDiv = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  flex-direction: row;
  border: 2px solid #006343;
  border-radius: 10px;
  align-items: center;
  padding-inline: 2vw;
  transition: 200ms;
  font-family: 'Myriad Pro', sans-serif;
  color: #555;
  gap: 3vw;
  justify-content: space-between;
  margin: 10px;
`;

export const TextArea = styled.div`
  display: flex;
  flex-direction: column;

  h3{
    margin: 0 0 8px 0;
  }

 @media (max-width: 600px) {
    font-size: 12px;

    span{
      font-size: 10px;
    }
 }
`;

export const ButtonContainer = styled.div`
  display: flex; 
  align-items: center; 
  height: 100%;
  gap: 10px;
`;

export const CardButton = styled.div`
  width: 60px;
  height: 80%;
  border: 2px solid #006343;
  border-radius: 10px;
  padding-inline: 2vw;
  transition: 200ms;
  font-family: 'Myriad Pro', sans-serif;
  color: #555;
  cursor: pointer;
  gap: 3vw;

  &:hover{
    background-color: #006343;
    color: white;

    span{
      color: white;
    }

    .icon {
      color: white;
    }
  }
`;

