import React from 'react';
import styled from 'styled-components';
import PlaceInfo from '../../components/place/PlaceInfo';
import PlaceMainImage from '../../components/place/PlaceMainImage';
const Wrapper = styled.section`
  width: 100%;
  background: #f7f7f7;
`;
const PlaceMainPage = ({ office }) => {
  console.log(office);
  return (
    <Wrapper>
      <PlaceInfo
        placeName={office[0].placeName}
        description={office[0].placeDescription}
        address={office[0].address}
        rating={office[0].ratingPoint}
        review="4"
        main="true"
      />
      <PlaceMainImage />
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
    fallback: true,
  };
}

export default PlaceMainPage;
