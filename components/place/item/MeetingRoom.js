import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  padding: 0 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #999;
  & .description {
    width: 40%;
    font-size: 13px;
  }
  & .description h1 {
    font-size: 1.3rem;
    padding: 0;
    margin-bottom: 5px;
  }
  & .price {
    font-size: 1.3rem;
    color: #6a9eff;
  }
`;
const MeetingRoom = ({ price }) => {
  return (
    <Wrapper>
      <div className="description">
        <h1>회의실</h1>
        <p>여러 인원이 사용할 수 있는 상품입니다.</p>
      </div>
      <div className="price">
        1시간 {Number(price).toLocaleString('ko-KR')} ~{' '}
      </div>
    </Wrapper>
  );
};

export default MeetingRoom;
