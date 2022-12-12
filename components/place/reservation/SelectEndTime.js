import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { reservationActions } from '../../../store/reservation';

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

  const selectTimeHandler = async (e) => {
    const selectedTimeList = document.getElementsByClassName('end-time');
    if (selectedTimeList[0]) {
      selectedTimeList[0].classList.remove('end-time');
    }
    e.target.classList.add('end-time');
    dispatch(reservationActions.getSelectedEndTime(e.target.id));
  };

  return (
    <div className="item">
      <label htmlFor="selectDate">
        {selectedStartTime ? '종료 시간 선택' : '시작 시간 선택'}
      </label>
      <div>
        <StyledSwiper>
          {timeArr.map((elem, idx) =>
            elem ? (
              <div
                key={idx}
                className="active"
                id={idx}
                onClick={selectTimeHandler}
              >
                {idx}:00
              </div>
            ) : (
              <div key={idx} className="non-active">
                {idx}:00
              </div>
            )
          )}
        </StyledSwiper>
      </div>
    </div>
  );
};
const StyledSwiper = styled.div`
  z-index: 0;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  .active {
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
  .end-time {
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

export default SelectEndTime;
