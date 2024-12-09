import styled from "styled-components";

export const NavBar = styled.header`
  background-color: #006343;
  display: flex;
  position: fixed;
  width: 100%;
  z-index: 10;
`;

export const NavButton = styled.div`
  height: 48px;
  padding-inline: 10px;
  width: auto;
  gap: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: 200ms;

  .icon{
    font-size: 16px;
    color: white;
    transition: 200ms;
  }

  span{
    color: white;
    font-family: 'Myriad Pro', sans-serif;
    font-size: 12px;
    transition: 200ms;
  }

  &:hover{
    background-color: #E6D5B3;

    .icon{
      color: #006343;
    }

    span{
      color: #006343;
    }
  }

  @media (max-width: 500px) {
    span{
      font-size: 10px;
    }

    .icon{
      font-size: 12px;
    }
  }
`;

export const NavArea = styled.nav`
  width: 100%;
  height: 48px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;

  img{
    height: 48px;
    width: auto;
  }
`;

export const EsqNav = styled.div`
  display: flex;
  flex-direction: row;

  @media (max-width: 500px) {
    .new-button{
      display: none;
    }
  }

  @media (max-width: 330px) {
    .site-button{
      display: none;
    }
  }
`;

export const DirNav = styled.div`
  display: flex;
  flex-direction: row;
`;