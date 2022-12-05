import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { reservationActions } from '../../../store/reservation';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
import DatePick from '../../ui/DatePick';
import AvailableTime from './AvailableTime';
import SelectEndTime from './SelectEndTime';
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
`;
const ReservationForm = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const itemName = useSelector((state) => state.reservation.reservationItem);
  const selectedTypeEng = useSelector(
    (state) => state.reservation.selectedTypeEng
  );
  const isLoading = useSelector((state) => state.reservation.isLoading);
  const startTime = useSelector((state) => state.reservation.selectedStartTime);
  const selectDate = useSelector((state) => state.reservation.date);
  const dateArr = selectDate.toLocaleString().slice(0, -1).split('. ');
  const dateString =
    dateArr[0] + '-' + dateArr[1].padStart(2, '0') + '-' + dateArr[2];
  const placeId = router.query.id;

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
        {itemName && startTime ? <Button>시간 확인</Button> : ''}
      </div>
    </Wrapper>
  );
};

export default ReservationForm;
