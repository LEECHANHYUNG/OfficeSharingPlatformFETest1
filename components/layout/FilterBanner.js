import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import City from '../selectbox/city';
import PlaceType from '../selectbox/PlaceType';
import SubCity from '../selectbox/SubCity';
import Time from '../selectbox/Time';
import DatePicker from 'react-datepicker';

const FilterBanner = () => {
  const buttonRef = useRef();
  const selectedStartTime = useSelector((state) => state.selected.startTime);
  const selectedEndTime = useSelector((state) => state.selected.endTime);
  const selectedCity = useSelector((state) => state.selected.selectedCity);
  const selectSubCity = useSelector((state) => state.selected.selectSubCity);
  const selectedType = useSelector((state) => state.selected.selectedType);

  const sendSelectedFilter = () => {};
  useEffect(() => {
    if (
      selectedStartTime === '24' &&
      selectedEndTime === '0' &&
      selectedCity === '0' &&
      selectSubCity === '0' &&
      selectedType === '0'
    ) {
      buttonRef.current.style.backgroundColor = '#fff';
      buttonRef.current.disabled = true;
    } else {
      buttonRef.current.style.backgroundColor = '#6a9eff';
      buttonRef.current.disabled = false;
    }
  }, [
    selectedStartTime,
    selectedEndTime,
    selectedCity,
    selectSubCity,
    selectedType,
  ]);
  return (
    <Wrapper>
      <main>
        <button
          onClick={sendSelectedFilter}
          ref={buttonRef}
          className="selectOption button"
          disabled
        >
          조건 검색
        </button>
        {/*<div className="selectOption ">
          <Date />
          <Image src="/svg/down.svg" width="18" height="18" />
        </div>*/}
        <div className="selectOption ">
          <DatePicker />
        </div>
        <div className="selectOption ">
          <Time time="start" />
        </div>
        <div className="selectOption">
          <Time />
        </div>
        <div className="selectOption">
          <City />
        </div>
        <div className="selectOption ">
          <SubCity />
        </div>
        <div className="selectOption">
          <PlaceType />
        </div>
      </main>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  position: absolute;
  top: 100px;
  background: #fff;
  border: 2px solid #111;
  border-right: none;
  height: 54px;
  padding: 5px 10px;
  width: 75%;
  z-index: 10;
  -ms-overflow-style: none;
  & ::-webkit-scrollbar {
    display: none;
  }

  & main {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    min-width: 860px;
    overflow-x: scroll;
  }

  & div {
    margin-left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & .icon {
    margin-left: 20px;
  }
  & .selectOption {
    height: 36px;
    width: 140px;
    cursor: pointer;
  }
  & .selectOption.button {
    margin-left: 20px;
    width: 100px;
  }

  @media screen and (max-width: 1170px) {
    top: 154px;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    width: 100%;
  }
`;

export default FilterBanner;
