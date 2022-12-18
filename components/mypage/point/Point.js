import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import PointItem from './PointItem';

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  h1 {
    font-size: 2rem;
    margin-top: 20px;
    border-bottom: 3px solid #111;
  }
  .itemlist {
    width: 100%;
  }
  @media screen and (max-width: 1170px) {
    h1 {
      padding-top: 20px;
      font-size: 1.3rem;
    }
    width: 96vw;
    margin: 0;
  }
`;

const Use = ({ item }) => {
  return (
    <Wrapper>
      <h1>마일리지</h1>
      <Banner />
      <section className="itemList">
        {Object.keys(item).map((elem) => (
          <PointItem key={elem} item={item[elem]} />
        ))}
      </section>
    </Wrapper>
  );
};

export default Use;
