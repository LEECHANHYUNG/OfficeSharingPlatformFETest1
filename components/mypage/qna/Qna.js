import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import QnaItem from './QnaItem';

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

const Qna = () => {
  return (
    <Wrapper>
      <h1>1:1 문의</h1>
      <Banner />
      <div className="itemList">
        <QnaItem />
      </div>
    </Wrapper>
  );
};

export default Qna;
