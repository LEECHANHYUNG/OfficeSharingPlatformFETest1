import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.section`
  width: 100%;
  padding: 30px 0;
  border-bottom: 3px solid #999;
  h1 {
    font-size: 1.5rem;
  }
  .description {
    margin-top: 30px;
    margin-left: 30px;
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
`;
const PlaceDescription = ({ description }) => {
  return (
    <Wrapper>
      <h1>Place 설명</h1>
      <div className="description">{description}</div>
    </Wrapper>
  );
};

export default PlaceDescription;
