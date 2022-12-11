import React from 'react';
import styled from 'styled-components';
import Card from '../ui/Card';
const StyledCard = styled(Card)`
  .item {
    font-size: 1rem;
    font-weight: 900;
  }
  .data {
    margin-left: 80px;
    font-size: 1.3rem;
    font-weight: 900;
    color: #71716f;
    margin-bottom: 20px;
  }
  .date-info {
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-left: 0;
  }
`;

const BookInfo = (props) => {
  return (
    <StyledCard>
      <h1>예약 정보</h1>
      <div className="item">지점명</div>
      <div className="data">{props.placeName || ' 우아한테크코스'}</div>
      <div className="item">상품명</div>
      <div className="data">{props.productType || '20평 사무실'}</div>
      <div className="item">날짜</div>
      <div className="data date-info">
        <div>
          <div className="date">
            {props.reservationStartDate || '2023-02-15'}
          </div>
          <div className="time">
            {`${props.reservationStartTime}` || '12:00'}
          </div>
        </div>
        <div className="break">~</div>
        <div>
          <div className="date">{props.reservationEndDate || '2023-02-15'}</div>
          <div className="time">{`${props.reservationEndTime}` || '13:00'}</div>
        </div>
      </div>
    </StyledCard>
  );
};

export default BookInfo;
