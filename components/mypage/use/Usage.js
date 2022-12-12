import axios from 'axios';
import { getSession, useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';
import { useState } from 'react';
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
  .pagination {
    height: 50px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
  }
  .btn {
    border: 1px solid #111;
    width: 30px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 5px;
    margin: 0 5px;
    cursor: pointer;
  }
  .selected {
    background: #6a9eff;
  }
  .right,
  .left {
    cursor: pointer;
  }
  @media screen and (max-width: 1170px) {
    width: 96vw;
  }
`;

const Usage = (props) => {
  const [totalPage, setTotalPage] = useState(props.paginationData);
  const [pageCount, setPageCount] = useState(0);
  const [items, setItems] = useState(props.item);
  const session = useSession();
  const changePageHandler = async (e) => {
    const selected = document.getElementsByClassName('selected');
    if (selected[0]?.classList) {
      selected[0].classList.remove('selected');
    }
    e.target.classList.add('selected');
    try {
      const response = await axios({
        url: `/api/mypage/usage`,
        method: 'post',
        data: {
          accessToken: session.data.user.accessToken,
          page: e.target.id,
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
  const pageCountHandler = (e) => {
    const selected = document.getElementsByClassName('selected');
    if (selected[0]?.classList) {
      selected[0].classList.remove('selected');
    }
    if (e.target.classList.value === 'left' && pageCount !== 0) {
      setPageCount((prevState) => prevState - 10);
    } else if (e.target.classList.value === 'right' && pageCount < totalPage) {
      setPageCount((prevState) => prevState + 10);
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
      <div className="pagination">
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
      </div>
    </Wrapper>
  );
};

export default Usage;
