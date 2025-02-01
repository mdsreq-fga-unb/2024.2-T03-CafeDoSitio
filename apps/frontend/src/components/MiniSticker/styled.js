import styled from "styled-components";

export const Title = styled.h4`
  text-align: left;
  //font-size: 1.7rem;
  justify-content: space-between;
  color: #FFF;
  margin-top:0;
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
  max-height: 20vh
  margin-left: 3vh;
  margin-right: 3vh;
`;

export const IconWrapper = styled.div`
  margin: 2vh;
  max-width: 70px;
  align-items: center;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
  }
`;
