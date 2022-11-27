import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import UsedItem from './UsedItem';

const Wrapper = styled.section`
  width: 70%;

  min-width: 1100px;
  & .itemlist {
    width: 100%;
  }
`;

const Use = () => {
  return (
    <Wrapper>
      <Banner />
      <div className="itemList">
        <UsedItem />
      </div>
    </Wrapper>
  );
};

export default Use;
