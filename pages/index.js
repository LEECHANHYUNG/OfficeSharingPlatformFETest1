import React, { Fragment } from 'react';
import KakaoMap from '../components/main/map/kakaoMap';

import OfficeList from '../components/main/officeList/OfficeList';

const HomePage = () => {
  return (
    <Fragment>
      <OfficeList className="office" />
      <KakaoMap className="map" />
    </Fragment>
  );
};

export default HomePage;
