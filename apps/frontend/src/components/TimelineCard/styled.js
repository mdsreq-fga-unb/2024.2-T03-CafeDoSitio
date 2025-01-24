import styled from "styled-components";

export const TimelineCardContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5); /* Ajuste aqui */
  width: 850px;
  margin: 1vw;
  overflow: hidden;
`;

export const Title = styled.h2`
  text-align: left;
  font-weight: bold;
  font-size: 2rem;
  justify-content: space-between;
  color: #333;
  margin: 0.5rem;  
`;

export const Text = styled.p`
  color: #A8A8A8;
  margin-left: 2rem;
  margin-bottom: auto;
  margin-top: auto;
  margin-right: auto;

`;

export const StyledDiv = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  margin-top: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;

`;

export const Content = styled.div`
  display: flex;  
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const TimelineLine = styled.hr`
  position: absolute;
  margin-top: 14px;
  width: 786px;
  height: 3px;
  background-color: #333333;
  border: none; 
  z-index: 1; 
`;


export const YearDisplay = styled.div`
  display: flex;
  flex: 1;
  margin-top: 0;
  align-items: center; 
  justify-content: space-between;
  background-color: #2B674B;
  text-align: center;
  border-radius: 15px;
  padding: 5px;
  gap: 10px; 
  width: 100%;
  transition: all 0.3s ease-out;

  .year {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    font-size: 3.8rem;
    font-family: 'Impact', sans-serif;
    color: #fff;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  background-color: #fff;
  max-width: 100%;
  max-height: 100%;
  border-radius:  0 15px 15px 0 ;
  overflow: hidden; 
`;

export const TextWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.4fr; 

`;

export const TextBox = styled.div`
  flex: 1;
  font-size: 1.2rem;
  width: 96%;
  text-align: justify;
  background-color: #fff;
  border: none;
  padding: 10px;
  margin: 0 1px;
`;

export const Button = styled.button`
  background-color: transparent;
  color: #CFCFCF;
  border: none;
  border-radius: 20%;
  width: 32px;
  height: 32px;
  font-size: 1.2rem;
  padding: 10px
  cursor: pointer;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: ;
    cursor: pointer;
  }

  &:disabled {
    background-color: transparent;
    cursor: pointer;
  }
`;

export const GrayBar = styled.div`
  display: flex;
  width: 100%;
  z-index: 1;
  margin-top: 20px;
  border-radius: 0 0 20px 20px;
  background-color: #CCCCCC; 
`;

export const Navigation = styled.div`
  margin-top: 20px;
  z-index: 4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .timeline {
    display: flex;
    margin-left: 30px;
    gap: 40px;
    
    width: 100%;

    .timeline-item {
      width: 30px;
      height: 30px;
      background-color: #333333;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all .3s ease-out;
      margin-bottom: 20px;
      z-index: 2;
  
      .timeline-item-year{
        margin-top: 50px;
      }

      &.active {
        width: 30px;
        height: 30px;
        background-color: #A53A44;
        color: #A53A44;

      }
    }
  }
`;
