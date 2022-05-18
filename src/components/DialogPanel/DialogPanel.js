import {Dialog} from '@headlessui/react';
import styled from '@emotion/styled';

const DialogPanel = styled(Dialog.Panel)`
  width: 100%;
  max-width: 28rem;
  overflow: hidden;
  border-radius: 1rem;
  background-color: #fff;
  padding: 20px;
  text-align: left;
  vertical-align: middle;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1),
    0 8px 10px -6px rgb(0 0 0 / 0.1);
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;

export default DialogPanel;
