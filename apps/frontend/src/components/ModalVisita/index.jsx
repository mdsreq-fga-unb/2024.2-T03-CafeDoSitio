import React from "react";
import { Modal } from "antd";
import { ButtonConfirm, ButtonCancel } from "./styled";

const ModalVisita = ({ visible, onClose, children, onClick, tittle }) => {
  return (
    <Modal
      title={tittle}
      open={visible}
      onCancel={onClose}
      footer={[
        <ButtonCancel key="cancel" onClick={onClose}>
          Cancelar
        </ButtonCancel>,
        <ButtonConfirm key="submit" type="primary" onClick={onClick}>
          Confirmar
        </ButtonConfirm>,
      ]}
    >
      {children}
    </Modal>
  );
};

export default ModalVisita;
