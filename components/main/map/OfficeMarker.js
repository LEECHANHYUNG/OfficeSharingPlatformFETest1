import { useSelector } from 'react-redux';

const OfficeMarker = (props) => {
  const { map } = props;
  const officeList = useSelector((state) => state.officeList.officeList);
  officeList.map((elem) => {
    const content = document.createElement('div');
    content.classList.add('wrap');
    content.setAttribute('id', elem.key);
    let customOverlay = document.createElement('div');
    customOverlay.classList.add('customOverlay');
    customOverlay.setAttribute('id', elem.key);
    customOverlay.textContent = elem.item.name;
    let arrow = document.createElement('div');
    arrow.classList.add('arrow');
    content.appendChild(customOverlay);
    content.appendChild(arrow);
    var geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch(elem.item.address, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        return new kakao.maps.CustomOverlay({
          content,
          map: map.current,
          position: coords,
        });
      }
    });
  });
  return <></>;
};

export default OfficeMarker;
