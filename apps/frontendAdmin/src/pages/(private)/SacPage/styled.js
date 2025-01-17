import styled from "styled-components";

export const Space = styled.div`
  height: 68px;
`;

export const Section = styled.section`
  max-width: 800px;
  margin: 0 auto;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Select = styled.select`
  width: 100%;
  max-width: 300px;
  padding: 10px;
  margin: 20px 0;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;  
`;

export const SacsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    color: #666;
    font-size: 16px;
    margin-top: 20px;
  }
`;

export const ErrorMessageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 20px;
    margin: 10px 0;
    width: 100vw;
    max-width: 600px;
`;
