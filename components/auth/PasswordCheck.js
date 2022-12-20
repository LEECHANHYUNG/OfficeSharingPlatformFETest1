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
const PasswordCheck = () => {
  const [passwordBlur, setPasswordBlur] = useState(false);
  const dispatch = useDispatch();
  const passwordIsValid = useSelector((state) => state.auth.passwordIsValid);
  const passwordChangeHandler = (e) => {
    dispatch(authSliceActions.getPasswordValid(e.target.value));
  };
  const validatePasswordHandler = (e) => {
    dispatch(authSliceActions.getPasswordValid(e.target.value));
    setPasswordBlur(true);
  };
  return (
    <Wrapper className="control">
      <div className="validity-comment">
        {!passwordIsValid &&
          passwordBlur &&
          '영어 대소문자/숫자/특수문자 포함 8~15자리'}
      </div>
      <label htmlFor="password">
        <Input
          type="password"
          name="password"
          placeholder={'패스워드 확인*'}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          className={`${passwordIsValid === false ? ' invalid' : ''}`}
          minLength="8"
          maxLength="15"
          required
        />
      </label>
    </Wrapper>
  );
};

export default PasswordCheck;
