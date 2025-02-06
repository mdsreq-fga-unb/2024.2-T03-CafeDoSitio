import styled from 'styled-components';
import inicial1 from "../../../assets/inicial1.jpg"

export const Container = styled.div`
  z-index: -1;
  flex: 1;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;

  img{
    width: 100%;
    object-fit: cover;
  }
`;



export const Space = styled.div`
height: 1000px;
`;

export const Section1 = styled.section`
  background-image: url(${inicial1});
  display: flex;
  justify-content: flex-start;
  padding: 40px;
  padding-left: 0;
`;

export const Card = styled.div`
  
  color: #333;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
  width: 40vw;
  height: 100%;
  background-color: white;
  object-fit: cover;
  border-radius: 0 20px 20px 0;

  h1 {
    font-size: 4rem;
    font-family: impact;
    margin-bottom: 20px;
    color: #2B674B ;
  }

  p {
    font-size: 1.2rem;
    color: #000;
    font-weight: 600;

  }
`;