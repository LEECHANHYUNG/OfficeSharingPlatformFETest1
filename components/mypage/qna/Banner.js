import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  min-width: 1100px;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  border-top: 2px solid #111;
  border-bottom: 2px solid #111;

  & #state,
  & #placeName,
  & #writingTime,
  & #state {
    width: 12%;
  }
  & #content {
    width: 52%;
  }
`;

const Banner = () => {
  return (
    <Wrapper>
      <div id="state">문의 유형</div>
      <div id="content">내용</div>
      <div id="placeName">지점명</div>
      <div id="writingTime">작성 일시</div>
      <div id="state">처리 상태</div>
    </Wrapper>
  );
};

export default Banner;
