import styled from "styled-components";

export const Space = styled.div`
  height: 68px;
`;

export const InfoZone = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  
  h1{
    margin: 0px 0px 5px 0px;
    padding: 0px;
    color: #555;
  }

  span{
    font-family: 'Myriad Pro', sans-serif;
    color: #555;
    font-size: 16px;
  }
`;

export const ConfigsZone = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const OptionGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  h2{
    color: #555;
    margin: 0 0 30px 0;
  }
`;

