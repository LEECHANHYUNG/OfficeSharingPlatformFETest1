import Image from 'next/image';
import React from 'react';
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
`;

const PaymentMain = (props) => {
  return (
    <Wrapper>
      <h1>요금 세부정보</h1>
      <div className="container">
        <div className="price">
          <h4>결제 예정 금액</h4>
          <p>
            <Image src="/svg/won.svg" width="10" height="10" />
            {(props.totalPrice || 100000).toLocaleString()}
          </p>
        </div>
        <div className="price">
          <h5>선결제 금액</h5>
          <p>
            <Image src="/svg/won.svg" width="10" height="10" />
            {(props.totalPrice || 100000).toLocaleString()}
          </p>
        </div>
        <div className="price">
          <h5>적립 예정 마일리지</h5>
          <p>
            <Image src="/svg/won.svg" width="10" height="10" />
            {((+props.totalPrice || 100000) * 0.2).toLocaleString()}
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default PaymentMain;
