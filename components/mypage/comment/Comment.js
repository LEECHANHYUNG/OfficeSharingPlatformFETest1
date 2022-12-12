import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import CommentItem from './CommentItem';

const Wrapper = styled.section`
  width: 100%;

  & h1 {
    font-size: 2rem;
    margin-top: 20px;
  }
  & .itemlist {
    width: 100%;
  }
  @media screen and (max-width: 1170px) {
    width: 94vw;
  }
`;

const Use = ({ item, paginationData }) => {
  console.log(item);
  return (
    <Wrapper>
      <h1>댓글 관리</h1>
      <Banner />
      <div className="itemList">
        {Object.keys(item).map((elem) => (
          <CommentItem item={item[elem]} key={item[elem].commentId} />
        ))}
      </div>
    </Wrapper>
  );
};

export default Use;
