import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import City from '../selectbox/city';
import Date from '../selectbox/Date';
import PlaceType from '../selectbox/PlaceType';
import SubCity from '../selectbox/SubCity';
import Time from '../selectbox/Time';

const Wrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  top: 8vh;
  background: #fff;
  border: 2px solid #111;
  border-right: none;
  height: 54px;
  padding: 5px 10px;
  width: 75%;
  z-index: 10;

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
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
    width: 100%;
  }
`;

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
      <div className="selectOption ">
        <Date />
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
      <button
        onClick={sendSelectedFilter}
        ref={buttonRef}
        className="selectOption button"
        disabled
      >
        조건 검색
      </button>
    </Wrapper>
  );
};

export default FilterBanner;
