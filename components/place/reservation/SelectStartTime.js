import { useRouter } from 'next/router';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { reservationActions } from '../../../store/reservation';
import TimeButton from '../../ui/TimeButton';
const StyledSwiper = styled(Swiper)`
  z-index: 0;

  .active {
    height: 40px;
    background: #fff;
    text-align: center;
    cursor: pointer;
    color: #111;
    border: 1px solid #111;
    margin-bottom: 15px;
  }
  .non-active {
    height: 40px;
    background: #d3d3d3;
    text-align: center;
    color: #111;
    border: 1px solid #111;
    margin-bottom: 15px;
  }
`;
const SelectStartTime = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const selectedDate = useSelector(
    (state) => state.reservation.date
  ).toLocaleDateString();
  const placeId = router.query.id;
  const date = new Date().toLocaleDateString();
  const openingHours = useSelector((state) => state.reservation.openingHours);
  const selectedTypeEng = useSelector(
    (state) => state.reservation.selectedTypeEng
  );
  const dateArr = selectedDate.slice(0, -1).split('. ');
  const dateString =
    dateArr[0] + '-' + dateArr[1].padStart(2, '0') + '-' + dateArr[2];
  const nowTime = new Date().getHours();
  const startTime = openingHours[0] > nowTime ? openingHours[0] : nowTime + 1;
  const endTime = openingHours[1];
  const timeArr = new Array(24).fill(0, 0, 24);
  if (date === selectedDate) {
    timeArr.fill(1, startTime, endTime);
  } else {
    timeArr.fill(1, openingHours[0], endTime);
  }
  const selectTimeHandler = async (e) => {
    const activeTimeList = document.getElementsByClassName('active');
    Array.from(activeTimeList).map(
      (elem) => (elem.style.backgroundColor = '#fff')
    );
    e.target.style.backgroundColor = 'rgb(106, 158, 255)';
    dispatch(reservationActions.getSelectedStartTime(e.target.id));

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
      console.log(data.timeList);
      dispatch(reservationActions.getAvailableTimeList(data.timeList));
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="item">
      <label htmlFor="selectDate">시작 시간 선택</label>
      <div>
        <StyledSwiper slidesPerView={7}>
          {timeArr.map((elem, idx) =>
            elem ? (
              <SwiperSlide
                key={idx}
                className="active"
                id={idx}
                onClick={selectTimeHandler}
              >
                <TimeButton time={idx} />
              </SwiperSlide>
            ) : (
              <SwiperSlide key={idx} className="non-active">
                <TimeButton time={idx} />
              </SwiperSlide>
            )
          )}
        </StyledSwiper>
      </div>
    </div>
  );
};

export default SelectStartTime;
