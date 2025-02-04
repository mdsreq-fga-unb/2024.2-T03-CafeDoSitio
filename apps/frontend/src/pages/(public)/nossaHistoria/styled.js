import styled from "styled-components";

export const Title = styled.h1`
  text-align: left;
  font-size: 1.7rem;
  justify-content: space-between;
  color: #2B674B;
  margin: 2;
`;

export const Text = styled.div`
  align-items: left;
  text-align: left;
  font-size: 1.3rem;


`;

export const TimelineSection = styled.div`

`;

export const FirstTextSection = styled.div`

`;

export const DivContainer = styled.div`
  //padding: 20px;
  max-width: 80%;
  margin: 4rem;
`;

export const Container = styled.div`
  //padding: 20px;
  max-width: 600px;
  margin: 4rem;
  
  .img {
    align-items: left;
    width: auto; 

    @media(max-width: 800px){
      width: 70vw;
    }
  }
`;

export const SecondTextSection = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 3rem;
    justify-content: center; 


    @media(max-width: 1327px){
      flex-direction: column;
    }
`;

export const ThirdTextSection = styled.div`
  align-items: center;
  justify-content: center;
  padding: 3vw;
`;

export const DiferencialSection = styled.div`
    display: flex;
    flex-direction: row;
    background-color: red;
    border-radius: 20px;
    //box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    margin: auto;
    justify-content: center;

    @media(max-width: 1320px){
      flex-direction: column;
      width: 100%;
      align-items: center;
    }
`;


export const DiferencialCard = styled.div`
  display: flex;
  margin: 2rem;
  align-items: center;
  max-width: 400px;
`;

export const DiferencialText = styled.div`
  align-items: left;
  text-align: left;
  font-size: 1.1rem;
`;

export const BackgroundLine = styled.div`
    z-index: 1;    
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F29947;  
    //padding: 20px;
    width: 100%;

    @media(max-width: 970px){
      display: none;
    }
`;

export const RedLine = styled.div`
  display : flex;
  width: 5px;
  border-radius: 1px;
  background-color: #A53A44;  

`;



