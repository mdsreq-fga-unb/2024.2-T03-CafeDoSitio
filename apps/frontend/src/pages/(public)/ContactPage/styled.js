import styled from 'styled-components';

export const InfoSection = styled.section`
  h1 {
    font-size: 2.5rem;
    margin-bottom: 0;
    color: #333;
  }

  p {
    font-weight: 300;
    font-size: 1rem;
    color: #333;
  }
`;

export const ContactSection = styled.section`
  text-align: center;
  padding-block: 2rem;

  @media (max-width: 1280px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const ContactCards = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 1.5rem;
  row-gap: 2.8rem;
  margin-inline: 0;
  flex-wrap: wrap;

  @media (max-width: 1273px) {
    .card:nth-of-type(3) {
      margin-left: auto;
      margin-right: auto;
    }
  };
  
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;

  }
`;

export const ContactCard =styled.div`
  max-width: 450px;
  // border: 1px solid #ddd;
  // border-radius: 5px;
  text-align: left;
  // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 1.8rem;
    margin-bottom: 1rem;
    max-width: 50vh;
    color: #006343;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #333;
  }

  @media (max-width: 1024px) {
    width: auto;
    padding: 0;
  }

  @media (max-width: 1720px) {
    max-width: 350px;

    h1 {
      font-size: 1.2rem;
      max-width: 50vh;
    }

    p {
      font-size: 1rem;
    }
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
  font-weight: bold;
  color:rgb(41, 41, 41);
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
  margin: 10px;

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

  @media (max-width: 1250px) {
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
    font-weight: bold;
  
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

  .email_zone {
    display: flex;
    gap: 15px;
    align-items: center;
  }

  .email {
    text-decoration: none;
    font-size: 1rem;
    color: #006343;

    &:hover{
      text-decoration: underline;
    }
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

export const Space = styled.div`
  height: 68px;
`;

export const ImageWrapper = styled.div`
  flex: 1;
  background-color: #fff;
  max-width: 10%;
  border-radius:  0 15px 15px 0 ;
  overflow: hidden; 
`;

export const Button = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  background-color: #006343;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #004c2e;
  }
`;

export const Location = styled.section`
  flex: 1;
  margin-top: 5rem;
  
  h2 {
    font-size: 2.5rem;
    color: #004c2e;
    margin-bottom: 1rem;
    font-weight: lighter;
    font-family: 'Impact', sans-serif;
    margin-left: 1.5vw;
  }

  iframe {
    width: 100%;
    height: 300px;
    border: none;
    margin-bottom: 30px;
  }
  
  .caixinha{
    display: flex;
    gap: 0.5vw;
  }
  
  .infos{
    margin: 0;
  }

  .icon {
    color: #004c2e;
  }
  
  p {
    font-size: 1rem;
    color: #333;
    line-height: 1.5;
    font-family: 'Myriad Pro', sans-serif;
  }

  @media(min-width: 768px){
    display: none;
  }
`;