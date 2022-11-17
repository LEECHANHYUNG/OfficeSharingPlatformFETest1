import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  background: #fff;
  padding: 10px 10px;
  line-height: 30px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding-bottom: 40px;
  text-decoration: none;
  color: #111;
  list-style: none;

  & .name {
    font-weight: 900;
    font-size: 20px;
    line-height: 50px;
  }
  & .address {
    font-size: 15px;
    line-height: 18px;
    font-weight: 400;
    margin-bottom: 10px;
  }
  & .option {
    font-size: 14px;
    color: #999;
  }
  & .distance {
    padding-right: 10px;
    color: #6a9eff;
    font-weight: bold;
  }
  & .line {
    position: absolute;
    width: 90%;
    border-bottom: 2px solid #6a9eff;
    bottom: 20px;
  }
`;

const OfficeItem = (props) => {
  return (
    <Wrapper>
      <Link href="/">
        <a>
          <div>
            <div className="name">{props.item.name}</div>
            <div className="address">{props.item.address}</div>
            <div className="option">{props.item.option}</div>
          </div>
          <div className="distance">{props.item.distance}</div>
          <div className="line"></div>
        </a>
      </Link>
    </Wrapper>
  );
};

export default OfficeItem;
