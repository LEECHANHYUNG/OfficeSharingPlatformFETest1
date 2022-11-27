import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import Banner from '../../components/mypage/Banner';
import Header from '../../components/mypage/header';
import Use from '../../components/mypage/use/Use';

const Wrapper = styled.div`
  & Banner {
    width: 300px;
    display: inline-block;
  }
  & .item {
    width: 70%;
    min-width: 1100px;
    margin-left: 350px;
  }
`;

const Mypage = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <Header />
      <Banner />
      {router.query.item === 'use' && (
        <div className="item">
          <Use />
        </div>
      )}
    </Wrapper>
  );
};

export default Mypage;
