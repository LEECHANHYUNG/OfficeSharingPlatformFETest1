import React from 'react';
import styled from 'styled-components';
import Card from '../../ui/Card';
import ReviewContent from './ReviewContent';
import Reviewer from './Reviewer';
import ReviewRating from './ReviewRating';

const ReviewCard = styled(Card)`
  border: 2px solid #6a9eff;
  margin: 30px;
`;

const ReviewItem = ({ score, writer, date, roomType, content }) => {
  return (
    <ReviewCard>
      <ReviewRating score={score} />
      <Reviewer writer={writer} createDate={date} type={roomType} />
      <ReviewContent content={content} />
    </ReviewCard>
  );
};

export default ReviewItem;
