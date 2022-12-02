import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  margin: auto;
  position: relative;
  .img {
    display: block;
  }
  .left,
  .right {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 3rem;
    z-index: 100;
    color: #fff;
  }
  .right {
    right: 10px;
  }
  .left {
    left: 10px;
  }
`;
const PlaceImage = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const prevHandler = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const nextHandler = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <Wrapper>
      <Image
        key={images[currentIndex]}
        src={images[currentIndex]}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        className="img"
      />
      <div className="left" onClick={prevHandler}>
        {'<'}
      </div>
      <div className="right" onClick={nextHandler}>
        {'>'}
      </div>
    </Wrapper>
  );
};

export default PlaceImage;
