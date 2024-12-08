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

  h2{
    margin: 0px 0px 5px 15px;
    padding: 0px;
    color: #555;
  }

  span{
    font-family: 'Myriad Pro', sans-serif;
    color: #555;
    font-size: 16px;
  }

  @media (max-width: 450px) {
    h2{
      font-size: 15px;
    }
  }
`;

export const ContentZone = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ManupulationDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: end;
  margin-bottom: 10px;
`;

export const InputsArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 26px;

  .input-zone{
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;