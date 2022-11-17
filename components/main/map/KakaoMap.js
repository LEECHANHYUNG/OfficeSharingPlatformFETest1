import React, { useRef } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import ControlBox from './ControlBox';

const KakaoMap = () => {
  const mapRef = useRef();

  return (
    <Map
      id="map"
      center={{
        lat: 33.450701,
        lng: 126.570667,
      }}
      style={{
        float: 'right',
        width: '75%',
        height: '92vh',
      }}
      level={3}
      ref={mapRef}
    >
      <ControlBox map={mapRef} />
    </Map>
  );
};

export default KakaoMap;
