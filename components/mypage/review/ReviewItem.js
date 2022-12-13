import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import CommentList from '../comment/CommentList';

const Wrapper = styled.section`
  min-height: 50px;
  .preview {
    position: relative;
    top: 0px;
    left: 0px;
    width: 100%;
    line-height: 50px;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-top: 2px solid #111;
    overflow-y: hidden;
  }
  & .content {
    position: relative;
    top: 10px;
    line-height: 1.2rem;
    width: 70%;
  }

  & .placeName,
  & .writingTime {
    line-height: 1rem;
    width: 10%;
    min-width: 80px;
  }

  .rating-score {
    width: 10%;
    min-width: 80px;
  }

  & .date,
  & .time {
    line-height: 1.2rem;
  }
  .content-hide {
    display: none;
  }
  &.show {
    height: 300px;
  }
  .content {
    width: 90%;
  }
  &.show .content-hide {
    display: block;
    width: 76%;
  }
  &.show .content {
    display: none;
  }
  .content-hide {
    line-height: 1.2rem;
  }
  .rotate {
    transform: rotateX(180deg);
  }
  .detail {
    position: absolute;
    top: 20px;
    right: 22%;
    cursor: pointer;
  }

  .detail-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: top;
    height: 0px;
    opacity: 0;
    transition: all 0.5s;
  }
  .detail-container.show {
    transition: all 0.5s;
    height: 250px;
    opacity: 1;
  }
  .detail-item {
    width: 400px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .detail-item > div {
    margin-left: 20px;
    font-weight: 600;
    color: #6a9eff;
  }
  .detail-item h3 {
    text-align: left;
  }
  .time {
    display: flex;
    justify-content: space-between;
  }
  .time > div {
    margin-left: 20px;
  }
  .detail-content {
    height: 200px;
  }
  h5 {
    cursor: pointer;
    text-decoration: underline;
  }
  @media screen and (max-width: 1170px) {
    .preview {
      height: 80px;
    }
    .content {
      width: 76%;
      line-height: 1.2rem;
    }

    & .placeName,
    & .writingTime {
      font-size: 1rem;
      width: 15%;
    }
    .content-hide {
      width: 60%;
    }
    .date {
      font-size: 0.7rem;
    }
    .detail {
      right: 30%;
    }
  }

  @media screen and (max-width: 620px) {
    .content {
      width: 60%;
    }
    .writingTime {
      width: 18%;
    }
    .content-hide {
      width: 60%;
    }
    .detail {
      top: 44px;
      left: 2%;
    }
  }
`;
const ReviewItem = ({ item }) => {
  const [commentData, setCommentData] = useState();
  const [paginationData, setPaginationData] = useState();
  const [hide, setHide] = useState(false);
  const showDetailHandler = (e) => {
    e.target.parentNode.nextSibling.classList.toggle('show');
    if (e.target.textContent === '보기▼') {
      e.target.parentNode.parentNode.style.height = '350px';
      e.target.textContent = '접기▲';
      setHide(true);
    } else {
      console.log((e.target.parentNode.parentNode.style.height = '60px'));
      e.target.textContent = '보기▼';
    }
  };
  const session = useSession();
  const showCommentHandler = async (e) => {
    try {
      const response = await axios({
        url: '/api/mypage/mypage',
        method: 'post',
        data: {
          url: `mypage/review/${e.target.id}?page=`,
          accessToken: session.data.user.accessToken,
          page: '1',
        },
      });
      if (response.status === 200) {
        setCommentData(response.data.commentData);
        setPaginationData(response.data.paginationData.maxPage);
        e.target.parentNode.parentNode.style.height = '700px';
        setHide(false);
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error(error.response.message);
    }
  };
  return (
    <Wrapper>
      <div className="preview">
        <div className="rating-score">
          <Image src="/svg/Star.svg" width="18" height="18" />
          {`${item.ratingScore} / 5.0`}
        </div>
        <div className="content">{item.ratingContext.slice(0, 50) + `...`}</div>
        <div className="content-hide">{item.ratingContext}</div>
        <div className="placeName">{item.placeName}</div>
        <div className="writingTime">
          <div className="date">{item.writtenDate}</div>
          <div className="time">{item.writtenTime}</div>
        </div>
        <div className="detail" onClick={showDetailHandler}>
          보기▼
        </div>
      </div>
      <div className="detail-container">
        <div>
          <div className="detail-item">
            <h3>지점명</h3>
            <div>{item.placeName}</div>
          </div>
          <div className="detail-item">
            <h3>상품명</h3>
            <div>{item.RoomType}</div>
          </div>
          <div className="detail-item">
            <h3>이용 기간</h3>
            <div className="time">
              <div className="start">
                <div>{item.ResStartDate}</div>
                <div>{item.resStartTime}</div>
              </div>
              <div className="end">
                <div>{item.ResEndDate}</div>
                <div>{item.resEndTime}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="detail-content">
          <h3>내용</h3>
          <div>{item.ratingContext}</div>
        </div>
        {item.commentQuantity !== '0' ? (
          <h5 id={item.ratingId} onClick={showCommentHandler}>
            댓글 수{item.commentQuantity}개
          </h5>
        ) : (
          '댓글 수 0개'
        )}
        {commentData && item.commentQuantity !== '0' && !hide && (
          <CommentList
            item={commentData}
            paginationData={paginationData}
            ratingId={item.ratingId}
          />
        )}
      </div>
    </Wrapper>
  );
};

export default ReviewItem;
