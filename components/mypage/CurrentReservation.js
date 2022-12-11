import React from 'react';
import styled from 'styled-components';
import Card from '../ui/Card';

const Wrapper = styled.section`
  margin-top: 80px;
  margin-left: 350px;
  width: 70vw;
  h1 {
    font-size: 2rem;
    text-align: left;
  }
  .place-name {
    margin-left: 20px;
    font-size: 1.3rem;
  }
  .product-type {
    margin-left: 20px;
    font-size: 1.5rem;
  }
  .reservation-time {
    margin-left: 20px;
    font-size: 1.5rem;
  }
  @media screen and (max-width: 1170px) {
    margin-left: 0;
    width: 96vw;
  }
`;
const CurrentReservation = ({ item }) => {
  return (
    <Wrapper>
      <h1>현재 사용중인 상품</h1>
      <Card className="current-reservation-data">
        <h3>지점명</h3>
        <div className="place-name">{item[Object.keys(item)].placeName}</div>
        <h3>상품명</h3>
        <div className="product-type">
          {item[Object.keys(item)].productType}
        </div>
        <h3>예약 시간</h3>
        <div className="reservation-time">
          {`${item[Object.keys(item)].reservationStartDate}
            ${item[Object.keys(item)].reservationStartTime}`}
          ~
          {`${item[Object.keys(item)].reservationEndDate}
              ${item[Object.keys(item)].reservationEndTime}`}
        </div>
      </Card>
    </Wrapper>
  );
};

export default CurrentReservation;
