import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import DatePick from '../../ui/DatePick';
import SelectStartTime from './SelectStartTime';
const Wrapper = styled(Card)`
  border: 2px solid #111;
  border-radius: 5px;
  min-width: 400px;
  h1 {
    font-size: 1.5rem;
  }

  .productForm {
    padding: 20px 20px;
  }
  .item {
    margin: 30px 0;
    font-weight: 900;
    color: #6a9eff;
  }

  .formInput {
    border: none;
    font-size: 1.5rem;
    margin-left: 20px;
    color: #111;
    font-weight: 500;
    background: #fff;
    width: 80%;
  }
  .payment-btn {
    border-radius: 6px;
    height: 40px;
    width: 70%;
    margin: 50px auto;
    text-align: center;
    line-height: 40px;
    background: #6a9eff;
    font-weight: 900;
  }
  .time {
    line-height: 40px;
    font-size: 1.2rem;
    font-weight: 800;
    display: block;
    margin-left: 20px;
    color: #111;
  }
`;

const ReservationForm = () => {
  const isLoading = useSelector((state) => state.reservation.isLoading);
  const itemName = useSelector((state) => state.reservation.reservationItem);
  const startTime = useSelector((state) => state.reservation.selectedStartTime);
  const selectedStartTime = useSelector(
    (state) => state.reservation.selectedStartTime
  );
  const selectedEndTime = useSelector(
    (state) => state.reservation.selectedEndTime
  );

  return (
    <Wrapper>
      <div className="productForm">
        {itemName ? <h1>예약 신청</h1> : <h1>예약하실 상품을 선택해주세요</h1>}
        {itemName ? (
          <div className="item">
            <label htmlFor="selectProduct">선택 상품명</label>
            <input
              type="text"
              value={itemName || ''}
              disabled
              className="formInput"
            />
          </div>
        ) : (
          ''
        )}
        {itemName ? (
          <div className="item">
            <label htmlFor="selectDate">이용 날짜 선택</label>
            {isLoading ? <div>Loading...</div> : <DatePick />}
          </div>
        ) : (
          ''
        )}
        {itemName && !isLoading ? <SelectStartTime /> : ''}
        <div className="item">
          선택 시간
          {!isLoading ? (
            <div className="time">{`시작 시간     : ${
              selectedStartTime ? selectedStartTime + ':00' : ''
            }`}</div>
          ) : (
            ''
          )}
          {!isLoading ? (
            <div className="time">{`종료 시간     :${
              selectedEndTime ? selectedEndTime + ':50' : ''
            }`}</div>
          ) : (
            ''
          )}
        </div>

        {itemName && startTime ? (
          <div className="payment-btn">
            <Link href="/">결제</Link>
          </div>
        ) : (
          ''
        )}
      </div>
    </Wrapper>
  );
};

export default ReservationForm;
