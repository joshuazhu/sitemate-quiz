import React, { useState } from 'react';
import { Button, Modal } from 'antd';

interface props {
  children: React.ReactNode
  title: string
}

const MyComponent: React.FC<props> = ({
  children,
  title
}) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Open {title}
      </Button>
      <Modal
        title={title}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {children}
      </Modal>
    </div>
  );
};

export default MyComponent;
