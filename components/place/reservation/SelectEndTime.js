import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import { reservationActions } from '../../../store/reservation';
import TimeButton from '../../ui/TimeButton';
const StyledSwiper = styled(Swiper)`
  z-index: 0;

  .active-end {
    height: 40px;
    background: #fff;
    text-align: center;
    cursor: pointer;
    color: #111;
    border: 1px solid #111;
    margin-bottom: 15px;
  }
  .non-active-end {
    height: 40px;
    background: #d3d3d3;
    text-align: center;
    color: #111;
    border: 1px solid #111;
    margin-bottom: 15px;
  }
`;
const SelectEndTime = () => {
  const dispatch = useDispatch();
  const selectedDate = useSelector(
    (state) => state.reservation.date
  ).toLocaleDateString();
  const date = new Date().toLocaleDateString();
  const openingHours = useSelector((state) => state.reservation.openingHours);
  const availableTimeList = useSelector(
    (state) => state.reservation.availableTimeList
  );
  console.log(availableTimeList);
  const nowTime = new Date().getHours();
  const startTime = openingHours[0] > nowTime ? openingHours[0] : nowTime + 1;
  const endTime = openingHours[1];
  const timeArr = new Array(24).fill(0, 0, 24);

  if (date === selectedDate) {
    availableTimeList.map((elem) => timeArr.splice(elem, 1, '1'));
  } else {
    availableTimeList.map((elem) => timeArr.splice(elem, 1, '1'));
  }
  const selectTimeHandler = (e) => {
    const activeTimeList = document.getElementsByClassName('active-end');
    Array.from(activeTimeList).map(
      (elem) => (elem.style.backgroundColor = '#fff')
    );
    e.target.style.backgroundColor = 'rgb(106, 158, 255)';
  };
  return (
    <div className="item">
      <label htmlFor="selectDate">종료 시간 선택</label>
      <div>
        <StyledSwiper slidesPerView={7}>
          {timeArr.map((elem, idx) =>
            elem ? (
              <SwiperSlide
                key={idx}
                className="active-end"
                id={idx}
                onClick={selectTimeHandler}
              >
                <TimeButton time={idx} />
              </SwiperSlide>
            ) : (
              <SwiperSlide key={idx} className="non-active-end">
                <TimeButton time={idx} />
              </SwiperSlide>
            )
          )}
        </StyledSwiper>
      </div>
    </div>
  );
};

export default SelectEndTime;
