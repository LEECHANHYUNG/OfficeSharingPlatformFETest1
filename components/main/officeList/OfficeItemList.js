import React, { Fragment } from 'react';
import OfficeItem from './OfficeItem';
const OfficeItemList = (props) => {
  return (
    <Fragment>
      {props.officeList.map((elem) => {
        return <OfficeItem key={elem.key} item={elem.item} />;
      })}
    </Fragment>
  );
};

export default OfficeItemList;
