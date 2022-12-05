import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import PlaceAdditional from '../../components/place/PlaceAdditional';
import PlaceDescription from '../../components/place/PlaceDescription';
import PlaceInfo from '../../components/place/PlaceInfo';
import PlaceItemCount from '../../components/place/PlaceItemCount';
import PlaceMainImage from '../../components/place/PlaceMainImage';
import PlaceOpeningHours from '../../components/place/PlaceOpeningHours';
import ItemListForm from '../../components/place/reservation/ItemListForm';
import ReservationForm from '../../components/place/reservation/ReservationForm';
import Review from '../../components/place/review/Review';
import { reservationActions } from '../../store/reservation';
const Wrapper = styled.section`
  width: 70vw;
  margin: auto;
  padding-top: 100px;
  height: 100%;
  .line {
    height: 3px;
    background: #999;
    width: 60vw;
    margin: auto;
  }
  .info-left {
    width: 60%;
    float: left;
  }
  .info-right {
    width: 35%;
    float: right;
  }
  @media screen and (max-width: 1170px) {
    width: 90vw;
    .line {
      width: 90vw;
    }
    .info-left {
      width: 100%;
    }
    .info-right {
      width: 100%;
    }
  }
`;

const PlaceMainPage = ({ place }) => {
  const dispatch = useDispatch();
  dispatch(reservationActions.getSelectedType(null));
  dispatch(reservationActions.getReservationItem(null));
  dispatch(
    reservationActions.getOpeningHours([
      +place.placeOpenTime.slice(0, 2),
      +place.placeCloseTime.slice(0, 2),
    ])
  );
  return (
    <Wrapper>
      <PlaceInfo
        placeName={place.placeName}
        address={place.address}
        rating={place.ratePoint}
        review={place.reviewQuantity}
        main="true"
      />
      <PlaceMainImage images={place.placeImage} />
      <div className="line"></div>
      <section>
        <div className="info-left">
          <PlaceItemCount
            placeName={place.placeName}
            itemCount={[
              place.deskQuantity,
              place.meetingRoomQuantity,
              place.officeQuantity,
            ]}
          />
          <PlaceDescription description={place.placeDescription} />
          <PlaceOpeningHours
            closedDays={place.placeCloseDays}
            openTime={place.placeOpenTime}
            closeTime={place.placeCloseTime}
            main={true}
          />
          <PlaceAdditional additionalItem={place.placeMainInfo} main={true} />
          <ItemListForm items={place.roomTypeResponse} />
          <Review
            rating={place.ratePoint}
            count={place.reviewQuantity}
            ratingList={place.ratingList}
          />
        </div>
        <div className="info-right">
          <ReservationForm />
        </div>
      </section>
    </Wrapper>
  );
};

export async function getStaticProps(context) {
  const placeId = context.params.id;
  const place = [];

  try {
    const response = await fetch(`http://localhost:8080/places/${placeId}`);

    if (!response.ok) {
      throw new Error('잠시후 다시 시도해주세요.');
    }
    const data = await response.json();
    place.push(data);
  } catch (err) {}

  return {
    props: {
      place: place[0],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } },
      { params: { id: '3' } },
    ],
    fallback: 'blocking',
  };
}

export default PlaceMainPage;
