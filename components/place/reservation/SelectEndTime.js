import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { reservationActions } from '../../../store/reservation';
const StyledSwiper = styled.div`
  z-index: 0;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  font-weight: 900;

  .active-box {
    width: 16%;
    height: 40px;
    background: #fff;
    text-align: center;
    cursor: pointer;
    color: #111;
    border: 1px solid #111;
    margin-bottom: 15px;
  }
  .non-active {
    width: 16%;
    height: 40px;
    background: #d3d3d3;
    text-align: center;
    color: #111;
    border: 1px solid #111;
    margin-bottom: 15px;
  }
  .selected-time {
    background: rgb(106, 158, 255);
  }
  .unavailable {
    width: 16%;
    height: 40px;
    background: #ff3399;
    text-align: center;
    color: #111;
    border: 1px solid #111;
    margin-bottom: 15px;
  }
`;

const SelectEndTime = () => {
  const dispatch = useDispatch();
  const timeList = useSelector((state) => state.reservation.timeList);
  const selectedStartTime = useSelector(
    (state) => state.reservation.selectedStartTime
  );
  const selectedEndTime = useSelector(
    (state) => state.reservation.selectedEndTime
  );
  const timeArr = new Array(24).fill(0, 0, 24);
  timeList.map((elem) => timeArr.splice(elem, 1, 1));
  const activeTimeBox = document.getElementsByClassName('active-box');

  const selectedTimeList = document.getElementsByClassName('selected-time');
  const selectTimeHandler = (e) => {
    if (+selectedStartTime > +e.target.id && +selectedEndTime === 24) {
      dispatch(reservationActions.getSelectedStartTime(e.target.id));
      console.log(1);
    } else if (selectedTimeList.length === 1 && selectedEndTime === 24) {
      dispatch(reservationActions.getSelectedEndTime(e.target.id));
      e.target.classList.add('selected-time');
      Array.from(activeTimeBox).map((elem) => {
        if (+elem.id > +selectedStartTime && +elem.id < +e.target.id) {
          elem.classList.add('selected-time');
        }
      });
      console.log(2);
    } else if (selectedTimeList.length === 1 && selectedEndTime !== 24) {
      selectedTimeList[0].classList.remove('selected-time');
      dispatch(reservationActions.getSelectedStartTime(e.target.id));
      dispatch(reservationActions.getSelectedEndTime(24));
      e.target.classList.add('selected-time');
      console.log(3);
    } else if (selectedTimeList.length >= 2) {
      Array.from(selectedTimeList).map((elem) =>
        elem.classList.remove('selected-time')
      );
      e.target.classList.add('selected-time');
      dispatch(reservationActions.getSelectedStartTime(e.target.id));
      dispatch(reservationActions.getSelectedEndTime(24));
      console.log(4);
    } else {
      console.log(5);
    }
  };

  return (
    <div>
      <label htmlFor="selectDate">
        {selectedStartTime ? '종료 시간 선택' : '예약 or 시작 시간 선택'}
      </label>
      <StyledSwiper>
        {timeArr.map((elem, idx) =>
          elem ? (
            idx === +selectedStartTime ? (
              <div
                key={idx}
                className="active-box selected-time"
                id={idx}
                onClick={selectTimeHandler}
              >
                {idx}:00
              </div>
            ) : (
              <div
                key={idx}
                className="active-box"
                id={idx}
                onClick={selectTimeHandler}
              >
                {idx}:00
              </div>
            )
          ) : (
            <div key={idx} className="non-active">
              {idx}:00
            </div>
          )
        )}
      </StyledSwiper>
    </div>
  );
};

export default SelectEndTime;
