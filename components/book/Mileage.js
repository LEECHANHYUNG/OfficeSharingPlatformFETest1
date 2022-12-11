import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import Card from '../ui/Card';

const Wrapper = styled(Card)`
  border: 3px solid #6a9eff;
  h1 {
    text-decoration: underline;
  }
  .price {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  .price p {
    font-size: 1.7rem;
  }

  input {
    text-align: right;
    height: 30px;
    width: 120px;
    margin-left: 5px;
    font-size: 1rem;
  }
`;

const Mileage = (props) => {
  const [enteredMileage, setEnteredMileage] = useState('');
  const inputMileageHandler = (e) => {
    if (isNaN(e.target.value)) {
      alert('숫자만 입력 가능합니다.');
      setEnteredMileage('');
    } else {
      setEnteredMileage(String(e.target.value));
    }
  };
  return (
    <Wrapper>
      <h1>마일리지</h1>
      <div className="container">
        <div className="price">
          <h4>사용 가능 마일리지</h4>
          <p>
            <Image src="/svg/won.svg" width="10" height="10" />
            {(props.totalMileage || 100000).toLocaleString()}
          </p>
        </div>
        <div className="price">
          <h5>사용 마일리지 입력</h5>
          <p>
            <Image src="/svg/won.svg" width="10" height="10" />
            <input
              type="text"
              min={0}
              onChange={inputMileageHandler}
              value={enteredMileage}
            />
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default Mileage;
