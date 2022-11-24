import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { authSliceActions } from '../../store/auth';
import Input from '../ui/Input';
const Wrapper = styled.div`
  &.control {
    width: 100%;
  }
`;
const Email = () => {
  const [emailBlur, setEmailBlur] = useState(false);
  const dispatch = useDispatch();
  const emailIsValid = useSelector((state) => state.auth.emailIsValid);
  const emailChangeHandler = (e) => {
    dispatch(authSliceActions.getEmailValid(e.target.value));
  };
  const validateEmailHandler = (e) => {
    dispatch(authSliceActions.getEmailValid(e.target.value));
    setEmailBlur(true);
  };
  return (
    <Wrapper className="control">
      <div className="validity-comment">
        {!emailIsValid && emailBlur && '이메일 양식으로 입력 해주세요'}
      </div>
      <label htmlFor="email">
        <Input
          type="email"
          name="email"
          placeholder="아이디(이메일 형식)*"
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          className={`${emailIsValid === false ? ' invalid' : ''}`}
          required
        />
      </label>
    </Wrapper>
  );
};

export default Email;
