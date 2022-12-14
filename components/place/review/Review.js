import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
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
  .no-review-message {
    text-align: center;
    line-height: 50px;
  }
`;

const Review = ({ rating, count }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [ratingList, setRatingList] = useState({});
  const [maxPage, setMaxPage] = useState(0);
  const [noReviewMessage, setNoReviewMessage] = useState('');
  const params = useRouter();
  const placeId = params.query.id;
  useEffect(() => {
    const fetchReviewData = async () => {
      try {
        const response = await axios({
          url: `/api/main/review`,
          method: 'post',
          data: {
            placeId,
            currentPage,
          },
        });
        if (response.status === 200) {
          setRatingList(response.data.reviewData);
          setMaxPage(response.data.paginationData.maxPage);
        } else {
          throw new Error(response.data);
        }
      } catch (error) {
        setNoReviewMessage(error.response.data.message);
      }
    };
    fetchReviewData();
  }, []);
  console.log(noReviewMessage);
  return (
    <Wrapper id="review">
      <ReviewBanner rating={rating} count={count} />
      {noReviewMessage.length === 0 ? (
        Object.keys(ratingList).map((elem) => (
          <ReviewItem
            key={ratingList[elem].ratingId}
            score={ratingList[elem].ratingScore}
            writer={ratingList[elem].ratingWriter}
            date={ratingList[elem].writeDateTime}
            roomType={ratingList[elem].usedRoomType}
            content={ratingList[elem].ratingContent}
          />
        ))
      ) : (
        <h1 className="no-review-message">{noReviewMessage}</h1>
      )}
    </Wrapper>
  );
};

export default Review;
