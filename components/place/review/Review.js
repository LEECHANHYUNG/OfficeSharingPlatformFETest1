import React from 'react';
import styled from 'styled-components';
import ReviewBanner from './ReviewBanner';
import ReviewItem from './ReviewItem';

const Wrapper = styled.section`
  width: 60vw;
  border-top: 3px solid #999;
  height: 90vh;
  overflow-x: hidden;
  @media screen and (max-width: 758px) {
    width: 88vw;
  }
`;

const Review = ({ rating, count }) => {
  return (
    <Wrapper id="review">
      <ReviewBanner rating={rating} count={count} />
      <ReviewItem />
      <ReviewItem />
    </Wrapper>
  );
};

export default Review;
