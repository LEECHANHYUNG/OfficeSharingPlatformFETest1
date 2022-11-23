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

const Email = () => {
  const [emailBlur, setEmailBlur] = useState(false);
  const dispatch = useDispatch();
  const emailInputRef = useRef();
  const emailIsValid = useSelector((state) => state.auth.emailIsValid);
  const emailChangeHandler = () => {
    const enteredEmail = emailInputRef.current.value;
    dispatch(authSliceActions.getEmailValid(enteredEmail));
  };
  const validateEmailHandler = () => {
    const enteredEmail = emailInputRef.current.value;
    dispatch(authSliceActions.getEmailValid(enteredEmail));
    setEmailBlur(true);
  };
  return (
    <Wrapper className={`control${emailIsValid === false ? ' invalid' : ''}`}>
      <div className="validity-comment">
        {!emailIsValid && emailBlur && '이메일 양식으로 입력 해주세요'}
      </div>
      <label htmlFor="email">
        <input
          type="email"
          name="email"
          placeholder="아이디(이메일 형식)"
          ref={emailInputRef}
          onChange={emailChangeHandler}
          onBlur={validateEmailHandler}
          required
        />
      </label>
    </Wrapper>
  );
};

export default Email;
