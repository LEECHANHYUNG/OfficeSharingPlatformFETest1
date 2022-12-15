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
const PointItem = ({ item }) => {
  return (
    <Wrapper>
      <div className="state">{item.status}</div>
      <div className="amount">{item.changePoint}</div>
      <div className="content">{item.info}</div>
      <div className="placeName">{item.issuer}</div>
      <div className="addTime">{item.updateDate}</div>
    </Wrapper>
  );
};

export default PointItem;
