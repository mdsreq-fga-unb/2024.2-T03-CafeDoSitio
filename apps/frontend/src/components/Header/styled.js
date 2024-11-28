import styled from 'styled-components';

export const DivHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 130px;
  width: 100vw;

  img {
    height: auto;
    width: 150px;
  }
`;

export const NavSection = styled.section`
  display: flex;
  flex-direction: column;

   .socialMedias {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
    flex-wrap: wrap;
   }
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 30px;
`;

export const NavBar = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  flex-wrap: wrap;
  border-bottom: 3px solid #006343;

  a {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 120%;
  }
`;

