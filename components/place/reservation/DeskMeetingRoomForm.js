import Link from 'next/link';
import React from 'react';
import { useSelector } from 'react-redux';
import DatePick from '../../ui/DatePick';
import SelectEndTime from './SelectEndTime';
import SelectStartTime from './SelectStartTime';

const DeskMeetingRoomForm = () => {
  const isLoading = useSelector((state) => state.reservation.isLoading);
  const reservationItem = useSelector(
    (state) => state.reservation.reservationItem
  );
  const selectedStartTime = useSelector(
    (state) => state.reservation.selectedStartTime
  );
  const selectedEndTime = useSelector(
    (state) => state.reservation.selectedEndTime
  );

  return (
    <section>
      {reservationItem && !isLoading ? (
        <div className="item">
          <div>이용 날짜 선택</div>
          <DatePick />
        </div>
      ) : (
        ''
      )}
      {reservationItem && !isLoading ? <SelectStartTime /> : ''}
      {selectedStartTime !== 24 ? <SelectEndTime /> : ''}
      {reservationItem ? (
        <div className="item">
          선택 시간
          {!isLoading ? (
            <div className="time">{`시작 시간     : ${
              selectedStartTime !== 24 ? selectedStartTime + ':00' : ''
            }`}</div>
          ) : (
            ''
          )}
          {!isLoading && selectedStartTime !== 24 ? (
            <div className="time">{`종료 시간     :${
              selectedEndTime != 24 ? selectedEndTime + ':50' : ''
            }`}</div>
          ) : (
            ''
          )}
        </div>
      ) : (
        ''
      )}
      {reservationItem && selectedStartTime !== 24 ? (
        <div className="payment-btn">
          <Link href="/">예약</Link>
        </div>
      ) : (
        ''
      )}
    </section>
  );
};

export default DeskMeetingRoomForm;
