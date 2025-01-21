import React from 'react';
import { PopupContainer, PopupContent, PopupOverlay, CloseButton } from './styled';

const Popup = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <PopupOverlay>
      <PopupContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <PopupContent>{children}</PopupContent>
      </PopupContainer>
    </PopupOverlay>
  );
};

export default Popup;
