import axios from 'axios';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { reservationActions } from '../../../store/reservation';
import Button from '../../ui/Button';

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
  const dispatch = useDispatch();
  const router = useRouter();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [isStartDateSelcted, setStartDateSelected] = useState(false);
  const [isEndDateSelcted, setEndDateSelected] = useState(false);
  const reservationItem = useSelector(
    (state) => state.reservation.selectedTypeEng
  );
  const isLoading = useSelector((state) => state.reservation.isLoading);

  useEffect(() => {
    setStartDate(new Date());
    setEndDate(new Date());
  }, [isLoading]);
  const changeStartDateHandler = (date) => {
    if (date > endDate) {
      setEndDate(date);
    }
    setStartDate(date);
    setStartDateSelected(true);
  };
  const session = useSession();
  const submitOfficeReservationHandler = async () => {
    try {
      const response = await axios({
        url: '/api/reservation/book',
        method: 'post',
        data: {
          accessToken: session.data.user.accessToken,
          selectedType: reservationItem.toUpperCase(),
          startDate: startDate
            .toLocaleDateString()
            .replace(/. /g, '-')
            .slice(0, -1),
          endDate: endDate
            .toLocaleDateString()
            .replace(/. /g, '-')
            .slice(0, -1),
          startTime: 9,
          endTime: 8,
          id: router.query.id,
        },
      });
      if (response.status === 200) {
        dispatch(reservationActions.getReservationInfo(response.data));
        alert('예약 페이지로 이동합니다.');
        router.push('/place/book');
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error(error.response);
      alert(error.response.data.message.split(' ').slice(1).join(' '));
    }
  };
  return (
    <div>
      {reservationItem && !isLoading ? (
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
                    new Date().getFullYear() + 1,
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
                      new Date().getFullYear() + 1,
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
        <Button onClick={submitOfficeReservationHandler}>예약</Button>
      ) : (
        ''
      )}
    </div>
  );
};

export default OfficeForm;
