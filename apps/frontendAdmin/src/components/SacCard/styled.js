import styled from "styled-components";

export const CardContainer = styled.section`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px 0;
  width: 100vw;
  max-width: 600px;
`;

export const CardHeader = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

export const CardInfo = styled.div`
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;

  p {
    margin: 5px 0;
  }
`;

export const CardMessage = styled.p`
  font-size: 1rem;
  color: #444;
  line-height: 1.5;
  margin-top: 10px;
  border-top: 1px solid #ddd;
  padding-top: 10px;
`;
