import styled from 'styled-components';

// Overlay que cobre toda a tela
export const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

// Container principal do Popup
export const PopupContainer = styled.div`
  background: #ffffff;
  width: 400px;
  max-width: 90%;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
`;

// Conteúdo do Popup
export const PopupContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  font-size: 16px;
  color: #333333;
  font-family: 'Myriad Pro', sans-serif;

  h3{
    margin: 0 0 10px 0;
  }
`;

// Botão de Fechar
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 24px;
  font-weight: bold;
  color: #888;
  cursor: pointer;
  transition: color 0.3s;

  &:hover {
    color: #000;
  }
`;
