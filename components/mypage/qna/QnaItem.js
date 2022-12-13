import React from 'react';
import styled from 'styled-components';
import Card from '../../ui/Card';

const Wrapper = styled.section`
  position: relative;
  width: 100%;
  min-height: 100px;
  line-height: 50px;
  display: flex;
  justify-content: space-around;
  align-items: top;
  padding-top: 20px;
  border-bottom: 2px solid #111;
  overflow-y: hidden;

  &.show {
    height: 500px;
  }
  & .state,
  & .writingTime,
  & .state {
    line-height: 1.2rem;
    width: 12%;
  }
  & .content {
    line-height: 1.2rem;
    width: 52%;
  }
  .show {
    position: absolute;
    width: 100%;
    bottom: 0px;
    line-height: 1.2rem;
    text-align: center;
    border: 3px solid #6a93ff;
    margin-bottom: 5px;
    cursor: pointer;
  }
  .answer {
    position: absolute;
    width: 100%;
    top: 120px;
    border-top: 3px solid #111;
    transition: all 0.5s ease-out;
  }
  @media screen and (max-width: 1170px) {
    min-height: 120px;
    width: 99vw;
  }
`;
const StyledCard = styled(Card)`
  border: 3px solid #6a93ff;
  height: 200px;
  line-height: 1rem;
  font-weight: 600;
`;
const QnaItem = ({ item }) => {
  const showDetailHandler = (e) => {
    e.target.parentNode.classList.toggle('show');
    if (e.target.innerHTML === '답변 확인▼') {
      e.target.innerHTML = '닫기▲';
    } else {
      e.target.innerHTML = '답변 확인▼';
    }
  };

  return (
    <Wrapper>
      <div className="state">{item.questionData.inquiryTitle}</div>
      <div className="content">{item.questionData.inquiryContext}</div>
      <div className="writingTime">
        <div className="date">{item.questionData.writtenDate}</div>
        <div className="time">{item.questionData.writtenTime}</div>
      </div>
      <div className="state">
        {item.questionData.processingStatus ? '답변 완료' : '진행중'}
      </div>
      {item.questionData.processingStatus ? (
        <div className="answer">
          <h2>답변 내용</h2>
          <StyledCard>{item.answerData.answerContext}</StyledCard>
        </div>
      ) : (
        ''
      )}
      {item.questionData.processingStatus ? (
        <div className="show" onClick={showDetailHandler}>
          답변 확인▼
        </div>
      ) : (
        ''
      )}
    </Wrapper>
  );
};

export default QnaItem;
