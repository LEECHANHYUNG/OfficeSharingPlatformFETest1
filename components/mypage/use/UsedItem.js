import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  min-width: 1100px;
  height: 60px;
  line-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #111;
  overflow-y: hidden;

  & .type {
    width: 36%;
  }
  & .placeName {
    line-height: 16px;
  }
  & .placeName,
  & .reservationDate,
  & .paymentDate {
    width: 14%;
  }
  & .state,
  & .review {
    width: 11%;
  }
  & .date,
  & .time {
    line-height: 1.2rem;
  }
`;
const UsedItem = (props) => {
  console.log(props.item);
  console.log(1);
  return (
    <Wrapper>
      <div className="type">{props.item.productType}</div>
      <div className="placeName">{props.item.placeName}</div>
      <div className="reservationDate">
        <div className="date">
          {props.item.reservationEndDateTime.split(' ')[0]}
        </div>
        <div className="time">
          {props.item.reservationStartDateTime.split(' ')[1]} ~{' '}
          {props.item.reservationEndDateTime.split(' ')[1]}
        </div>
      </div>
      <div className="paymentDate">
        <div className="date">
          {props.item.reservationCompletedDateTime.split(' ')[0]}
        </div>
        <div className="time">
          {props.item.reservationCompletedDateTime.split(' ')[1]}
        </div>
      </div>
      <div className="state">{props.item.usageState}</div>
      <div className="review">
        {props.item.isAvailableReview ? '작성 가능' : '작성 완료'}
      </div>
    </Wrapper>
  );
};

export default UsedItem;
