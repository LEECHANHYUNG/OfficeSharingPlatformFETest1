import React, { Fragment } from 'react';
import KakaoMap from '../components/main/map/kakaoMap';

import OfficeList from '../components/main/officeList/OfficeList';

const HomePage = (props) => {
  return (
    <Fragment>
      <OfficeList className="office" officeList={props.officeList} />
      <KakaoMap className="map" officeList={props.officeList} />
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
