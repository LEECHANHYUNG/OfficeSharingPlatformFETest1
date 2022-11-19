import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import OfficeItem from './OfficeItem';
const OfficeItemList = (props) => {
  const officeList = useSelector((state) => state.officeList.officeList);

  return (
    <Fragment>
      {officeList.map((elem) => {
        return <OfficeItem key={elem.key} elem={elem} map={props.map} />;
      })}
    </Fragment>
  );
};

export default OfficeItemList;
