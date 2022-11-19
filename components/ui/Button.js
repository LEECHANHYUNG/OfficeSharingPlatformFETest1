import React from 'react';
import styled from 'styled-components';

const ButtonWrapper = styled.button`
  font: inherit;
  border: 1px solid rgb(106, 158, 255);
  background: rgb(106, 158, 255);
  color: white;
  padding: 0.25rem 1rem;
  cursor: pointer;
  width: 100%;

  &:hover,
  &:active {
    background: rgb(91, 135, 218);
    border-color: rgb(91, 135, 218);
  }

  &:focus {
    outline: none;
  }
`;

const Button = (props) => {
  return (
    <ButtonWrapper
      type={props.type || 'button'}
      onClick={props.onClick}
      id={null || props.id}
    >
      {props.children}
    </ButtonWrapper>
  );
};

export default Button;
