import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
const Date = () => {
  const [startDate, setStartDate] = useState(dayjs());
  return (
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
  );
};
export default Date;
