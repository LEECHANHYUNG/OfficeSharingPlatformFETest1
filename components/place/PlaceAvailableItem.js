import React from 'react';
import styled from 'styled-components';
const Wrapper = styled.section`
  width: 100%;
  margin-top: 20px;
`;
const PlaceAvailableItem = () => {
  return (
    <Wrapper>
      <h1>이용 가능 place</h1>
      <main>
        <div className="desk">
          <p>desk</p>
          <div className="count"></div>
        </div>
        <div className="meeting">
          <p>Meeting Room</p>
          <div className="count"></div>
        </div>
        <div className="office">
          <p>Office</p>
          <div className="count"></div>
        </div>
      </main>
    </Wrapper>
  );
};

export default PlaceAvailableItem;
