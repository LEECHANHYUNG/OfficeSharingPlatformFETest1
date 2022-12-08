import axios from 'axios';
import { getSession, signOut } from 'next-auth/react';
import React from 'react';
import styled from 'styled-components';
import Banner from '../../components/mypage/Banner';
import Header from '../../components/mypage/header';
const Wrapper = styled.div``;

const Mypage = ({
  userName,
  joinDate,
  mileagePoint,
  totalReviewNumber,
  message = 'success',
}) => {
  if (message !== 'success') {
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
  const instance = axios.create();
  instance.interceptors.response.use(
    async (response) => response,
    async (error) => {
      if (error.response.status === 401) {
        const response = await axios({
          method: 'post',
          url: 'http://localhost:8080/auth/refresh',
          headers: { Authorization: session.user.refreshToken },
        });
        if (response.status === 202) {
          console.log(session.user.accessToken);
          session.user.accessToken = response.data.accessToken;
          session.user.refreshToken = response.data.refreshToken;
        } else {
          new Promise.reject(new Error('로그인 인증 만료'));
        }
      }
    }
  );
  try {
    const response = await instance.get('http://localhost:8080/mypage', {
      headers: { Authorization: session.user.accessToken },
    });
    console.log(response);
    if (response.status === 200) {
      userData = response.data;
    } else {
      throw new Error(response);
    }
  } catch (error) {
    userData = { message: '로그인 정보 만료' };
  }

  return {
    props: userData,
  };
}

export default Mypage;
