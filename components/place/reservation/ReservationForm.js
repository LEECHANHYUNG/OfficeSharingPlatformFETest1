import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Card from '../../ui/Card';
import DeskMeetingRoomForm from './DeskMeetingRoomForm';
import OfficeForm from './OfficeForm';
const Wrapper = styled(Card)`
  border: 2px solid #111;
  border-radius: 5px;
  width: 450px;
  position: ${(props) => (props.isFixed ? 'fixed' : 'absolute')};
  top: ${(props) => (props.isFixed ? '' : '400px')};
  h1 {
    font-size: 1.5rem;
  }

  .productForm {
    padding: 20px 20px;
  }
  & .item {
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
  & .time {
    line-height: 40px;
    font-size: 1.2rem;
    font-weight: 800;
    display: block;
    margin-left: 20px;
    color: #111;
  }
  @media screen and (max-width: 1170px) {
    position: relative;
    top: 0px;
    width: 100%;
  }
`;

const ReservationForm = () => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [isFixed, setIsFixed] = useState(true);
  const itemName = useSelector((state) => state.reservation.selectedType);
  const reservationItem = useSelector(
    (state) => state.reservation.reservationItem
  );

  useEffect(() => {
    setIsBrowser(true);
  });
  if (isBrowser) {
    console.log(window.innerWidth);
    window.addEventListener('scroll', () => {
      if (window.scrollY >= 350 && window.innerWidth > 1170) {
        setIsFixed(false);
      } else {
        setIsFixed(true);
      }
    });
  }
  return (
    <Wrapper isFixed={isFixed}>
      <div className="productForm">
        {reservationItem ? (
          <h1>예약 신청</h1>
        ) : (
          <h1>상품 타입을 선택해주세요</h1>
        )}
        {itemName ? (
          <div className="item">
            <label htmlFor="selectProduct">선택 상품명</label>
            <input
              type="text"
              value={reservationItem || ''}
              disabled
              className="formInput"
            />
          </div>
        ) : (
          ''
        )}
        {(itemName === 'desk') | (itemName === 'meetingRoom') ? (
          <DeskMeetingRoomForm />
        ) : (
          ''
        )}
        {itemName === 'office' ? <OfficeForm /> : ''}
      </div>
    </Wrapper>
  );
};

export default ReservationForm;
