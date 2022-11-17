import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import OfficeItem from './OfficeItem';
const OfficeItemList = () => {
  const officeList = useSelector((state) => state.officeList.officeList);

  return (
    <Fragment>
      {officeList.map((elem) => {
        return <OfficeItem key={elem.key} item={elem.item} />;
      })}
    </Fragment>
  );
};

export default OfficeItemList;
