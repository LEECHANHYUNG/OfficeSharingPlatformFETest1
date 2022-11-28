import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import CommentItem from './CommentItem';

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
      <h1>댓글</h1>
      <Banner />
      <div className="itemList">
        <CommentItem />
      </div>
    </Wrapper>
  );
};

export default Use;
