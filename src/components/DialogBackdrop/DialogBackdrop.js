import React, {Fragment} from 'react';
import {Transition} from '@headlessui/react';
import styled from '@emotion/styled';
import Box from '../Box';

const Backdrop = styled(Box)`
  position: fixed;
  inset: 0;
  background-color: black;
  opacity: 0.25;
`;

const DialogBackdrop = () => (
  <Transition.Child
    as={Fragment}
    enter="ease-out duration-300"
    enterFrom="opacity-0"
    enterTo="opacity-100"
    leave="ease-in duration-200"
    leaveFrom="opacity-100"
    leaveTo="opacity-0">
    <Backdrop />
  </Transition.Child>
);

export default DialogBackdrop;
