import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import KakaoMap from '../components/main/map/kakaoMap';

import OfficeList from '../components/main/officeList/OfficeList';
import { officeSliceActions } from '../store/officeList';

const HomePage = (props) => {
  const [map, setMap] = useState();
  const getMap = (map) => {
    setMap(map);
  };
  const dispatch = useDispatch();
  dispatch(officeSliceActions.getOfficeList(props.officeList));
  return (
    <Fragment>
      <OfficeList className="office" map={map} />
      <KakaoMap className="map" setMapHandler={getMap} />
    </Fragment>
  );
};

export async function getStaticProps() {
  let officeList = [];
  try {
    await fetch(
      'https://react-http-673e2-default-rtdb.firebaseio.com/office.json'
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error('Something went wrong');
        }
        return res.json();
      })
      .then((data) => {
        for (const key in data) {
          officeList.push({ key: key, item: data[key] });
        }
      });
  } catch (err) {
    return err;
  }
  return {
    props: {
      officeList,
    },
  };
}

export default HomePage;
