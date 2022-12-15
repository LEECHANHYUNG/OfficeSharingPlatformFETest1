import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import PointItem from './PointItem';

const Wrapper = styled.section`
  width: 70%;
  & h1 {
    font-size: 2rem;
    margin-top: 20px;
  }
  min-width: 1100px;
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
        {item.map((elem) => (
          <PointItem item={elem} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Use;
