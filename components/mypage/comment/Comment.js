import axios from 'axios';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate';
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

  .paginationBtns {
    width: 80%;
    padding-top: 150px;
    margin: auto;
    height: 40px;
    list-style: none;
    display: flex;
    justify-content: center;
  }
  .paginationBtns a {
    padding: 10px;
    margin: 8px;
    border-radius: 5px;
    border: 1px solid #111;
    color: #111;
    cursor: pointer;
  }
  .paginationBtns a:hover {
    color: #fff;
    background: #2b2eff;
  }
  .paginationActive a {
    color: #111;
    background: #6a9eff;
  }
  @media screen and (max-width: 1170px) {
    width: 94vw;
  }
`;

const Comment = ({ item, paginationData, reviewComment, ratingId }) => {
  console.log(reviewComment);
  const [totalPage, setTotalPage] = useState(paginationData);
  const [items, setItems] = useState(item);
  const session = useSession();
  const changePageHandler = async ({ selected }) => {
    try {
      const response = await axios({
        url: `/api/mypage/mypage`,
        method: 'post',
        data: {
          url: reviewComment
            ? `mypage/review/${ratingId}?page=`
            : 'mypage/comment?page=',
          accessToken: session.data.user.accessToken,
          page: selected,
        },
      });

      if (response.status === 200) {
        setItems(response.data.commentData);
        setTotalPage(response.data.paginationData.maxPage);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <h1>{reviewComment ? '' : '댓글 관리'}</h1>
      <Banner reviewComment={reviewComment} />
      <div className="itemList">
        {Object.keys(items).map((elem) => (
          <CommentItem
            item={items[elem]}
            key={items[elem].commentId}
            reviewComment={reviewComment}
          />
        ))}
      </div>
      <ReactPaginate
        previousLabel={'<'}
        nextLabel={'>'}
        pageCount={totalPage}
        onPageChange={changePageHandler}
        containerClassName={'paginationBtns'}
        previousLinkClassName={'previousBtn'}
        nextLinkClassName={'nextBtn'}
        disabledClassName={'paginationDisabled'}
        activeClassName={'paginationActive'}
      />
    </Wrapper>
  );
};

export default Comment;
