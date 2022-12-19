import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import BookCheck from '../../components/book/BookCheck';
import BookInfo from '../../components/book/BookInfo';
import Mileage from '../../components/book/Mileage';
import Payment from '../../components/book/Payment';
import PaymentForm from '../../components/book/PaymentForm';
import CreditCardForm from '../../components/book/PaymentForm/CreditCardForm';
import PaymentMain from '../../components/book/PaymentMain';
import PaymentType from '../../components/book/PaymentType';
import Button from '../../components/ui/Button';
import { paymentSliceActions } from '../../store/payment';

const Wrapper = styled.section`
  position: absolute;
  top: 150px;
  width: 98vw;
  padding-bottom: 300px;
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

  .left {
    width: 64%;
    float: left;
    height: 40vh;
  }
  .right {
    width: 35%;
    float: right;
    height: 80vh;
  }
  .right .prev-btn {
    display: flex;
    font-size: 1.3rem;
    font-weight: 900;
  }
  .line {
    border-bottom: 3px solid #71716f;
    margin: 0 40px;
  }
`;

const book = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const reservationInfo = useSelector(
    (state) => state.reservation.reservationInfo
  );
  const showPaymentForm = useSelector((state) => state.payment.showForm);
  const paymentType = useSelector((state) => state.payment.paymentType);
  const company = useSelector((state) => state.payment.company);
  const prevPageHandler = () => {
    router.back();
  };
  const changePaymentHandler = () => {
    dispatch(paymentSliceActions.getPaymentForm(false));
    dispatch(paymentSliceActions.resetPaymentInfo());
  };
  const sendReservationHandler = () => {
    router.replace(`/reservation/${reservationInfo.reservationId}`);
  };
  const isOffice = reservationInfo.productType?.includes('사무실');
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
          {!showPaymentForm ? (
            <PaymentType
              totalPrice={reservationInfo.totalPrice}
              productType={reservationInfo.productType}
            />
          ) : (
            ''
          )}

          {isOffice && paymentType ? (
            <Button onClick={sendReservationHandler}>임대 신청</Button>
          ) : (
            ''
          )}
        </div>
        {paymentType ? (
          <aside className="right">
            {showPaymentForm ? (
              <div className="prev-btn">
                <Image
                  src="/svg/chevron-left.svg"
                  width="28"
                  height="26"
                  onClick={changePaymentHandler}
                />
                <div className="prev-comment">결제 방법 변경</div>
              </div>
            ) : (
              ''
            )}
            {!showPaymentForm && !isOffice ? (
              <Payment
                placeImgUrl={reservationInfo.placeImgUrl}
                averageRate={reservationInfo.averageRate}
                totalReview={reservationInfo.totalReview}
              />
            ) : (
              ''
            )}
            {!showPaymentForm && !isOffice ? (
              <Mileage
                totalMileage={reservationInfo.totalMileage}
                totalPrice={reservationInfo.totalPrice}
              />
            ) : (
              ''
            )}
            {!showPaymentForm && !isOffice ? (
              <PaymentMain totalPrice={reservationInfo.totalPrice} />
            ) : (
              ''
            )}
            {showPaymentForm && !isOffice ? (
              <PaymentForm reservationId={reservationInfo.reservationId} />
            ) : (
              ''
            )}

            {showPaymentForm && !isOffice && company === 'nicepay' ? (
              <CreditCardForm />
            ) : (
              ''
            )}
          </aside>
        ) : (
          ''
        )}
      </main>
    </Wrapper>
  );
};

export default book;
