import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import KakaoMap from '../components/main/map/kakaoMap';

import OfficeList from '../components/main/officeList/OfficeList';
import PlaceDetailMain from '../components/place/PlaceDetailMain';
import { officeSliceActions } from '../store/officeList';
const Wrapper = styled.div`
  display: flex;
  justify-contents: center;
  align-items: center;
  @media screen and (max-width: 1170px) {
    flex-direction: column;
  }
`;
const HomePage = (props) => {
  const [map, setMap] = useState();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(officeSliceActions.getAllOfficeList(props.officeList));
  }, [props.officeList]);
  const selectedPlaceId = useSelector(
    (state) => state.officeList.selectedPlaceId
  );

  return (
    <Wrapper>
      <KakaoMap setMapHandler={setMap} />
      {selectedPlaceId ? (
        <PlaceDetailMain />
      ) : (
        <OfficeList officeList={props.officeList} map={map} />
      )}
    </Wrapper>
  );
};

export async function getStaticProps() {
  let officeList = [];
  try {
    const response = await fetch(process.env.main);
    if (!response.ok) {
      throw new Error('Someting went wrong');
    }
    const data = await response.json();
    for (const key in data) {
      officeList.push({ key: data[key].placeId, item: data[key] });
    }
  } catch (err) {
    console.error(err);
  }
  return {
    props: {
      officeList,
    },
  };
}

export default HomePage;
