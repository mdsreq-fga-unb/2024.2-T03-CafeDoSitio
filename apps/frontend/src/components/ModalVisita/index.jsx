import React from "react";
import { Modal, Button, Input, Tooltip, Form } from "antd";

const ModalVisita = ({ visible, onClose, onSubmit }) => {
  return (
    <Modal
      title="Agendar Visita"
      open={visible}
      onCancel={onClose}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancelar
        </Button>,
        <Button key="submit" type="primary" form="visitaForm" htmlType="submit">
          Enviar
        </Button>,
      ]}
    >
      <Form
        id="visitaForm"
        onFinish={onSubmit}
        layout="vertical"
      >
        <Form.Item
          label={
            <Tooltip title="Digite o nome do representante que agendará a visita.">
              Nome:
            </Tooltip>
          }
          name="nome"
          rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject('Por favor, insira o nome!') }]}
        >
          <Input placeholder="Digite seu nome" />
        </Form.Item>

        <Form.Item
          label={
            <Tooltip title="Digite o e-mail do representante que agendará a visita.">
              Email:
            </Tooltip>
          }
          name="email"
          rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject('Por favor, insira o e-mail!') }]}
        >
          <Input placeholder="Digite seu email" />
        </Form.Item>

        <Form.Item
          label={
            <Tooltip title="Digite o número de telefone do representante.">
              Telefone:
            </Tooltip>
          }
          name="telefone"
          rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject('Por favor, insira o telefone!') }]}
        >
          <Input placeholder="Digite seu telefone" />
        </Form.Item>

        <Form.Item
          label={
            <Tooltip title="Digite o nome da instituição do grupo de visita.">
              Instituição:
            </Tooltip>
          }
          name="instituicao"
          rules={[{ validator: (_, value) => value ? Promise.resolve() : Promise.reject('Por favor, insira a instituição!') }]}
        >
          <Input placeholder="Digite a instituição" />
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default ModalVisita;
