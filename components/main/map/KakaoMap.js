import React, { Fragment, useEffect, useRef } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import ControlBox from './ControlBox';
import OfficeMarker from './OfficeMarker';
import FilterBanner from '../../layout/FilterBanner';
import styled from 'styled-components';
const KaKaoMap = styled(Map)`
  position: relative;
  top: 8vh;
  float: right;
  width: 75%;
  height: 92vh;

  @media (max-width: 1170px) {
    width: 100%;
    height: 60vh;
  }
`;
const KakaoMap = (props) => {
  const mapRef = useRef();
  useEffect(() => {
    props.setMapHandler(mapRef);
  }, []);
  return (
    <Fragment>
      <FilterBanner />
      <KaKaoMap
        id="map"
        center={{
          lat: 37.52341236919156,
          lng: 127.05462238047163,
        }}
        level={8}
        ref={mapRef}
      >
        <OfficeMarker map={mapRef} />
        <ControlBox map={mapRef} />
      </KaKaoMap>
    </Fragment>
  );
};

export default KakaoMap;
