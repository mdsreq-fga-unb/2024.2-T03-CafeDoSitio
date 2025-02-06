import styled from "styled-components";

export const Space = styled.div`
  height: 68px;
`;

export const InfoZone = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
  
  h1{
    margin: 0px 0px 5px 0px;
    padding: 0px;
    color: #555;
  }

  span{
    font-family: 'Myriad Pro', sans-serif;
    color: #555;
    font-size: 16px;
  }

  @media (max-width: 450px) {
    h2{
      font-size: 15px;
    }
  }
`;

export const FilterZone1 = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .status-filter{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
    width: 100%;
    align-items: center;

    label{
      font-family: 'Myriad Pro', sans-serif;
      font-size: 16px;
    }

    .clickFilter{
      cursor: pointer;
    }
  }

  .search-filter{
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
  }

  @media (max-width: 630px) {
    flex-direction: column;
    gap: 20px;
    .status-filter{
      justify-content: center;
    }
  }
`;

export const BarraPesquisa = styled.div`
  width: 100%;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  border: 2px solid #006343;
  border-radius: 4px;
  transition: 200ms;
  
  input {
    width: 100%;
    background-color: transparent;
    border: none;
    font-family: 'Myriad Pro', sans-serif;

    &:focus-visible {
      outline: none;
    }
  }

  .search-icon {
    cursor: pointer;
  }
`;

export const Content = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  table {
    width: 100%;
    border-collapse: collapse;

    th {
      background-color: #006343;
      color: white;
      font-family: 'Myriad Pro', sans-serif;
      font-size: 16px;
      padding: 10px;
      text-align: left;
    }

    td {
      background-color: #f9f9f9;
      font-family: 'Myriad Pro', sans-serif;
      font-size: 16px;
      padding: 10px;
      border-bottom: 1px solid #ddd;
    }

    tr:hover {
      background-color: #f1f1f1;
    }

    .title{
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;

export const ButtonSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 10px;
`;

export const ControlePaginacao = styled.div`
  display: flex;
  justify-content: end;
  width: 100%;
  margin-top: 20px;
  align-items: center;
  font-family: 'Myriad Pro', sans-serif;
  color: #333;

  button {
    padding: 8px 12px;
    font-size: 16px;
    color: white;
    background-color: #006343;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    font-family: 'Myriad Pro', sans-serif;
    font-weight: bold;

    &:hover {
      background-color: #004c2e;
    }
  }

  button + button {
    margin-left: 10px;
  }

  button:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }

  button:disabled:hover {
    background-color: #ccc;
  }

  @media (max-width: 450px) {
    justify-content: center;
  }

  @media (max-width: 350px) {
    button {
      padding: 6px 10px;
      font-size: 14px;
    }
  }

  @media (max-width: 300px) {
    button {
      padding: 4px 8px;
      font-size: 12px;
    }
  }

  @media (max-width: 250px) {
    button {
      padding: 2px 6px;
      font-size: 10px;
    }
  }
`;
