import React, { useRef } from 'react';
import { Map } from 'react-kakao-maps-sdk';
import ControlBox from './ControlBox';
import OfficeMarker from './OfficeMarker';

const KakaoMap = (props) => {
  const mapRef = useRef();
  props.setMapHandler(mapRef);
  return (
    <Map
      id="map"
      center={{
        lat: 37.52341236919156,
        lng: 127.05462238047163,
      }}
      style={{
        float: 'right',
        width: '75%',
        height: '92vh',
      }}
      level={8}
      ref={mapRef}
    >
      <OfficeMarker map={mapRef} />
      <ControlBox map={mapRef} />
    </Map>
  );
};

export default KakaoMap;
