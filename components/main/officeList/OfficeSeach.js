import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

const Wrapper = styled.div`
  background: #fff;
  padding: 5px 20px;
  width: 100%;

  & .searchInput {
    width: 90%;
    height: 50px;
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
        <FontAwesomeIcon className="icon" icon={faMagnifyingGlass} />
        <input
          type="text"
          name="searchWord"
          placeholder="공유 오피스 지점명 or 지역명으로 검색"
          className="searchInput"
          ref={keywordInputRef}
        />
      </form>
    </Wrapper>
  );
};

export default OfficeSearch;
