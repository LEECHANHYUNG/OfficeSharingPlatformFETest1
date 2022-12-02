import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { reservationActions } from '../../../store/reservation';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import DatePick from '../../ui/DatePick';
import AvailableTime from './AvailableTime';
const Wrapper = styled(Card)`
  border: 2px solid #111;
  border-radius: 5px;
  .productForm {
    padding: 20px 20px;
  }
  .formInput {
    border: none;
    font-size: 2rem;
    margin-left: 20px;
    color: #111;
    font-weight: 500;
    background: #fff;
    width: 80%;
  }
`;
const ReservationForm = () => {
  const dispatch = useDispatch();
  const itemName = useSelector((state) => state.reservation.itemName);
  const itemPrice = useSelector((state) => state.reservation.itemPrice);
  const availableTimeList = (data) => {
    let timeArr = new Array(24);
    timeArr.fill(0, 0, 24);
    data.forEach((elem) => {
      if (elem !== 0) {
        timeArr[elem] += 1;
      }
    });
    return timeArr;
  };
  const checkAvailableTime = async () => {
    dispatch(reservationActions.deleteList());
    dispatch(reservationActions.showTimeLine());
    try {
      setIsLoading(true);
      const response = await fetch(
        'https://react-http-673e2-default-rtdb.firebaseio.com/timeList.json'
      );
      if (!response.ok) {
        throw new Error('Something went Wrong');
      }
      const data = await response.json();
      dispatch(
        reservationActions.checkTimeList(availableTimeList(data.timeList))
      );
      dispatch(reservationActions.getTimeList(data.timeList));
    } catch (err) {
      return err;
    }
  };

  return (
    <Wrapper>
      <form className="productForm">
        <h1>예약 신청</h1>
        <div>
          <label htmlFor="selectProduct">선택 상품명</label>
          <input
            type="text"
            value={itemName || ''}
            disabled
            className="formInput"
          />
        </div>
        <div>
          <label htmlFor="selectDate">이용 날짜 선택</label>
          <DatePick />
        </div>
        <div>
          <label htmlFor="totalPrice">결제 금액</label>
          <input
            type="text"
            className="formInput"
            disabled
            value={itemPrice || ''}
          />
        </div>
        <Button onClick={checkAvailableTime}>시간 확인</Button>
      </form>

      <AvailableTime />
    </Wrapper>
  );
};

export default ReservationForm;
