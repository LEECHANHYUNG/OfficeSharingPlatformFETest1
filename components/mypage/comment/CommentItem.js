import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  line-height: 50px;
  height: ${(props) => (props.reviewComment ? '36px' : '100px')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 2px solid #111;
  overflow-y: hidden;
  .content {
    position: relative;
    top: 10px;
    line-height: 1.2rem;
    width: 76%;
  }

  .placeName,
  .writingTime {
    word-break: break-all;
    line-height: 1.2rem;
    width: 12%;
  }
  .detail {
    position: absolute;
    left: 0;
    bottom: 0px;
    text-align: center;
    width: 100%;
    border: 1px solid #111;
    line-height: 1.2rem;
    cursor: pointer;
  }
  .date,
  .time {
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
  .show .content-hide {
    display: block;
    width: 76%;
  }
  .show .content {
    display: none;
  }
  .content-hide {
    line-height: 1.2rem;
  }
  .rotate {
    transform: rotateX(180deg);
  }
  @media screen and (max-width: 1170px) {
    .content {
      width: 50%;
      line-height: 1.2rem;
    }

    .placeName,
    .writingTime {
      font-size: 1rem;
      width: 15%;
    }
    .placeName {
      width: 35%;
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
      width: 100%;
      position: absolute;
      left: 0px;
      top: 0px;
      font-weight: 900;
    }
    .writingTime {
      width: 18%;
    }
    .content-hide {
      width: 60%;
    }
  }
`;
const CommentItem = ({ item, reviewComment }) => {
  const showDetailHandler = (e) => {
    e.target.parentNode.classList.toggle('show');
    e.target.parentNode.childNodes[2]?.childNodes[1]?.classList.toggle(
      'rotate'
    );
    if (e.target.parentNode.childNodes[4]?.textContent === '보기▼') {
      e.target.parentNode.childNodes[4].textContent = '접기▲';
    } else {
      e.target.parentNode.childNodes[4].textContent = '보기▼';
    }
  };
  return (
    <Wrapper reviewComment={reviewComment || false}>
      <div className="content">{item.context.slice(0, 50) + `...`}</div>
      <div className="content-hide">{item.context}</div>
      <div className="placeName">{item.placeName || item.writer}</div>
      <div className="writingTime">
        <div className="date">{item.writtenDate}</div>
        <div className="time">{item.writtenTime}</div>
      </div>
      <div className="detail" onClick={showDetailHandler}>
        보기▼
      </div>
    </Wrapper>
  );
};

export default CommentItem;
