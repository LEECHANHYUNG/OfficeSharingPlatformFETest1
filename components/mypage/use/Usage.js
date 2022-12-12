import axios from 'axios';
import { getSession, useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import Banner from './Banner';
import UsedItem from './UsedItem';

const Wrapper = styled.section`
  display: inline-block;

  h1 {
    font-size: 2rem;
    margin-top: 20px;
  }
  .itemlist {
    width: 90%;
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
    width: 96vw;
  }
`;

const Usage = (props) => {
  const [totalPage, setTotalPage] = useState(props.paginationData);
  const [items, setItems] = useState(props.item);
  const session = useSession();
  const changePageHandler = async ({ selected }) => {
    try {
      const response = await axios({
        url: `/api/mypage/mypage`,
        method: 'post',
        data: {
          url: 'mypage/usage?page=',
          accessToken: session.data.user.accessToken,
          page: selected,
        },
      });

      if (response.status === 200) {
        setItems(response.data.reservationData);
        setTotalPage(response.data.paginationData.maxPage);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper>
      <h1>예약 내역</h1>
      <Banner />
      <div className="itemList">
        {Object.keys(items).map((elem) => (
          <UsedItem item={items[elem]} key={items[elem].reservationId} />
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
      {/*<div className="pagination">
        <Image
          src="/svg/chevron-left.svg"
          width="30"
          height="30"
          className="left"
          onClick={pageCountHandler}
        />
        {new Array(totalPage - pageCount)
          .fill(0, 0, totalPage - pageCount)
          .map((elem, idx) => {
            if (idx < 10) {
              return (
                <div
                  key={idx}
                  className="btn"
                  id={idx + 1 + pageCount}
                  onClick={changePageHandler}
                >
                  {idx + 1 + pageCount}
                </div>
              );
            }
          })}
        <Image
          src="/svg/chevron-right.svg"
          width="30"
          height="30"
          className="right"
          onClick={pageCountHandler}
        />
      </div>*/}
    </Wrapper>
  );
};

export default Usage;
