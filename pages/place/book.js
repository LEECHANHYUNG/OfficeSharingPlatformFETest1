import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import BookCheck from '../../components/book/BookCheck';
import BookInfo from '../../components/book/BookInfo';
import Mileage from '../../components/book/Mileage';
import Payment from '../../components/book/Payment';
import PaymentMain from '../../components/book/PaymentMain';
import PaymentType from '../../components/book/PaymentType';

const Wrapper = styled.section`
  position: absolute;
  top: 150px;
  width: 100vw;
  main {
    width: 1250px;
    margin: auto;
  }
  .header {
    line-height: 24px;
  }
  h1 {
    margin-left: 20px;
    padding-bottom: 20px;
  }
  .prev-btn {
    display: inline-block;
    margin-right: 20px;
    border-radius: 50%;
    padding: 3px;
    cursor: pointer;
  }
  .prev-btn:hover {
    background: #d9dddc;
  }
  .left {
    width: 64%;
    float: left;
    height: 80vh;
  }
  .right {
    width: 35%;
    float: right;
    height: 80vh;
  }
  .line {
    border-bottom: 3px solid #71716f;
    margin: 0 40px;
  }
`;

const book = () => {
  const router = useRouter();
  const reservationInfo = useSelector(
    (state) => state.reservation.reservationInfo
  );

  const prevPageHandler = () => {
    router.back();
  };
  console.log(reservationInfo);
  return (
    <Wrapper>
      <main>
        <h1>
          <div className="prev-btn">
            <Image
              src="/svg/chevron-left.svg"
              width="28"
              height="26"
              onClick={prevPageHandler}
            />
          </div>
          예약확인 및 결제
        </h1>
        <div className="left">
          <BookCheck />
          <div className="line"></div>
          <BookInfo
            placeName={reservationInfo.placeName}
            productType={reservationInfo.productType}
            reservationStartDate={reservationInfo.reservationStartDate}
            reservationStartTime={reservationInfo.reservationStartTime}
            reservationEndTime={reservationInfo.reservationEndTime}
            reservationEndDate={reservationInfo.reservationEndDate}
          />
          <div className="line"></div>
          <PaymentType totalPrice={reservationInfo.totalPrice} />
          <div className="line"></div>
        </div>
        <div className="right">
          <Payment
            averageRate={reservationInfo.averageRate}
            totalReview={reservationInfo.totalReview}
          />
          <Mileage totalMileage={reservationInfo.totalMileage} />
          <PaymentMain totalPrice={reservationInfo.totalPrice} />
        </div>
      </main>
    </Wrapper>
  );
};

export default book;
