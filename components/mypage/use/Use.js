import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import UsedItem from './UsedItem';

const Wrapper = styled.section`
  width: 70%;
  min-width: 1100px;

  & h1 {
    font-size: 2rem;
    margin-top: 20px;
  }
  & .itemlist {
    width: 100%;
  }
`;

const Use = () => {
  return (
    <Wrapper>
      <h1>이용 내역</h1>
      <Banner />
      <div className="itemList">
        <UsedItem />
      </div>
    </Wrapper>
  );
};

export default Use;
