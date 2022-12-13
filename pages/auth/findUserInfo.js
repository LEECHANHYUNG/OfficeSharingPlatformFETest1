import React, { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import ChangePasswordForm from '../../components/auth/ChangePasswordForm';
import FindEmailForm from '../../components/auth/FindEmailForm';
import FindUserInfoNav from '../../components/auth/FindUserInfoNav';
import AuthHeader from '../../components/ui/AuthHeader';
import { authSliceActions } from '../../store/auth';

const Wrapper = styled.section`
  position: relative;
  margin: 20vh auto;
  width: 90%;
  max-width: 40rem;
  padding: 1rem;
`;

const findUserInfo = () => {
  const [selectedItem, setSelectedItem] = useState('email');
  const getSelectedItem = (item) => {
    setSelectedItem(item);
  };
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authSliceActions.resetValidation());
  }, [selectedItem]);

  return (
    <Wrapper>
      <AuthHeader />
      <FindUserInfoNav
        getSelectedItem={getSelectedItem}
        selectedItem={selectedItem}
      />
      {selectedItem === 'password' ? <ChangePasswordForm /> : <FindEmailForm />}
    </Wrapper>
  );
};

export default findUserInfo;
