import styled from "styled-components";

export const ButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3px;
  font-family: 'Myriad Pro', sans-serif;
  padding-inline: 16px;
  padding-block: 8px;
  border: 2px solid #006343;
  border-radius: 10px;
  transition: 200ms;
  cursor: pointer;

  input{
    background: transparent;
    border: none;
    font-size: 16px;
    font-weight: bold;
    color: #006343;
    transition: 200ms;
    cursor: pointer;
  }

  .icon{
    font-size: 15px;
    color: #006343;
    transition: 200ms;
  }

  &:hover{
    background-color: #006343;

    input, .icon{
      color: white;
    }
  }

  @media (max-width: 450px) {
    input, .icon{
      font-size: 12px;
    }
  }
`;