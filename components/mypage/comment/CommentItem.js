import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  width: 100%;
  min-width: 1100px;
  line-height: 50px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #111;
  overflow-y: hidden;
  & .content {
    width: 50%;
  }

  & .placeName,
  & .writingTime {
    width: 25%;
  }
  & .state,
  & .review {
    width: 11%;
  }
  & .date,
  & .time {
    line-height: 1.2rem;
  }
`;
const CommentItem = () => {
  return (
    <Wrapper>
      <div className="content">
        {`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem eos,
        tempora sint labore optio minima nostrum vero officia ratione temporibus
        fuga, at quas nulla quibusdam voluptatum. Sit aliquam nihil a.`.slice(
          0,
          50
        ) + `...`}
      </div>
      <div className="placeName">롯데월드점</div>
      <div className="writingTime">
        <div className="date">2022.11.28</div>
        <div className="time">11:00:01</div>
      </div>
    </Wrapper>
  );
};

export default CommentItem;
