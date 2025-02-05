import styled from "styled-components";

export const Title = styled.h4`
  text-align: left;
  justify-content: space-between;
  color: #FFF;
  margin-top: 1vh;
  margin-bottom: 1vh;
`;

export const Text = styled.div`
  align-items: left;
  text-align: justify;
  font-size: 1rem;
  font-weigth: none;
  color: #FFF;
  margin-bottom: 1vh;
`;

export const Container = styled.div` 
 
`;
export const CardSection = styled.div`
  display: flex;
  margin-left: 2vw;
  margin-right: 2vw;

`;
export const Background = styled.div`
  background-color:  #458260;
  max-height: 20vh;
  margin-left: 3vh;
  margin-right: 3vh;
  
  @media(max-width: 1125px){
    margin-bottom: 3vh;
  }
`;

export const IconWrapper = styled.div`
  // display: flex;  
  // margin: 2vh;
  // max-width: 48vw;
  display: flex;
  align-items: center; /* Alinha o conteúdo ao topo */
  //justify-content: center; /* Mantém centralizado horizontalmente */
  //max-width: 7vw;
  margin-right: 1vw; /* Remove margem extra */
  
  svg {
    width: 100%;
    height: 100%;
    align-items: left;
    justify-content: left;
  }
`;
