import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  width: 300px;
  height: 200px;
  margin: auto;
`;
const PlaceImage = () => {
  return (
    <Wrapper>
      <Image
        src={
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkRIBTYZEHyDP5R8Vi9WqysV0LWqc5xcMwvA&usqp=CAU'
        }
        width="500"
        height="200"
        objectFit="fill"
      />
    </Wrapper>
  );
};

export default PlaceImage;
