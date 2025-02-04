import styled from "styled-components";

export const ButtonDiv = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3px;
  font-family: 'Myriad Pro', sans-serif;
  padding-inline: 16px;
  padding-block: 8px;
  border-radius: 4px;
  transition: 200ms;
  background-color: #006343;
  cursor: pointer;

  input{
    background: transparent;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    transition: 200ms;
    cursor: pointer;
  }

  .icon{
    font-size: 15px;
    color: white;
    transition: 200ms;
  }

  &:hover{
    background-color: #004c2e;

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