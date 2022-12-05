import React, { Fragment } from 'react';
import styled from 'styled-components';
const Wrapper = styled.div`
  .box {
    position: relative;
    height: 30px;
    border: 1px solid #111;
  }
  .text {
    position: absolute;
    top: 38px;
    left: 0px;
    font-weight: 500;
    cursor: auto;
  }
`;
const TimeButton = (props) => {
  const click = (e) => {
    e.stopPropagation();
  };
  return (
    <Wrapper id={props.time} className="box">
      <span className="text" onClick={click}>
        {props.time + ':00'}
      </span>
    </Wrapper>
  );
};

export default TimeButton;
