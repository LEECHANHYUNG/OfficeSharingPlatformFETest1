import { getSession, signOut } from 'next-auth/react';
import React from 'react';
import styled from 'styled-components';
import Banner from '../../components/mypage/Banner';
import Header from '../../components/mypage/header';
import instance from '../api/axios';
const Wrapper = styled.div``;

const Mypage = ({
  userName,
  joinDate,
  mileagePoint,
  totalReviewNumber,
  message = 'success',
}) => {
  if (message != 'success') {
    signOut({ callbackUrl: 'http://localhost:3000/auth/signin' });
  } else {
    return (
      <Wrapper>
        <Header
          userName={userName}
          joinDate={joinDate.split(' ')[0]}
          mileagePoint={mileagePoint}
          totalReviewNumber={totalReviewNumber}
        />
        <Banner />
      </Wrapper>
    );
  }
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
    const response = await instance.get('http://localhost:8080/mypage', {
      headers: { Authorization: session.user.accessToken },
    });
    userData = response.data;
    if (response.status === 202) {
      session.user.accessToken = response.data.accessToken;
      session.user.refreshToken = response.data.refreshToken;
      console.log(session.user.accessToken);
    } else {
      throw new Error('로그인 인증 만료');
    }
  } catch (error) {
    console.log(error);
    userData = { message: '로그인 인증 만료' };
  }

  return {
    props: userData,
  };
}

export default Mypage;
