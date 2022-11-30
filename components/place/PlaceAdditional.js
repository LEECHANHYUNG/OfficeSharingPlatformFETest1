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
    justify-content: flex-start;
    align-items: center;
    margin-top: 10px;
    padding : 30px 30px;
    min-width : 300px;
  }
  & .line {
    height: 6px;
    background #999;
  }
  & .item{
    display : flex;
    justify-content: center;
    align-items : center;
    flex-direction : column;
    width : 80px;
  }
  @media screen and (max-width : 1420px){
    & .item{
      padding-right: 30px;
    }
    & .item p{
      display: none;
    }
  }
`;

const PlaceAdditional = ({ additionalItem }) => {
  return (
    <Wrapper>
      <h1>부가 정보</h1>
      <main>
        {additionalItem.includes('Parking') && (
          <div className="item">
            <Image src="/svg/car.svg" width="36" height="36" />
            <p>주차 가능</p>
          </div>
        )}
        {additionalItem.includes('Wifi') && (
          <div className="item">
            <Image src="/svg/wifi.svg" width="36" height="36" />
            <p>와이파이</p>
          </div>
        )}
        {additionalItem.includes('Coffee') && (
          <div className="item">
            <Image src="/svg/coffee.svg" width="36" height="36" />
            <p>커피 머신</p>
          </div>
        )}
        {additionalItem.includes('Monitor') && (
          <div className="item">
            <Image src="/svg/monitor.svg" width="36" height="36" />
            <p>모니터</p>
          </div>
        )}
      </main>
      <div className="line"></div>
    </Wrapper>
  );
};

export default PlaceAdditional;
