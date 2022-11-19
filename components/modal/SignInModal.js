import { faXmark } from '@fortawesome/free-solid-svg-icons';
import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { modalActions } from '../../store/modal';
import SignIn from '../auth/signin';
import Portal from './Portal';
const BackWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;
const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 600px;
  height: 600px;
  z-index: 100;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Backdrop = (props) => {
  return <BackWrapper onClick={props.onConfirm} />;
};

const ModalOverlay = () => {
  const dispatch = useDispatch();
  const confirmHandler = () => {
    dispatch(modalActions.modalHandler());
  };
  return (
    <ModalWrapper>
      icon={faXmark}
      onClick={confirmHandler}
      <SignIn />
    </ModalWrapper>
  );
};

const SignInModal = () => {
  const dispatch = useDispatch();
  const confirmHandler = () => {
    dispatch(modalActions.modalHandler());
  };

  return (
    <Fragment>
      <Portal selector="backdrop-root">
        <Backdrop onConfirm={confirmHandler} />,
      </Portal>

      <Portal selector="overlay-root">
        <ModalOverlay onConfirm={confirmHandler} />,
      </Portal>
    </Fragment>
  );
};

export default SignInModal;
