import styled from "styled-components";

export const TimelineCardContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5); /* Ajuste aqui */
  max-width: 1000px;
  margin: 1vw;
  margin-inline: 8px;

  @media (max-width: 2000px) {
    width: 90%;
  }

  @media (max-width: 800px) {
    margin-inline: 30px;
    width: 100%;
  }
`;

export const Title = styled.h2`
  text-align: left;
  font-weight: bold;
  font-size: 3rem;
  min-width: 300px;
  justify-content: space-between;
  color: #333;
  margin: 0.5rem;
  font-family: "Impact", sans-serif;
`;

export const Text = styled.p`
  color: #333;
  margin: 0;
  padding: 0;
  padding-top: 15px;
  font-size: 1.1rem;
  font-family: "Myriad Pro", sans-serif;
`;

export const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: 1rem;
  margin-inline: 30px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const TimelineLine = styled.hr`
  position: absolute;
  margin-top: -30px;
  width: calc(100% - 62px); /* Reduzindo a largura para compensar as margens */
  height: 3px;
  background-color: #333333;
  border: none;
  z-index: 0;
  left: 30px; /* Movendo para a direita para alinhar com a timeline */
`;

export const YearDisplay = styled.div`
  display: flex;
  flex: 1;
  margin-top: 0;
  align-items: center;
  justify-content: space-between;
  background-color: #2b674b;
  text-align: center;
  border-radius: 15px;
  padding: 5px;
  padding-left: 20px;
  gap: 10px;
  width: 100%;
  transition: all 0.3s ease-out;

  .year {
    writing-mode: vertical-lr;
    transform: rotate(180deg);
    font-size: 3.8rem;
    font-family: "Impact", sans-serif;
    color: #fff;
  }
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: fit-content;
  height: 200px;  
  overflow: hidden;
  padding-inline: 30px;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: #fff;
  border-radius: 0 15px 15px 0;
  align-items: center;
`;

export const TextBox = styled.div`
  flex: 1;
  font-size: 1.1rem;
  width: 100%;
  text-align: justify;
  border: none;
  padding-inline: 50px;
  margin: 0 1px;
  align-items: center;
  justify-content: center;
  color: #333;
  font-family: 'Myriad Pro', sans-serif;
`;

export const Button = styled.button`
  background-color: transparent;
  color: #cfcfcf;
  border: none;
  border-radius: 20%;
  width: 32px;
  height: 32px;
  font-size: 1.2rem;
  padding: 10px;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
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
  height: 80px;
  z-index: 1;
  margin-top: 20px;
  border-radius: 0 0 20px 20px;
  background-color: #cccccc;
`;

export const Navigation = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  margin-top: 0;
  padding-top: 20px;
  z-index: 4;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .timeline {
    display: flex;
    height: 70px;
    flex-direction: row;
    margin-inline: 30px;
    justify-content: space-between;
    width: 100%;

    .timeline-item {
      width: 30px;
      height: 30px;
      background-color: #333333;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      gap: 100px;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s ease-out;
      margin-bottom: 20px;
      z-index: 2;

      .timeline-item-year {
        margin-top: 60px;
      }

      &.active {
        width: 35px;
        height: 35px;
        background-color: #a53a44;
        color: #a53a44;
      }
    }
  }
`;
