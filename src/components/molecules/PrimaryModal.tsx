import React, { VFC } from 'react';
import { Button, Modal, Typography } from '@supabase/ui';

type Props = {
  onCancel: () => void;
  onConfirm: () => void;
  toggle: () => void;
  visible: boolean;
  name: string;
};

const PrimaryModal: VFC<Props> = (props) => {
  const { toggle, onConfirm, onCancel, visible, name } = props;

  return (
    <>
      <Button onClick={toggle} type="default">
        Open modal
      </Button>
      <Modal
        title="Delete User"
        description={`Do you want to delete ${name}?`}
        visible={visible}
        onCancel={onCancel}
        onConfirm={onConfirm}
      />
    </>
  );
};

export default PrimaryModal;
