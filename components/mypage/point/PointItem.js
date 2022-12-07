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
  & .state,
  & .amount {
    width: 8%;
  }
  & .content {
    width: 51%;
  }

  & .placeName {
    width: 13%;
  }
  & .addTime {
    width: 20%;
  }
`;
const PointItem = () => {
  return (
    <Wrapper>
      <div className="state">적립</div>
      <div className="amount">+600</div>
      <div className="content">선결제 적립</div>
      <div className="placeName">롯데월드점</div>
      <div className="addTime">2022.11.30</div>
    </Wrapper>
  );
};

export default PointItem;
