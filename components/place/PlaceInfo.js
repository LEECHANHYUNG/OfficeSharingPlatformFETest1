import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.section`
  width: 100%;

  & .place-name {
    font-size: 1.7rem;
    font-weight: 900;
    margin-top: 20px;
    margin-left: 20px;
  }
  & .place-description {
    margin-top: 30px;
    padding: 0 30px;
    color: #888;
  }
  & .place-address {
    font-size: 1rem;
    padding: 30px 30px;
  }
  & .line {
    height: 6px;
    background #999;
  }
`;
const PlaceInfo = () => {
  return (
    <Wrapper>
      <div className="place-name">롯데월드점</div>
      <div className="place-description">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quaerat
        laboriosam pariatur, saepe tenetur
      </div>
      <div className="place-address">
        서울 송파구 올림픽로 240 (잠실동) 롯데월드 웰빙센터 8층
      </div>
      <div className="line"></div>
    </Wrapper>
  );
};

export default PlaceInfo;
