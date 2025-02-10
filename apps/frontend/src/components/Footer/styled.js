import styled from "styled-components";

export const DivFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 60px;
  width: 100%;
  background: #006343;
  margin-top: 50px;

  .logo-img{
    margin-top: -20px;
    width: 180px;
    height: auto;
  }
`;

export const Conteudo = styled.div`
  padding-inline: 4.5rem;

  @media (max-width: 850px) {
    padding-inline: 2vw;
  }
`;

export const ParteSuperior = styled.div`
  display: flex;
  flex-direction: row;
  row-gap: 2.0rem;
  column-gap: 6rem;
  flex-wrap: wrap;
  padding-bottom: 2.5rem;

  justify-content: center;
  border-bottom: 1px solid white;
`;

export const Divisao1 = styled.div`
  display: flex;
  flex-direction: row;
  gap: 6rem;

  ul {
    margin: 0px;
    padding: 0px;

    .title {
      color: white;
      font-weight: bold;
      font-size: 1.0rem;
      margin-bottom: 15px;
    }
  }

  li {
    list-style: none;
    margin: 0px;

    a {
      text-decoration: none;
      color: white;
      font-size: 0.8rem;
      cursor: pointer;

      &:hover{
        text-decoration: underline;
      }
    }
  }
`;

export const Divisao2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: white;

  .title{
    color: white;
    font-weight: bold;
    font-size: 1.0rem;
    margin-bottom: 15px;
    margin: 0px;
  }

  p {
    margin: 0px;
    font-size: 0.8rem;
  }

  a {
    &:hover{
      text-decoration: underline;
      cursor: pointer;
    }
  }
`;

export const DivisaoTelefone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1.0rem;

  label {
    font-weight: bold;
    font-size: 2.0rem;
  }
`;

export const CopyRigthSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  p{
    color: white;
    font-size: 1.0rem;
  }

  img {
    width: 12.0rem;
    height: auto;
  }

  @media (max-width: 1420px) {
    p {
      font-size: 0.7rem;
    }

    img {
      width: 11.0rem;
      height: auto;
    }
  }

  @media (max-width: 850px) {
    padding-inline: 2vw;

    p {
      font-size: 0.5rem;
    }

    img {
      width: 9.0rem;
      height: auto;
    }
  }
`;