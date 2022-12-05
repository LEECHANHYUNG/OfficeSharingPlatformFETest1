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
  const unableDateList = useSelector(
    (state) => state.reservation.unableDateList
  );
  const year = new Date().getFullYear();
  const month = new Date().getMonth();
  const date = new Date().getDate();

  const selectDateHandler = (date) => {
    dispatch(reservationActions.selectDate(date));
  };
  const dispatch = useDispatch();
  const dateInputRef = useRef();
  const [selectDate, setSelectDate] = useState(new Date());
  return (
    <StyledDate
      selected={selectDate}
      minDate={new Date()}
      maxDate={new Date(year + 1, month, date - 1)}
      dateFormat="yyyy-MM-dd"
      ref={dateInputRef}
      onChange={(date) => {
        setSelectDate((prevState) => (prevState = date));
        dispatch(reservationActions.selectDate(date.toLocaleDateString()));
      }}
      onSelect={selectDateHandler}
      excludeDates={unableDateList}
    />
  );
};

export default DatePick;
