import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  min-width: 1100px;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  border-top: 2px solid #111;
  border-bottom: 2px solid #111;
  & #type {
    width: 36%;
  }

  & #placeName,
  & #reservationDate,
  & #paymentDate {
    width: 14%;
  }
  & #state,
  & #review {
    width: 11%;
  }
`;

const Banner = () => {
  return (
    <Wrapper>
      <div id="type">상품 종류</div>
      <div id="placeName">지점명</div>
      <div id="reservationDate">예약 시간</div>
      <div id="paymentDate">결제 시간</div>
      <div id="state">상태</div>
      <div id="review">후기</div>
    </Wrapper>
  );
};

export default Banner;
