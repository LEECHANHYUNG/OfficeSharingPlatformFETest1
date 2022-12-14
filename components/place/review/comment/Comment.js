import React from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Card from '../../../ui/Card';
import TextArea from '../../../ui/TextArea';
import CommentContent from './CommentContent';
const Wrapper = styled(Card)`
  width: 22vw;
  position: absolute;
  right: 20px;
  border: 1px solid #6a9eff;
  margin-top: 30px;
  h1 {
    font-size: 1.5rem;
    padding-left: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid #111;
  }
  .new-comment {
    width: 300px;
  }
  @media screen and (max-width: 1170px) {
    width: 35vw;
  }
  @media screen and (max-width: 758px) {
    position: relative;
    right: 0px;
    margin-top: 10px;
    width: 88vw;
  }
`;
const Comment = () => {
  const [page, setPage] = useState(1);
  const commentData = useSelector((state) => state.place.commentData);
  console.log(commentData);
  return (
    <Wrapper>
      <h1>댓글</h1>
      <TextArea placeholder={'댓글 입력'}></TextArea>
      {typeof commentData !== 'string' ? (
        Object.keys(commentData.commentData).map((elem) => (
          <CommentContent
            writer={commentData.commentData[elem].writer}
            context={commentData.commentData[elem].context}
            writtenDate={commentData.commentData[elem].writtenDate}
            writtenTime={commentData.commentData[elem].writtenTime}
          />
        ))
      ) : (
        <h4>{commentData}</h4>
      )}
    </Wrapper>
  );
};

export default Comment;
