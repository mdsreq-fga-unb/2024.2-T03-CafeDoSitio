import styled from "styled-components";

export const CardContainer = styled.section`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 10px 0;
  width: 100vw;
  max-width: 600px;
  position: relative; /* Necessário para dropdown */
`;

export const CardStatus = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: ${(props) => (props.status ? '#4caf50' : '#ff9800')}; /* Verde ou laranja */
  color: #fff;
  font-size: 0.875rem;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 6px;
  text-transform: uppercase;
  cursor: pointer; /* Cursor para indicar interatividade */
  user-select: none; /* Evita seleção de texto */
`;

export const CardHeader = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
`;

export const CardInfo = styled.div`
  font-size: 1rem;
  color: #555;
  margin-bottom: 15px;

  p {
    margin: 5px 0;
  }
`;

export const CardMessage = styled.p`
  font-size: 1rem;
  color: #444;
  line-height: 1.5;
  margin-top: 10px;
  border-top: 1px solid #ddd;
  padding-top: 10px;
`;

export const StatusDropdown = styled.ul`
  position: absolute;
  top: 40px;
  right: 10px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  list-style: none;
  margin: 0;
  padding: 5px 0;
  width: 150px;

  li {
    padding: 8px 10px;
    color: #333;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #f0f0f0;
    }
  }
`;
