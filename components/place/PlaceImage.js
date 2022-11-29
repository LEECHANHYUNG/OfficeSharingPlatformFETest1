import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 310px;
  & .line {
    height: 6px;
    background #999;
  }
`;
const PlaceImage = () => {
  return (
    <Wrapper>
      <Image
        src={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkRIBTYZEHyDP5R8Vi9WqysV0LWqc5xcMwvA&usqp=CAU'
        }
        width="500"
        height="300"
        objectFit="fill"
      />
      <div className="line"></div>
    </Wrapper>
  );
};

export default PlaceImage;
