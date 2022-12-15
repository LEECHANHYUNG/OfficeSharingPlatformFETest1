import { useSession } from 'next-auth/react';
import React from 'react';
import { Fragment } from 'react';
import styled from 'styled-components';
import Button from './Button';

const Content = styled.textarea`
  &::-webkit-scrollbar {
    width: 0px;
  }
  width: 100%;
  height: 60px;
  padding: 15px;
  border-radius: 5px;
  outline: none;
  resize: none;
  margin-top: 10px;
  font-size: 1rem;
  border: 1px solid #111;
  max-height: 330px;
`;
const TextArea = ({ placeholder, addCommentHandler }) => {
  const session = useSession();
  console.log(session);
  const changeHeightHandler = (e) => {
    if (!session.data) {
      alert('로그인이 필요한 서비스입니다.');
      e.target.value = '';
    }
    e.target.style.height = `63px`;
    let scHeight = e.target.scrollHeight;
    e.target.style.height = `${scHeight}px`;
    if (e.target.value.length > 40) {
      alert('최대 40자까지 입력 가능합니다.');
      e.target.value = e.target.value.slice(0, 40);
      console.log(e.target.value);
    }
  };

  return (
    <Fragment>
      <Content
        placeholder={
          !session.data ? '로그인이 필요한 서비스입니다.' : placeholder
        }
        onKeyUp={changeHeightHandler}
      ></Content>
      <Button onClick={addCommentHandler} disabled={!session.data}>
        등록
      </Button>
    </Fragment>
  );
};

export default TextArea;
