import styled from "styled-components";

export const SacSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 5vh 20vh;
  gap: 3rem;
  background-color: #F39729;
  border: 2px solid #ddd;
  border-radius: 30px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }    
`;


export const Location = styled.section`
  flex: 1;
  margin: 1vw;
  
  h2 {
    font-size: 2rem;
    color: #fff;
    margin-bottom: 1rem;
    font-weight: lighter;
    font-family: 'Impact', sans-serif;
    margin-left: 1.5vw;
  }

  iframe {
    width: 100%;
    height: 300px;
    border: none;
    border-radius: 30px;
    margin: 1.5rem;
  }
  
  .caixinha{
    display: flex;
    gap: 0.5vw;
    margin-left: 1.5vw;
  }
  
  .infos{
    margin: 0;
    
  }
  
  p {
    font-size: 1rem;
    color: #fff;
    line-height: 1.5;
  }

  @media(max-width: 768px){
    display: none;
  }
`;


export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: white;
  padding: 2rem;
`;


export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 0;
  font-weight: normal;
  font-family: 'Impact', sans-serif;  
  color: #006343;
`;


export const Label = styled.label`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;


export const Input = styled.input`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #006343;
  }
`;


export const TextArea = styled.textarea`
  padding: 0.8rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  outline: none;

  &:focus {
    border-color: #006343;
  }
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

  &:hover {
    background-color: #004c2e;
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FileInput = styled(Input)`
  padding: 0.5rem;
  margin-bottom: 1rem;
`;
