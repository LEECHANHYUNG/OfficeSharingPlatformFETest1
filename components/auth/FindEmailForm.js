import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from '../ui/Button';
import Phone from './Phone';

const Wrapper = styled.section`
  border: 2px solid #111;
  border-radius: 5px;
  margin-top: 30px;
  padding: 0 30px;
  width: 100%;
  height: 300px;
  padding-top: 30px;

  label {
    font-size: 1.1rem;
    font-weight: 600;
  }
`;

const FindEmailForm = () => {
  const [inputPhoneNumber, setInputPhoneNumber] = useState();
  const getPhoneNumber = (item) => {
    setInputPhoneNumber(item);
  };
  const phoneIsValid = useSelector((state) => state.auth.phoneIsValid);
  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log(inputPhoneNumber);
  };
  return (
    <Wrapper>
      <form onSubmit={submitFormHandler}>
        <label htmlFor="phone">핸드폰 번호</label>
        <Phone getPhoneNumber={getPhoneNumber} />
        <Button type="submit" disabled={!phoneIsValid}>
          아이디 찾기
        </Button>
      </form>
    </Wrapper>
  );
};

export default FindEmailForm;
