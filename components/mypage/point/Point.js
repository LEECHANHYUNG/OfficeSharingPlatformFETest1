import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import PointItem from './PointItem';

const Wrapper = styled.section`
  position: relative;
  width: 70vw;
  & h1 {
    font-size: 2rem;
    margin-top: 20px;
  }
  & .itemlist {
    width: 100%;
  }
`;

const Use = ({ item }) => {
  console.log(item);
  return (
    <Wrapper>
      <h1>마일리지</h1>
      <Banner />
      <div className="itemList">
        {Object.keys(item).map((elem) => (
          <PointItem item={item[elem]} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Use;
