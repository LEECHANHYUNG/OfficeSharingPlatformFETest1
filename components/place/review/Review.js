import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Comment from './comment/Comment';
import ReviewBanner from './ReviewBanner';
import ReviewItem from './ReviewItem';

const Wrapper = styled.section`
  width: 70vw;
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
  const selectedCommentId = useSelector(
    (state) => state.place.selectedCommentId
  );
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
          console.log(response.data.reviewData);
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
      {selectedCommentId ? <Comment /> : ''}
      {noReviewMessage.length === 0 ? (
        Object.keys(ratingList).map((elem) => (
          <ReviewItem
            key={ratingList[elem].ratingId}
            ratingId={ratingList[elem].ratingId}
            score={ratingList[elem].ratingScore}
            writer={ratingList[elem].ratingWriter}
            date={ratingList[elem].writeDate}
            roomType={ratingList[elem].usedRoomType}
            content={ratingList[elem].ratingContent}
            commentQuantity={ratingList[elem].commentQuantity}
          />
        ))
      ) : (
        <h1 className="no-review-message">{noReviewMessage}</h1>
      )}
    </Wrapper>
  );
};

export default Review;
