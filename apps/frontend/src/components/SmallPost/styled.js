import styled from "styled-components";

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem;
  padding: 0%;
  width: 500px;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 15px;

  .section2{
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 200px; 
  object-fit: cover;
  margin-block: 3px;
  border-radius: 3px;
`

export const Title = styled.h1`
  margin: 0;
  color: #111;
  font-family: 'Myriad Pro', sans-serif;
  font-size: 1.3rem;
  margin-block: 3px;

`;

export const Description = styled.span`
  color: #555;
  font-family: 'Myriad Pro', sans-serif;
  font-size: 0.8rem;
  margin-block: 3px;
`;

export const Button = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #006343;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  width: 170px;
 

  &:hover {
    background-color: #004c2e;
  }
`;