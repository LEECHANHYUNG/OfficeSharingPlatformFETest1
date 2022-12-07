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
const UsedItem = () => {
  return (
    <Wrapper>
      <div className="type">MeetingRoom</div>
      <div className="placeName">롯데월드점</div>
      <div className="reservationDate">
        <div className="date">2022.11.30</div>
        <div className="time">11:00 ~ 13:00</div>
      </div>
      <div className="paymentDate">
        <div className="date">2022.11.28</div>
        <div className="time">11:00:01</div>
      </div>
      <div className="state">이용전</div>
      <div className="review">작성 가능</div>
    </Wrapper>
  );
};

export default UsedItem;
