import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import Banner from '../../components/mypage/Banner';
import Header from '../../components/mypage/header';
import Use from '../../components/mypage/use/Use';
import Comment from '../../components/mypage/comment/Comment';
import Point from '../../components/mypage/point/Point';
import Qna from '../../components/mypage/qna/Qna';
import { getSession } from 'next-auth/react';
import axios from 'axios';
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

const Mypage = ({ userName, joinDate, mileagePoint, totalReviewNumber }) => {
  const router = useRouter();
  return (
    <Wrapper>
      <Header
        userName={userName}
        joinDate={joinDate.split(' ')[0]}
        mileagePoint={mileagePoint}
        totalReviewNumber={totalReviewNumber}
      />
      <Banner />
      {router.query.item === '' && (
        <div className="item">
          <Use />
        </div>
      )}
      {router.query.item === 'use' && (
        <div className="item">
          <Use />
        </div>
      )}
      {router.query.item === 'comment' && (
        <div className="item">
          <Comment />
        </div>
      )}
      {router.query.item === 'point' && (
        <div className="item">
          <Point />
        </div>
      )}
      {router.query.item === 'qna' && (
        <div className="item">
          <Qna />
        </div>
      )}
    </Wrapper>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession({ req: context.req });
  let userData = {};
  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }

  try {
    const response = await axios({
      url: 'http://localhost:8080/mypage',
      headers: { Authorization: session.user.accessToken },
    });
    if (response.status === 200) {
      userData = response.data;
    }
  } catch (error) {
    userData = { message: '로그인 정보 만료' };
  }
  return {
    props: userData,
  };
}

export default Mypage;
