import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  top: 30px;
  width: 1048px;
  min-width: 500px;
  height: 524px;
  text-align: center;
  margin: 0 auto;

  & .left {
    float: left;
    position: relative;
    width: 50%;
    height: 100%;
    object-fit: 'contain';
    border: 6px solid transparent;
  }
  & .left-img {
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
  }
  & .right {
    float: right;
    width: 50%;
    height: 100%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    display: flex;
    flex-wrap: wrap;
  }

  & .right-item {
    position: relative;
    width: 50%;
    height: 50%;
    border-radius: 0;
    border: 6px solid transparent;
  }
  & .right-item:nth-child(2) .right-img {
    border-top-right-radius: 20px;
  }
  & .right-item:nth-child(4) .right-img {
    border-bottom-right-radius: 20px;
  }
  @media screen and (max-width: 1170px) {
    width: 80%;
    height: calc(50vw * 0.8);
  }
`;

const PlaceMainImage = () => {
  return (
    <Wrapper>
      <div className="left">
        <Image
          src="/image/place1.jpg"
          width="300"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          className="left-img"
        />
      </div>
      <div className="right">
        <div className="right-item">
          <Image
            src="/image/place2.jpg"
            width="250"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="right-img"
          />
        </div>
        <div className="right-item">
          <Image
            src="/image/place3.jpg"
            width="250"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="right-img"
          />
        </div>
        <div className="right-item">
          <Image
            src="/image/place4.jpg"
            width="250"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="right-img"
          />
        </div>
        <div className="right-item">
          <Image
            src="/image/place5.jpg"
            width="250"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            className="right-img"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default PlaceMainImage;
