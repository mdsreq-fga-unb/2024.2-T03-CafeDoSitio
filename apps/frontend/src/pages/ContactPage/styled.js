import styled from 'styled-components';

export const InfoSection = styled.section`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0;
    margin-left: 2rem;
    color: #555;
  }

  p {
    font-weight: 300;
    font-size: 1rem;
    margin-left: 2rem;
    color: #555;
  }
`;

export const ContactSection = styled.section`
  text-align: center;
  padding-block: 2rem;
`;

export const ContactCards = styled.div`
  display: flex;
  justify-content: center;
  padding-inline: 5%;
  column-gap: 3rem;
  row-gap: 2.8rem;
  flex-wrap: wrap;
  @media (max-width: 1024px) {
    flex-direction:column;
    align-items: center;
    }
`;

export const ContactCard =styled.div`
  max-width: 350px;
  // border: 1px solid #ddd;
  // border-radius: 5px;
  padding: 1rem;
  text-align: left;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    max-width: 50vh;
    color: #006343;
  }

  p {
    font-size: 1rem;
    margin-bottom: 1rem;
    color: #555;
  }

  @media (max-width: 1024px) {
    width: auto;
    padding: 0;
  }
`;

export const EmailZone = styled.div`
  display: flex;
  flex-direction: row;
  align-content: center;
  margin-bottom: 1rem;
  gap: 10px;

`

export const EmailLink = styled.a`
  font-size: 1rem;
  color: #006343;
  text-decoration: none;
  align-self: center;

  &:hover{
    text-decoration: underline;
  }
`;


export const FaleCom = styled.section`
  border: 3px solid #006343;
  border-radius: 30px;
  width: auto; 
  height: 10rem;
  display: flex;
  flex-direction: row; 
  align-items: center; 
  justify-content: space-between;
  margin: 2vh 20vh ;

  h2 {
    margin: 0.5rem 2rem;
    font-size: 1rem;
  }

  .marcador {
    display: flex;
    flex-direction: column;
    background-color: #006343;
    height: 100%;
    border-radius: 27px 0 0 27px;
    color: white;
    align-items: center;
    justify-content: space-evenly;
    width: 15%;
  }

  @media (max-width: 1420px) {
    display: none;
  }
`;


export const SocialIcons = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 15px;

  svg {
    font-size: 1.5rem;
    color: #006343;
    cursor: pointer;}

    &:hover {
      color: #005a25;
    }
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-right: 5rem;
  a {
    display: block;
    text-decoration: none;
    font-size: 1rem;
    color: #006343;
    font-weight: bold;}

    &:hover {
      text-decoration: underline;
    }
  }

`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  .phone{
    font-size: 2.4rem;
    color: #006343;
    font-weight: bold;
    display: flex;
    gap: 15px;
    align-items: center;
    }

  .email {
    font-size: 1rem;
    color: #006343;
    display: flex;
    gap: 15px;
    align-items: center;
  }
`;

export const Horario_redes = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  color: #006343;
  p {
    margin:0;
  }
  h3 {
    margin:0;
  }
`;