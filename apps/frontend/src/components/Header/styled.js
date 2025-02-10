import styled from 'styled-components';

export const NavBar = styled.header`
  margin-inline: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    font-family: 'Myriad Pro', sans-serif;
    text-decoration: none;
  }

  @media (max-width: 850px) {
    padding-inline: 20px;
  }
`;

export const NavArea = styled.nav`
  max-width: 1280px;
  height: 200px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;

  .page-name {
    display: none;
    font-weight: bold;
    color: #006343;
    font-size: 20px;
  }

  .area1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 16px;
  }

  @media (max-width: 1160px) {
    justify-content: space-between;
    align-items: center;

    .page-name {
      display: flex;
    }
  }

  @media (max-width: 850px) {
    .page-name {
      font-size: 16px;
    }
  }
`;

export const LogoImg = styled.img`
  width: 200px;
  height: auto;

  @media (max-width: 850px) {
    width: 150px;
  }
`;

export const InfoAreaDesktop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  .nav-list {
    padding: 0;
    display: flex;
    gap: 32px;
    list-style: none;
    border-bottom: 2px solid #006343;
    justify-content: space-between;

    a {
      font-size: 18px;
      color: #000000;
      padding-block: 16px;
      font-weight: bold;
      transition: 200ms;
    }
  }

  .social-medias {
    padding: 0;
    display: flex;
    gap: 10px;
    list-style: none;
  }

  .area1 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 10px;
    align-items: center;
  }

  h1 {
    font-size: 16px;
    max-width: 104px;
  }

  @media (max-width: 1450px) {
    .nav-list {
      gap: 32px;

      a {
        font-size: 14px;
      }
    }
  }

  @media (max-width: 1160px) {
    display: none;
  }
`;

export const InfoAreaMobile = styled.div`
  display: none;
  gap: 30px;

  .area2 {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .menu-icon{
    cursor: pointer;
  }

  @media (max-width: 1160px) {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 850px) {
    gap: 10px;
  }
`;

export const BarraPesquisa = styled.div`
  width: 300px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  border: 2px solid #006343;
  border-radius: 10px;
  transition: 200ms;
  
  input {
    width: 300px;
    background-color: transparent;
    border: none;

    &:focus-visible {
      outline: none;
    }
  }

  .search-icon {
    cursor: pointer;
  }

  @media (max-width: 1450px) {
    width: 180px;

    input {
      width: 154px;
    }
  }

  @media (max-width: 850px) {
    width: 100px;

    input {
      width: 80px;
    }
  }

  @media (max-width: 570px) {
    display: none;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #006343;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  .close-icon {
    color: white;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }

  .Buttons {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .mobile-nav-list {
    list-style: none;
    padding: 0;
    text-align: center;
    
    li {
      margin: 20px 0;
      
      a {
        font-size: 24px;
        color: white;
        text-decoration: none;
        font-weight: bold;
        transition: 200ms;
        
        &:hover {
          color: #F29947;
          text-decoration: underline;
        }
      }
    }
  }

  .social-medias {
    list-style: none;
    padding: 0;
    text-align: center;
    display: flex;
    flex-direction: row;
    gap: 15px;

    .icon{
      color: #F29947;
      font-size: 25px;
    }
  }
`;