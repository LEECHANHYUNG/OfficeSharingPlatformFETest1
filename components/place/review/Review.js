import React from 'react';
import styled from 'styled-components';
import ReviewBanner from './ReviewBanner';
import ReviewItem from './ReviewItem';

const Wrapper = styled.section`
  width: 60vw;
  border-top: 3px solid #999;
  overflow-x: hidden;
  @media screen and (max-width: 758px) {
    width: 88vw;
  }
`;

const Review = ({ rating, count, ratingList }) => {
  return (
    <Wrapper id="review">
      <ReviewBanner rating={rating} count={count} />
      {ratingList.map((elem, idx) => (
        <ReviewItem
          score={elem.ratingScore}
          writer={elem.ratingWriter}
          date={elem.writeDateTime}
          roomType={elem.usedRoomType}
          content={elem.ratingContent}
        />
      ))}
    </Wrapper>
  );
};

export default Review;
