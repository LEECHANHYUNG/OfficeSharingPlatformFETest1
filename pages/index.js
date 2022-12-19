import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import KakaoMap from '../components/main/map/KakaoMap';
import PlaceList from '../components/main/PlaceList/PlaceList';
import PlaceDetailMain from '../components/place/PlaceDetailMain';
import { officeSliceActions } from '../store/officeList';

const Wrapper = styled.div`
  display: flex;
  justify-contents: center;
  align-items: center;
  height: 100vh;
  overflow-y: hidden;
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
        <PlaceList officeList={props.officeList} map={map} />
      )}
    </Wrapper>
  );
};

export async function getStaticProps() {
  let officeList = [];
  try {
    const response = await axios({
      url: process.env.main,
    });
    if (response.status === 200) {
      const data = response.data;
      for (const key in data) {
        officeList.push({ key: data[key].placeId, item: data[key] });
      }
    } else {
      throw new Error();
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
