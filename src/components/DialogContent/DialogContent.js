import React, {Fragment} from 'react';
import {Transition} from '@headlessui/react';
import styled from '@emotion/styled';
import Box from '../Box';

const ContentContainer = styled(Box)`
  display: flex;
  min-height: 100%;
  align-items: center;
  justify-content: center;
  padding: 16px;
  text-align: center;
`;

const ContentWrapper = styled(Box)`
  position: fixed;
  inset: 0;
  overflow-y: auto;
`;

const DialogContent = ({children}) => (
  <ContentWrapper>
    <ContentContainer>
      <Transition.Child
        as={Fragment}
        enter="ease-out duration-300"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95">
        {children}
      </Transition.Child>
    </ContentContainer>
  </ContentWrapper>
);

export default DialogContent;
