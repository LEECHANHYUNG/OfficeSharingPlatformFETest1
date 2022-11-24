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
const Phone = () => {
  const [phoneBlur, setPhoneBlur] = useState(false);
  const dispatch = useDispatch();
  const phoneIsValid = useSelector((state) => state.auth.phoneIsValid);
  const phoneChangeHandler = (e) => {
    dispatch(authSliceActions.getPhoneValid(e.target.value));
  };
  const validateNameHandler = (e) => {
    dispatch(authSliceActions.getPhoneValid(e.target.value));
    setPhoneBlur(true);
  };
  return (
    <Wrapper className="control">
      <div className="validity-comment">
        {!phoneIsValid && phoneBlur && '번호를 입력해주세요'}
      </div>
      <label htmlFor="phone">
        <Input
          type="text"
          name="phone"
          placeholder="전화번호*"
          onChange={phoneChangeHandler}
          onBlur={validateNameHandler}
          className={`${phoneIsValid === false ? ' invalid' : ''}`}
          maxLength="13"
          required
        />
      </label>
    </Wrapper>
  );
};

export default Phone;
