import styled from "styled-components";

export const CardDiv = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: row;
  border: 2px solid #006343;
  border-radius: 10px;
  align-items: center;
  padding-inline: 2vw;
  transition: 200ms;
  font-family: 'Myriad Pro', sans-serif;
  color: #555;
  cursor: pointer;
  gap: 3vw;

  .icon{
    font-size: 40px;
    color: #006343;
    transition: 200ms;
  }

  &:hover{
    background-color: #006343;
    color: white;

    .icon {
      color: white;
    }
  }

  @media (max-width: 400px) {
    .icon{
      display: none;
    }
 }
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