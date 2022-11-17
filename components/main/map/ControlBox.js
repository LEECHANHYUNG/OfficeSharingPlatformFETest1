import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons/faLocationCrosshairs';
import { faMinus } from '@fortawesome/free-solid-svg-icons/faMinus';
import { faPlus } from '@fortawesome/free-solid-svg-icons/faPlus';
import styled from 'styled-components';

const ControlDiv = styled.div`
  border: 1px solid #111;
  border-radius: 5px;

  &.customZoomcontrol {
    position: absolute;
    top: 20vh;
    right: 30px;
    width: 36px;
    height: 108px;
    overflow: hidden;
    z-index: 2;
    background-color: #f5f5f5;
  }
  &.customZoomcontrol span {
    display: block;
    width: 36px;
    height: 36px;
    text-align: center;
    cursor: pointer;
  }
  &.customZoomcontrol .icon {
    width: 50%;
    height: 50%;
    padding: 9px 0;
    border: none;
  }
  &.customZoomcontrol span:first-child,
  &.customZoomcontrol span:nth-child(2) {
    border-bottom: 1px solid #111;
  }
`;

const ControlBox = (props) => {
  const zoomIn = () => {
    props.map.current.setLevel(props.map.current.getLevel() - 1);
  };

  const zoomOut = () => {
    props.map.current.setLevel(props.map.current.getLevel() + 1);
  };

  const getCurrentLocation = () => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude,
          lng = position.coords.longitude;
        const currentLocation = new kakao.maps.LatLng(lat, lng);
        props.map.current.panTo(currentLocation);
      });
    }
  };

  return (
    <ControlDiv className="customZoomcontrol classes.radiusBorder">
      <span onClick={zoomIn}>
        <FontAwesomeIcon icon={faPlus} className="icon" />
      </span>
      <span onClick={zoomOut}>
        <FontAwesomeIcon icon={faMinus} className="icon" />
      </span>
      <span onClick={getCurrentLocation}>
        <FontAwesomeIcon icon={faLocationCrosshairs} className="icon" />
      </span>
    </ControlDiv>
  );
};

export default ControlBox;
