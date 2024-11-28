import styled from "styled-components";

export const TimelineCardContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  max-width: 600px;
  margin: auto;
`;

export const Title = styled.h2`
  text-align: left;
  font-size: 1.5rem;
  color: #333;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
`;

export const YearDisplay = styled.div`
  flex: 1;
  text-align: center;

  .year {
    font-size: 2rem;
    font-weight: bold;
    color: #4caf50;
  }
`;

export const TextBox = styled.div`
  flex: 2;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px 20px;
  margin: 0 20px;
`;

export const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #45a049;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const Navigation = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .timeline {
    display: flex;
    justify-content: space-around;
    width: 100%;

    .timeline-item {
      width: 30px;
      height: 30px;
      background-color: #ccc;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      &.active {
        background-color: #4caf50;
        color: white;
      }
    }
  }
`;
