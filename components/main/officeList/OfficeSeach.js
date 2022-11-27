import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';
import Image from 'next/image';

const Wrapper = styled.div`
  position: fixed;
  top: 100px;
  background: #fff;
  padding: 5px 20px;
  width: 100%;
  border: 2px solid #111;
  z-index: 100;
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
`;

const OfficeSearch = () => {
  const keywordSubmitHandler = (e) => {
    e.preventDefault();
    console.log(keywordInputRef.current.value);
  };
  const keywordInputRef = useRef();
  return (
    <Wrapper>
      <form onSubmit={keywordSubmitHandler}>
        <Image src="/svg/glass.svg" width="16" height="16" />
        <input
          type="text"
          name="searchWord"
          placeholder="공유 오피스 지점명 or 지역명으로 검색"
          className="searchInput"
          autoComplete="false"
          ref={keywordInputRef}
        />
      </form>
    </Wrapper>
  );
};

export default OfficeSearch;
