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

const ReviewItem = () => {
  return (
    <ReviewCard>
      <ReviewRating score="3.4" />
      <Reviewer writer={'홍길동'} createDate={'2022-12-02'} type="DESK" />
      <ReviewContent />
    </ReviewCard>
  );
};

export default ReviewItem;
