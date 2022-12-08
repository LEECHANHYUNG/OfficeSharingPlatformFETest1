import React, { useRef } from 'react';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { reservationActions } from '../../store/reservation';

const StyledDate = styled(DatePicker)`
  margin-top: 10px;
  width: 250px;
  height: 40px;
  text-align: center;
  font-size: 1.4rem;
`;

const DatePick = () => {
  const dispatch = useDispatch();
  const dateInputRef = useRef();
  const [selectDate, setSelectDate] = useState(new Date());
  const unableDateList = useSelector(
    (state) => state.reservation.unableDateList
  );
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const date = new Date().getDate();

  const changeDateHandler = (date) => {
    setSelectDate(date);
    dispatch(reservationActions.selectDate(date));
  };
  return (
    <StyledDate
      selected={selectDate}
      minDate={new Date()}
      maxDate={new Date(year + 3, month, date)}
      dateFormat="yyyy-MM-dd"
      ref={dateInputRef}
      onChange={changeDateHandler}
      excludeDates={unableDateList}
    />
  );
};

export default DatePick;
