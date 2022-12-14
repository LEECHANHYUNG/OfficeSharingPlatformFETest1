import React from 'react';
import styled from 'styled-components';
import Card from '../../ui/Card';
import ReviewContent from './ReviewContent';
import Reviewer from './Reviewer';
import ReviewRating from './ReviewRating';

const ReviewCard = styled(Card)`
  border: 2px solid #6a9eff;
  margin: 30px;
  width: 40vw;
  @media screen and (max-width: 758px) {
    margin: 0px;
    margin-top: 10px;
    width: 88vw;
  }
`;

const ReviewItem = ({
  score,
  writer,
  date,
  roomType,
  content,
  commentQuantity,
  ratingId,
}) => {
  return (
    <ReviewCard>
      <ReviewRating score={score} />
      <Reviewer writer={writer} createDate={date} type={roomType} />
      <ReviewContent
        content={content}
        commentQuantity={commentQuantity}
        ratingId={ratingId}
      />
    </ReviewCard>
  );
};

export default ReviewItem;
