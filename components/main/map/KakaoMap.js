import React, { Fragment, useEffect, useRef } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import ControlBox from './ControlBox';
import OfficeMarker from './OfficeMarker';
import FilterBanner from '../../layout/FilterBanner';
import styled from 'styled-components';
import FilterResetBtn from './FilterResetBtn';
const KaKaoMap = styled(Map)`
  position: absolute;
  padding-top: 154px;
  top: 0px;
  bottom: 0px;
  left: 0px;
  width: 75vw;
  height: 100vh;

  @media (max-width: 1170px) {
    width: 100%;
    top: 0px;
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
        ref={mapRef}
      >
        <OfficeMarker map={mapRef} />
        <ControlBox map={mapRef} />
      </KaKaoMap>
      <FilterResetBtn />
    </Fragment>
  );
};

export default KakaoMap;
