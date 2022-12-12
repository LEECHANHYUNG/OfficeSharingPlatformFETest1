import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  line-height: 50px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #111;
  overflow-y: hidden;
  & .content {
    position: relative;
    top: 10px;
    line-height: 1.2rem;
    width: 76%;
  }

  & .placeName,
  & .writingTime {
    width: 12%;
  }
  .detail {
    text-align: right;
    width: 10%;
    padding-right: 15px;
  }
  & .date,
  & .time {
    line-height: 1.2rem;
  }
  transition: 0.5s;
  .content-hide {
    display: none;
  }
  &.show {
    height: 300px;
    transition: 0.5s;
  }
  .content {
    display: block;
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
  @media screen and (max-width: 1170px) {
    margin-bottom: 20px;
    .content {
      width: 76%;
      line-height: 1.2rem;
    }
    .detail {
      display: inline-block;
      position: relative;
      top: 20px;
      width: 20%;
      cursor: pointer;
    }
    & .placeName,
    & .writingTime {
      font-size: 1rem;
      width: 13%;
    }
    .content-hide {
      width: 60%;
    }
    .date {
      font-size: 0.7rem;
    }
  }

  @media screen and (max-width: 620px) {
    overflow: hidden;
    .content {
      width: 60%;
    }
    .placeName {
      position: relative;
      right: 0px;
      top: 40px;
      font-weight: 900;
      width: 0%;
    }
    .writingTime {
      width: 18%;
    }
    .content-hide {
      width: 60%;
    }
  }
`;
const CommentItem = ({ item }) => {
  const showDetailHandler = (e) => {
    e.target.parentNode.classList.toggle('show');
    e.target.parentNode.childNodes[2]?.childNodes[1]?.classList.toggle(
      'rotate'
    );
    console.log(e.target.parentNode.childNodes[2]?.textContent);
    if (e.target.parentNode.childNodes[2]?.textContent === '보기▼') {
      e.target.parentNode.childNodes[2].textContent = '접기▲';
    } else {
      e.target.parentNode.childNodes[2].textContent = '보기▼';
    }
  };
  return (
    <Wrapper>
      <div className="content">{item.context.slice(0, 50) + `...`}</div>
      <div className="content-hide">{item.context}</div>
      <div className="detail" onClick={showDetailHandler}>
        보기▼
      </div>
      <div className="placeName">{item.placeName}</div>
      <div className="writingTime">
        <div className="date">{item.writtenDate}</div>
        <div className="time">{item.writtenTime}</div>
      </div>
    </Wrapper>
  );
};

export default CommentItem;
