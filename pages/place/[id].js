import React from 'react';
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
  }
  @media screen and (max-width: 756px) {
    .info-left {
      width: 100%;
    }
    & .info-right {
      width: 100%;
    }
  }
`;

const PlaceMainPage = ({ office }) => {
  return (
    <Wrapper>
      <PlaceInfo
        placeName={office[0].placeName}
        address={office[0].address}
        rating={office[0].ratingPoint}
        review="4"
        main="true"
      />
      <PlaceMainImage />
      <div className="line"></div>
      <section>
        <div className="info-left">
          <PlaceItemCount
            placeName={office[0].placeName}
            itemCount={[5, 4, 2]}
          />
          <PlaceDescription description={office[0].placeDescription} />
          <PlaceOpeningHours
            closedDays={office[0].closeDays}
            openTime={office[0].openTime}
            closeTime={office[0].closeTime}
            main={true}
          />
          <PlaceAdditional additionalItem={office[0].placeInfo} main={true} />
          <ItemListForm items={office[0].roomInfo} />
          <Review rating={office[0].ratingPoint} count="4" />
        </div>
        <div className="info-right">
          <ReservationForm />
        </div>
      </section>
    </Wrapper>
  );
};

export async function getStaticProps() {
  const office = [];
  try {
    const res = await fetch('http://localhost:8080/main/search', {
      method: 'POST',
      body: JSON.stringify({ searchWord: '골프존' }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
    const data = await res.json();
    console.log(data);
    office.push(data);
  } catch (err) {
    console.error(err);
  }
  console.log(office);
  return {
    props: {
      office: office[0],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { id: '1' } }],
    fallback: 'blocking',
  };
}

export default PlaceMainPage;
