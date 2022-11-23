import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { authSliceActions } from '../../store/auth';
const Wrapper = styled.div`
  &.control {
    width: 100%;
  }
  &.control.invalid input {
    border-color: red;
    background: #fbdada;
  }
  &.control.invalid input:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }
  & input {
    width: 80%;
    height: 40px;
    margin: 10px auto;
  }
`;

const Password = () => {
  const [passwordBlur, setPasswordBlur] = useState(false);
  const dispatch = useDispatch();
  const passwordInputRef = useRef();
  const passwordIsValid = useSelector((state) => state.auth.passwordIsValid);
  const passwordChangeHandler = () => {
    const enteredPassword = passwordInputRef.current.value;
    dispatch(authSliceActions.getPasswordValid(enteredPassword));
  };
  const validatePasswordHandler = () => {
    const enteredPassword = passwordInputRef.current.value;
    dispatch(authSliceActions.getPasswordValid(enteredPassword));
    setPasswordBlur(true);
  };
  return (
    <Wrapper
      className={`control${passwordIsValid === false ? ' invalid' : ''}`}
    >
      <div className="validity-comment">
        {!passwordIsValid &&
          passwordBlur &&
          '영어 대소문자/숫자/특수문자 포함 8~15자리'}
      </div>
      <label htmlFor="password">
        <input
          type="password"
          name="password"
          placeholder="패스워드"
          ref={passwordInputRef}
          onChange={passwordChangeHandler}
          onBlur={validatePasswordHandler}
          minLength="8"
          maxLength="15"
          required
        />
      </label>
    </Wrapper>
  );
};

export default Password;
