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
  & .placeName,
  & .writingTime,
  & .state {
    width: 12%;
  }
  & .content {
    width: 52%;
  }
`;
const QnaItem = () => {
  return (
    <Wrapper>
      <div className="state">마일리지 적립</div>
      <div className="content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, iusto.
      </div>
      <div className="placeName">롯데월드점</div>
      <div className="writingTime">2022.11.30</div>
      <div className="state">처리중</div>
    </Wrapper>
  );
};

export default QnaItem;
