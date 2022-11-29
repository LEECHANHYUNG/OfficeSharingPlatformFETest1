import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.section`
  position: relative;
  top: 80px;
  float: left;
  width: 300px;
  height: 1100px;
  border: 2px solid #111;
  border-top: none;
  background: #fff;
  padding-left: 20px;
  padding-top: 20px;
  & .title {
    font-size: 0.8rem;
    color: #999;
    margin: 20px 0;
  }
  & .title ~ a {
    display: block;
    margin-bottom: 30px;
  }
`;

const Banner = () => {
  return (
    <Wrapper>
      <div>
        <div className="title">이용 관리</div>
        <Link href="/mypage/use">이용 내역</Link>
        <Link href="/mypage/comment">댓글 관리</Link>
        <Link href="/mypage/point">마일리지 관리</Link>
      </div>
      <div>
        <div className="title">고객 센터</div>
        <Link href="/mypage/qna">1:1문의</Link>
      </div>
      <div>
        <div className="title">정보 관리</div>
        <Link href="/mypage/modify">정보 수정</Link>
      </div>
    </Wrapper>
  );
};

export default Banner;
