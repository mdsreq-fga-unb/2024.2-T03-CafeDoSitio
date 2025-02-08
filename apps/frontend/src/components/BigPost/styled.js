import styled from "styled-components";

export const Content = styled.div`
  background-color: #f9f7f8;
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: #111;
  font-family: 'Myriad Pro', sans-serif;
  font-size: 2rem;

`;

export const Description = styled.span`
  color: #555;
  font-family: 'Myriad Pro', sans-serif;
  font-size: 15rem;
`

export const Button = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #006343;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004c2e;
  }
`;

export const Image = styled.img`
  width: 40vw;
  margin-block: 3px;
`
