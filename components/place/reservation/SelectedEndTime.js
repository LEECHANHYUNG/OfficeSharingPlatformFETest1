import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import 'swiper/swiper-bundle.min.css';
import { reservationActions } from '../../../store/reservation';

const SelectStartTime = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedDate = useSelector((state) => state.reservation.date);
  const openingHours = useSelector((state) => state.reservation.openingHours);
  const selectedStartTime = useSelector(
    (state) => state.reservation.selectedStartTime
  );
  const selectedEndTime = useSelector(
    (state) => state.reservation.selectedEndTime
  );

  const selectedTypeEng = useSelector(
    (state) => state.reservation.selectedTypeEng
  );
  const placeId = router.query.id;
  const date = new Date().toLocaleDateString();
  const dateArr = selectedDate.toLocaleDateString().slice(0, -1).split('. ');
  const dateString =
    dateArr[0] + '-' + dateArr[1].padStart(2, '0') + '-' + dateArr[2];
  const nowTime = new Date().getHours();
  const startTime = openingHours[0] > nowTime ? openingHours[0] : nowTime + 1;
  const endTime = openingHours[1];
  const timeArr = new Array(24).fill(0, 0, 24);
  const activeTime = document.getElementsByClassName('active');
  if (date === selectedDate.toLocaleDateString()) {
    timeArr.fill(1, startTime, endTime);
  } else {
    timeArr.fill(1, openingHours[0], endTime);
  }
  const selectTimeHandler = async (e) => {
    const selectedTimeList = document.getElementsByClassName('selected');
    if (selectedTimeList.length >= 2) {
      Array.from(selectedTimeList).map((elem) =>
        elem.classList.remove('selected')
      );
      e.target.classList.add('selected');
      dispatch(reservationActions.getSelectedStartTime(e.target.id));
      dispatch(reservationActions.getSelectedEndTime(24));
    } else if (selectedTimeList.length === 0) {
      e.target.classList.add('selected');
      dispatch(reservationActions.getSelectedStartTime(e.target.id));
    } else if (selectedTimeList.length === 1) {
      if (e.target.id < selectedStartTime) {
        dispatch(reservationActions.getSelectedEndTime(selectedStartTime));
        dispatch(reservationActions.getSelectedStartTime(e.target.id));
        e.target.classList.add('selected');
        Array.from(activeTime).map((elem) => {
          if (
            +elem.attributes.id.value > e.target.id &&
            +elem.attributes.id.value < selectedStartTime
          ) {
            elem.classList.add('selected');
          }
        });
      } else {
        dispatch(reservationActions.getSelectedEndTime(e.target.id));
        e.target.classList.add('selected');
        Array.from(activeTime).map((elem) => {
          if (
            +elem.attributes.id.value > selectedStartTime &&
            +elem.attributes.id.value < e.target.id
          ) {
            elem.classList.add('selected');
          }
        });
      }
    }

    try {
      const response = await fetch('/api/main/available-time', {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({
          placeId,
          type: selectedTypeEng,
          date: dateString,
          startTime: e.target.id,
        }),
      });
      if (!response.ok) {
        throw new Error(response.message);
      }
      const data = await response.json();

      Array.from(activeTime).map((elem) => {
        if (!data.timeList.includes(+elem.attributes.id.value)) {
          elem.classList.remove('active');
          elem.classList.add('unavailable');
          elem.onclick = () => {};
        }
      });
    } catch (err) {}
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
  .selected {
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

export default SelectStartTime;
