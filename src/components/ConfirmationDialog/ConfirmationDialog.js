import React, {Fragment} from 'react';
import styled from '@emotion/styled';
import {Transition} from '@headlessui/react';
import DialogBackdrop from '../DialogBackdrop';
import DialogPanel from '../DialogPanel';
import DialogTitle from '../DialogTitle';
import Button from '../Button';
import DialogContent from '../DialogContent';
import Box from '../Box';
import Dialog from '../Dialog';

const DialogAction = styled(Box)`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
`;

const ConfirmationDialog = ({
  open,
  onConfirm,
  onClose,
  text = 'Are you sure you want to delete this collection?',
}) => (
  <Transition appear show={open} as={Fragment}>
    <Dialog open={open} onClose={() => {}}>
      <DialogBackdrop />

      <DialogContent>
        <DialogPanel>
          <DialogTitle>{text}</DialogTitle>
          <DialogAction>
            <Button onClick={onConfirm}>Delete</Button>
            <Button onClick={onClose}>Cancel</Button>
          </DialogAction>
        </DialogPanel>
      </DialogContent>
    </Dialog>
  </Transition>
);

export default ConfirmationDialog;
