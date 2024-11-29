
import styled from "styled-components";

export const DivFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  width: 100vw;
  background: #006343;
  margin-top: 50px;

  .copyrights-section{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-inline: 4vw;
    align-items: center;

    p {
      color: white;
      font-size: 0.8rem;
    }

    img {
      width: 12.0rem;
      height: max-content;
    }

    @media (max-width: 850px) {
      p {
        font-size: 0.5rem;
      }

      img {
        width: 8rem;
      }
    }
  }
`;

export const DivInfoSection = styled.div`
  margin-inline: 4vw;
  display: flex;
  flex-direction: row;
  gap: 100px;
  justify-content: center;
  border-bottom: 2px solid white;
  padding-inline: 100px;
  align-items: start;
  padding-bottom: 32px;

  .list {
    margin-top: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    gap: 4px;
    list-style: none;

    a {
      font-size: 12px;
      text-decoration: none;
      color: white;

      &:hover{
        text-decoration: underline;
      }
    }
  }

  .title {
    font-weight: bold;
    color: white;
    margin-bottom: 12px;
    font-size: 14px;
  }

  .info3 {
    display: flex;
    flex-direction: column;
    gap: 12px;

    .info {
      color: white;
      font-size: 14px;
      margin-bottom: 10px;
    }

    .extra {
      color: white;
      font-size: 14px;
    }
  }
`;

export const LogoImg = styled.img`
  width: 200px;
  height: 200px;
  margin-top: -30px;
`;

export const CallArea = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;

  .number{
    font-size: 24px;
    color: white;
    font-weight: bold;
  }
`;
