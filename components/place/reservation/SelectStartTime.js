import axios from 'axios';
import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { reservationActions } from '../../../store/reservation';

const SelectStartTime = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const placeId = router.query.id;
  const selectedTypeEng = useSelector(
    (state) => state.reservation.selectedTypeEng
  );
  const selectedTime = useSelector((state) => state.reservation.date);
  const dateArr = selectedTime.toLocaleDateString().slice(0, -1).split('. ');
  const ableDateList = useSelector((state) => state.reservation.ableDateList);
  const dateString =
    dateArr[0] +
    '-' +
    dateArr[1].padStart(2, '0') +
    '-' +
    dateArr[2].padStart(2, '0');
  const timeArr = new Array(24).fill(0, 0, 24);

  ableDateList.map((elem) => {
    if (
      elem.date.year === +dateArr[0] &&
      elem.date.month === +dateArr[1] &&
      elem.date.day === +dateArr[2]
    ) {
      console.log(elem);
      for (const time in elem.date.timeStates.timeStates) {
        if (elem.date.timeStates.timeStates[time]) {
          timeArr.splice(time, 1, 1);
        }
      }
    }
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
