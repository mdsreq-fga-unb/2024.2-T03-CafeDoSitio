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