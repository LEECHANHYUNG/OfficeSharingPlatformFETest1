import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 70vw;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  border-top: 2px solid #111;
  border-bottom: 2px solid #111;
  

  & #state,
  & #writingTime,
  & #state {
    width: 12%;
    line-height: 1rem;
  }
  & #content {
    width: 52%;
  }
  @media screen and (max-width: 1170px) {
    width: 93vw;
    margin: 0 auto;
    #placeName
  }
  @media screen and (max-width: 620px) {
  #writingTime{
    display : none;
  }
  }
`;

const Banner = () => {
  return (
    <Wrapper>
      <div id="state">문의 유형</div>
      <div id="content">내용</div>
      <div id="writingTime">작성 일시</div>
      <div id="state">처리 상태</div>
    </Wrapper>
  );
};

export default Banner;
