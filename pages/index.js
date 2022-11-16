import React, { Fragment } from 'react';
import Map from '../components/main/Map';
import OfficeList from '../components/main/officeList/OfficeList';

const HomePage = () => {
  return (
    <Fragment>
      <OfficeList />
      <Map />
    </Fragment>
  );
};

export default HomePage;
