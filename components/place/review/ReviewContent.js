import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  padding: 10px 20px;
`;

const ReviewContent = ({ content }) => {
  return <Text>{content}</Text>;
};

export default ReviewContent;
