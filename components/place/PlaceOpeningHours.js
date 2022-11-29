import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  margin-top: 20px;
  & h1 {
    font-size: 1rem;
    padding: 0 30px;
  }

  & .time {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 20px;
    padding: 0 30px;
  }
  & .time p {
    font-size: 1rem;
    color: #6a9eff;
    font-weight: 900;
  }
  & .open div,
  & .close div {
    font-size: 1.5rem;
    font-weight: 900;
  }
  & .line {
    height: 6px;
    background #999;
    margin-top : 20px;
  }
`;
const PlaceOpeningHours = () => {
  return (
    <Wrapper>
      <h1>영업 시간</h1>
      <div className="time">
        <div className="open">
          <p>오픈 시간</p>
          <div>06:00</div>
        </div>
        <div>~</div>
        <div className="close">
          <p>마감 시간</p>
          <div>22:00</div>
        </div>
      </div>
      <div className="line"></div>
    </Wrapper>
  );
};

export default PlaceOpeningHours;
