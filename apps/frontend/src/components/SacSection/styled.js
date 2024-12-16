import styled from "styled-components";

export const SacSection = styled.section`
  display: flex;
  flex-direction: column;
  margin: 10vh 8vh;
  width: auto;
  gap: 3rem;
  background-color: #F39729;
  border: 2px solid #ddd;
  border-radius: 30px;
  box-shadow: 4px 6px 8px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }    
`;


export const Location = styled.section`
  flex: 1;
  margin: 1vw;
  
  h2 {
    font-size: 2.5rem;
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
  border-top-right-radius: 28px;
  border-bottom-right-radius: 28px;


  h5 {
    font-weight: 300;
    font-size: 1rem;
  }

  @media(max-width: 768px){
    border-radius: 28px;
  }

`;


export const Title = styled.h1`
  font-size: 2.5rem;
  margin: 0;
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


export const FileInput = styled.div`
  position: relative;
  width: fit-content;
`;

export const FileEscondido = styled.input`
  opacity: 0;
  position: absolute;
  z-index: -1;
`;

export const FileInputLabel = styled.label`
  display: inline-block;
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  color: white;
  background-color: #006343;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-align: center;

  &:hover {
    background-color: #004c2e;
  }
`;

export const FileName = styled.span`
  display: block;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  color: #555;
`;