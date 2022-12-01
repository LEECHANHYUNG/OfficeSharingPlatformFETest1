import React, { useRef } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { officeSliceActions } from '../../../store/officeList';

const Wrapper = styled.div`
  position: fixed;
  top: 100px;
  background: #fff;
  padding: 5px 20px;
  width: 25%;
  border: 2px solid #111;
  z-index: 100;
  & .search-glass {
    cursor: pointer;
  }
  & .searchInput {
    width: 90%;
    height: 40px;
    border: none;
    font-size: 1.1rem;
    padding-left: 10px;
  }

  & .searchInput:focus {
    outline: none;
  }
  & .searchInput .icon {
    padding-right: 20px;
  }
  @media screen and (max-width: 1170px) {
    width: 100%;
  }
`;

const OfficeSearch = () => {
  const dispatch = useDispatch();
  const searchWordInput = useRef();
  const keywordSubmitHandler = async (e) => {
    let officeList = [];
    dispatch(officeSliceActions.selectPlace(null));
    e.preventDefault();
    const enteredSearchWord = searchWordInput.current.value;
    try {
      const res = await fetch('/api/main/search', {
        method: 'POST',
        body: JSON.stringify({ searchWord: enteredSearchWord }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      if (!res.ok) {
        throw new Error(res.statusText);
      }
      const data = await res.json();
      for (const key in data) {
        officeList.push({ key: data[key].placeId, item: data[key] });
      }
      dispatch(officeSliceActions.getFilteredPlaceList(officeList));
      searchWordInput.current.value = '';
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <Wrapper>
      <form onSubmit={keywordSubmitHandler}>
        <Image
          src="/svg/glass.svg"
          width="16"
          height="16"
          onClick={keywordSubmitHandler}
          className="search-glass"
        />
        <input
          type="text"
          name="searchWord"
          placeholder="공유 오피스 지점명 or 지역명으로 검색"
          className="searchInput"
          autoComplete="false"
          ref={searchWordInput}
        />
      </form>
    </Wrapper>
  );
};

export default OfficeSearch;
