import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Button from './Button';
import Card from './Card';

const ItemCard = styled(Card)`
  width: 30%;
  min-width: 300px;
  margin: 30px 20px;
  border: 2px solid #999;
  display: inline-block;
  .img {
    position: relative;
    width: 100%;
    height: 250px;
  }
  .img :first-child {
    border-radius: 0.3rem;
  }
  .item-name {
    padding-top: 10px;
    font-size: 1.5rem;
    font-weight: 900;
  }
  .item-description {
    background: #999;
    border-radius: 5px;
    padding-left: 10px;
  }

  .item-price {
    display: flex;
    justify-content: space-between;
    padding: 30px 10px;
    align-items: center;
  }
  .item-price :nth-child(1) {
    font-size: 0.7rem;
    font-weight: 600;
  }
  .item-price :nth-child(2) {
    font-size: 1.2rem;
    font-weight: 600;
  }
  @media screen and (max-width: 1090px) {
    width: 90%;
  }
  @media screen and (min-width: 1090px) and (max-width: 1630px) {
    width: 90%;
  }
  @media screen and (min-width: 1631px) and (max-width: 2499px) {
    width: 10%;
  }

  @media screen and (min-width: 2500px) {
    width: 30%;
  }
`;

const Item = ({ images }) => {
  return (
    <ItemCard>
      <div className="img">
        <Image
          src={images}
          layout="fill"
          objectFit="cover"
          objectPosition="center"
        />
      </div>
      <div className="item-name">1인 DESK</div>
      <div className="item-description">최대 1인 이용 가능</div>
      <div className="item-price">
        <div>1시간 단위 예약</div>
        <div>10,000원/시간</div>
      </div>
      <Button type="button">객실 선택</Button>
    </ItemCard>
  );
};

export default Item;
