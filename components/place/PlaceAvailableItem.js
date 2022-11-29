import React from 'react';
import styled from 'styled-components';
import Desk from './item/Desk';
const Wrapper = styled.section`
  width: 100%;
  margin-top: 20px;
  padding: 0 30px;
  & h1 {
    padding: 0 30px;
    font-size: 1rem;
    font-weight: 900;
  }
`;
const PlaceAvailableItem = () => {
  return (
    <Wrapper>
      <h1>이용 가능 상품</h1>
      <Desk />
      <Desk />
      <Desk />
    </Wrapper>
  );
};

export default PlaceAvailableItem;
