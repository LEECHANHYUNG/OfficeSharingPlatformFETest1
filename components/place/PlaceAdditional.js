import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  margin-top: 20px;
  & h1 {
    font-size: 1rem;
    padding : 0 30px;
  }
  & main {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    padding : 30px 60px;

  }
  & .line {
    height: 6px;
    background #999;
  }
`;

const PlaceAdditional = () => {
  return (
    <Wrapper>
      <h1>부가 정보</h1>
      <main>
        <div className="car">
          <Image src="/svg/car.svg" width="36" height="36" />
          <p>주차 가능</p>
        </div>
        <div className="cofffe">
          <Image src="/svg/wifi.svg" width="36" height="36" />
          <p>와이파이</p>
        </div>
        <div className="wifi">
          <Image src="/svg/coffee.svg" width="36" height="36" />
          <p>커피 머신</p>
        </div>
        <div className="monitor">
          <Image src="/svg/monitor.svg" width="36" height="36" />
          <p>모니터</p>
        </div>
      </main>
      <div className="line"></div>
    </Wrapper>
  );
};

export default PlaceAdditional;
