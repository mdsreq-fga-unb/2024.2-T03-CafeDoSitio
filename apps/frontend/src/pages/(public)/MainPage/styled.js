import styled from 'styled-components';
import Content1MainPage from "../../../assets/Content1MainPage.jpg";

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

export const Section1 = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  div{
    width: 50%;
  }

  .section1-right{
    height: 400px;
    background-image: url(${Content1MainPage});
  }

`;