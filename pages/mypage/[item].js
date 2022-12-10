import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import Banner from '../../components/mypage/Banner';
import Header from '../../components/mypage/header';
import Usage from '../../components/mypage/use/Usage';
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

const Mypage = (props) => {
  const router = useRouter();
  return (
    <Wrapper>
      <Header />
      <Banner />
      {router.query.item === '' && <div className="item"></div>}
      {router.query.item === 'usage' && (
        <div className="item">
          <Usage item={props} />
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
  const params = context.params;
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
  const accessToken = session.user.accessToken;
  const refreshToken = session.user.refreshToken;
  console.log(params.item);
  try {
    const response = await axios({
      url: 'http://localhost:3000/api/auth/token',
      method: 'post',
      data: {
        url: `http://localhost:8080/mypage/${params.item}`,
        accessToken,
        refreshToken,
      },
    });
    if (response.status === 200) {
      userData = response.data;
    } else {
      throw new Error(response.data);
    }
  } catch (error) {
    userData = { message: '로그인 정보 만료' };
  }
  return {
    props: userData,
  };
}

export default Mypage;
