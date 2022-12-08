import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { reservationActions } from '../../../store/reservation';

const SelectStartTime = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [timeList, setTimeList] = useState([]);
  const placeId = router.query.id;
  const selectedTypeEng = useSelector(
    (state) => state.reservation.selectedTypeEng
  );
  const openingHours = useSelector((state) => state.reservation.openingHours);
  const selectedTime = useSelector((state) => state.reservation.date);
  const dateArr = selectedTime.toLocaleDateString().slice(0, -1).split('. ');

  const dateString =
    dateArr[0] +
    '-' +
    dateArr[1].padStart(2, '0') +
    '-' +
    dateArr[2].padStart(2, '0');
  useEffect(() => {
    axios({
      url: '/api/main/available-time',
      method: 'post',
      data: {
        placeId,
        selectedTypeEng,
        date: dateString,
        startTime: openingHours[0] + 2,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          setTimeList(response.data);
        } else {
          throw new Error();
        }
      })
      .catch((error) => {
        alert(
          error.response.data.message?.split(' ').slice(1).join(' ')
            ? error.response.data.message.split(' ').slice(1).join(' ')
            : '일시 오류. 잠시후 다시 시도해주세요'
        );
      });
  }, [dateString]);
  const timeArr = new Array(24).fill(0, 0, 24);
  timeList.map((elem) => {
    timeArr.splice(elem, 1, 1);
  });

  const selectTimeHandler = (e) => {
    const selectedTimeList = document.getElementsByClassName('start-time');
    if (selectedTimeList[0]) {
      selectedTimeList[0].classList.remove('start-time');
    }
    e.target.classList.add('start-time');
    dispatch(reservationActions.getSelectedStartTime(e.target.id));
    axios({
      url: '/api/main/available-time',
      method: 'post',
      data: {
        placeId,
        selectedTypeEng,
        date: dateString,
        startTime: e.target.id,
      },
    })
      .then((response) => {
        if (response.status === 200) {
          dispatch(reservationActions.getTimeList(response.data));
        } else {
          throw new Error();
        }
      })
      .catch((error) => {
        alert(
          error.response.data.message?.split(' ').slice(1).join(' ')
            ? error.response.data.message.split(' ').slice(1).join(' ')
            : '일시 오류. 잠시후 다시 시도해주세요'
        );
      });
  };

  return (
    <div className="item">
      <div>시작 시간 선택</div>
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
  overflow-x: scroll;
  width: 100%;
  .active {
    min-width: 45px;
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
    min-width: 45px;
    height: 40px;
    background: #d3d3d3;
    text-align: center;
    color: #111;
    border: 1px solid #111;
    margin-bottom: 15px;
  }
  .start-time {
    background: rgb(106, 158, 255);
  }
`;

export default SelectStartTime;
