import Image from 'next/image';
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
  & .review-avg{
    position: relative;
    margin : 0;
    width : 80px;
    left : 20px;
    top : 15px;
    display: flex;
  }
  & .review-avg div{
    margin-left : 10px;
    font-weight: 900;
    font-size : 0.9rem;
  }
`;
const PlaceInfo = ({ placeName, description, address, rating }) => {
  return (
    <Wrapper>
      {Number(rating) ? (
        <div className="review-avg">
          <Image src="/svg/star.svg" width="16" height="16" />
          <div>{`${rating}/5.0`}</div>
        </div>
      ) : (
        ''
      )}
      <div className="place-name">{placeName}</div>
      <div className="place-description">{description}</div>
      <div className="place-address">{address} </div>
      <div className="line"></div>
    </Wrapper>
  );
};

export default PlaceInfo;
