import React from 'react';
const Wrapper = styled.section`
  position: relative;
  width: 70vw;
  float: left;
  top: 80px;

  h1 {
    font-size: 32px;
  }
`;
const NewReview = () => {
  return (
    <Wrapper>
      <h1>리뷰 작성</h1>
    </Wrapper>
  );
};

export default NewReview;
