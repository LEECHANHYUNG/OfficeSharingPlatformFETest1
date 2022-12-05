import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper';

const StyledSwiper = styled(Swiper)`
  width: 100%;
  .swiper-slide {
    height: 400px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 400px;
  margin: auto;
  position: relative;
  margin-top: 50px;
  .img {
    height: 100%;
  }
  .left,
  .right {
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    font-size: 3rem;
    color: #fff;
    cursor: pointer;
  }
  .right {
    right: 10px;
    color: #111;
  }
  .left {
    left: 10px;
    color: #111;
  }
`;
const PlaceImage = ({ images }) => {
  return (
    <Wrapper>
      <StyledSwiper navigation={true} modules={[Navigation]}>
        {images.map((image) => (
          <SwiperSlide slidesperview={1} className="swiper-slide">
            <Image
              key={image}
              src={image}
              layout="fill"
              objectFit="scale-down"
              objectPosition="center"
              className="img"
              blurDataURL="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFklEQVR42mN8//HLfwYiAOOoQvoqBABbWyZJf74GZgAAAABJRU5ErkJggg=="
              priority
            />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Wrapper>
  );
};

export default PlaceImage;
