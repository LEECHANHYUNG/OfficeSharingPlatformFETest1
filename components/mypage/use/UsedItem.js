import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import Button from '../../ui/Button';
const Wrapper = styled.section`
  width: 70vw;
  height: 60px;
  line-height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 2px solid #111;
  overflow-y: hidden;

  .type {
    width: 18%;
  }
  .placeName {
    line-height: 16px;
  }
  .placeName,
  .reservationDate,
  .paymentDate {
    width: 23%;
  }
  .state,
  .review {
    font-weight: 600;
    width: 11%;
    line-height: 18px;
    font-size: 15px;
  }
  .date,
  .time {
    font-weight: 800;
    line-height: 1.2rem;
  }
  .time {
    font-size: 1.3rem;
    color: #6a9eff;
  }
  .after {
    color: #663377;
  }
  .before {
    color: #7eae46;
  }
  .hide,
  .detail {
    display: none;
  }
  .rotate {
    transform: rotateX(180deg);
  }
  .chevron {
    z-index: -1;
  }
  @media screen and (max-width: 1170px) {
    width: 96vw;
  }
  @media screen and (max-width: 858px) {
    overflow: hidden;
    display: inline-block;
    height: 150px;
    width: 91vw;
    line-height: 1rem;
    padding: 10px 20px;

    transition: 0.5s;
    .type {
      line-height: 2rem;
      width: 100%;
      font-size: 1.5rem;
    }
    .placeName {
      line-height: 3rem;
      width: 100%;
      font-size: 1rem;
    }
    .paymentDate,
    .reservationDate {
      width: 100%;
    }

    .reservationDate {
      padding-bottom: 20px;
    }
    .date,
    .time {
      width: 40%;
      display: inline-block;
    }

    .state {
      width: 100%;
    }
    .state .after,
    .state .before {
      position: relative;
      width: 100px;
      top: -180px;
      left: 80%;
    }
    .review {
      width: 100%;
    }

    .hide {
      display: inline-block;
      font-weight: 900;
      color: #888;
      padding-bottom: 2px;
      border-bottom: 2px solid #111;
      margin-bottom: 10px;
    }
    .detail {
      display: inline-block;
      position: relative;
      left: 85%;
      top: -135px;
      text-decoration: underline;
      cursor: pointer;
    }
    &.show {
      height: 300px;
      transition: 0.5s;
    }
  }
`;
const UsedItem = (props) => {
  const showDetailHandler = (e) => {
    e.target.parentNode.parentNode.classList.toggle('show');
    e.target.parentNode.childNodes[1]?.childNodes[1]?.classList.toggle(
      'rotate'
    );
  };
  return (
    <Wrapper>
      <div className="type">{props.item.productType}</div>
      <div className="placeName">{props.item.placeName}</div>
      <div className="hide">예약 시간</div>
      <div className="reservationDate">
        <div className="date">{props.item.reservationStartDate}</div>
        <div className="time">
          {props.item.reservationStartTime} ~ {props.item.reservationEndTime}
        </div>
      </div>
      <div className="hide">결제 시각</div>
      <div className="paymentDate">
        <div className="date">{props.item.reservationCompletedDate}</div>
        <div className="time">{props.item.reservationCompletedTime}</div>
      </div>
      <div className="state">
        {props.item.usageStatus === '이용 완료' ? (
          <p className="after">이용 완료</p>
        ) : props.item.usageStatus === '이용 중' ? (
          <p className="before">이용 중</p>
        ) : (
          <p className="before">이용 전</p>
        )}
      </div>
      <div className="review">
        {props.item.ratingStatus ? (
          <Button>리뷰 작성</Button>
        ) : (
          <Button cancel={true}>예약 취소</Button>
        )}
        <div className="detail" onClick={showDetailHandler}>
          상세정보
          <Image
            src="/svg/chevron-down-black.svg"
            width="15"
            height="15"
            className="chevron"
          ></Image>
        </div>
      </div>
    </Wrapper>
  );
};

export default UsedItem;
