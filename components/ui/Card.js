import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: 1rem auto;
  border-radius: 6px;
  background-color: white;
  padding: 1rem;
  width: 90%;
  max-width: 80rem;
`;

const Card = (props) => {
  return (
    <Wrapper className={`${props.className ? props.className : ''}`}>
      {props.children}
    </Wrapper>
  );
};

export default Card;
