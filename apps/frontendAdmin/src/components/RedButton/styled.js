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
  border-radius: 4px;
  transition: 200ms;
  background-color: #910000;
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
    background-color: #780000;

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