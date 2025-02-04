import styled from 'styled-components';
import inicial1 from "../../../assets/inicial1.jpg"

export const Container = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  img{
    width: 100%;
    object-fit: cover;
  }
`;

export const Space = styled.div`
height: 1000px;
`;

export const Section1 = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  background-image: url(${inicial1});
  object-fit: cover;

`;