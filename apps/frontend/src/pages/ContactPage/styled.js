import styled from 'styled-components';

export const InfoSection = styled.section`
  h1 {
    font-size: 1.8rem;
  }

  p {
    font-weight: 300;
    font-size: 1.0rem;
  }
`;

export const ContactSection = styled.section`
  text-align: center;
  padding: 2rem;
`;

export const ContactCards = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const ContactCard =styled.div`
  max-width: 300px;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 1rem;
  text-align: left;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  h1 {
    font-size: 1.0rem;
    margin-bottom: 1rem;
    max-width: 30vh;
    color: #006343;
  }

  p {
    font-size: 0.9rem;
    margin-bottom: 1rem;
    color: #555;
  }
`;

export const EmailZone = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  span {
    font-size: 1.0rem;
    margin-right: 10px;
  }
`

export const EmailLink = styled.a`
  font-size: 0.9rem;
  color: #0078d7;
  text-decoration: none;

  &:hover{
    text-decoration: underline;
  }
`;
