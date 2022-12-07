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
  if (message != 'success') {
    signOut();
    return;
  } else {
    return (
      <Wrapper>
        <Header
          userName={userName}
          joinDate={joinDate.split(' ')[0] || ''}
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
    const response = await axios({
      url: 'http://localhost:8080/mypage',
      headers: { Authorization: session.user.accessToken },
    });
    console.log(response.status);
    if (response.status === 200) {
      userData = response.data;
    } else if (response.status === 401) {
      try {
        const response = await axios({
          url: 'http://localhost:8080/auth/refresh',
          headers: { Authorization: session.user.refreshToken },
        });
        if (response.status === 202) {
          session.user.refreshToken = response.data.refreshToken;
          session.user.accessToken = response.data.accessToken;
          const response = await axios({
            method: 'post',
            url: 'http://localhost:8080/mypage',
            headers: { Authorization: session.user.accessToken },
          });
          if (response.status === 200) {
            userData = response.data;
            return;
          }
        } else if (response.status === 500) {
          userData = {
            message: '로그인 정보 만료',
          };
        } else if (response.status === 403) {
          userData = {
            message: '로그인 정보 만료',
          };
        }
      } catch (error) {}
    } else if (response.status === 500) {
      throw new Error('로그인 정보 만료');
    }
  } catch (error) {}
  return {
    props: userData,
  };
}

export default Mypage;
