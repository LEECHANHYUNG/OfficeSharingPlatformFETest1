import Link from 'next/link';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const Wrapper = styled.section`
  @media screen and (max-width: 1170px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`;
const StyledDate = styled(DatePicker)`
  margin-top: 10px;
  width: 250px;
  height: 40px;
  text-align: center;
  font-size: 1.4rem;
`;

const OfficeForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isStartDateSelcted, setStartDateSelected] = useState(false);
  const [isEndDateSelcted, setEndDateSelected] = useState(false);
  const reservationItem = useSelector(
    (state) => state.reservation.reservationItem
  );
  const changeStartDateHandler = (date) => {
    if (date > endDate) {
      setEndDate(date);
    }
    setStartDate(date);
    setStartDateSelected(true);
  };

  return (
    <div>
      {reservationItem ? (
        <Wrapper>
          <div className="item">
            <div>시작 날짜</div>
            <div>
              <StyledDate
                selected={startDate}
                onChange={changeStartDateHandler}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                minDate={new Date()}
                maxDate={
                  new Date(
                    new Date().getFullYear() + 2,
                    new Date().getMonth(),
                    new Date().getDate() - 1
                  )
                }
                dateFormat="yyyy-MM-dd"
              />
            </div>
          </div>
          {isStartDateSelcted ? (
            <div className="item">
              <div>종료 날짜</div>
              <div>
                <StyledDate
                  selected={endDate}
                  onChange={(date) => setEndDate(date)}
                  onSelect={() => setEndDateSelected(true)}
                  selectsEnd
                  startDate={startDate}
                  endDate={endDate}
                  minDate={startDate}
                  dateFormat="yyyy-MM-dd"
                  maxDate={
                    new Date(
                      new Date().getFullYear() + 2,
                      new Date().getMonth(),
                      new Date().getDate() - 1
                    )
                  }
                />
              </div>
            </div>
          ) : (
            ''
          )}
        </Wrapper>
      ) : (
        ''
      )}
      {isEndDateSelcted ? (
        <div className="payment-btn">
          <Link href="/">예약</Link>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default OfficeForm;
