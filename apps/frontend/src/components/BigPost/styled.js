import styled from "styled-components";

export const Content = styled.div`
  background-color: #f9f7f8;
  width: 100%;
  height: 350px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  left: 0;
  top: 242px;
  padding-inline: 65px;
  padding-block: 30px;

  .section1 {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 60%;
  }
  
  .info-section1 {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const Title = styled.h1`
  margin: 0;
  color: #111;
  font-family: 'Myriad Pro', sans-serif;
  font-size: 2rem;

`;

export const Description = styled.span`
  color: #555;
  font-family: 'Myriad Pro', sans-serif;
  font-size: 1rem;
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
  width: 170px;

  &:hover {
    background-color: #004c2e;
  }
`;

export const Image = styled.img`
  width: 350px; 
  height: 230px; 
  object-fit: cover;
  margin-block: 3px;
  border-radius: 3px;
`

export const Data = styled.span`
  color: #555;
  font-family: 'Myriad Pro', sans-serif;
  font-size: 0.8rem;
`;