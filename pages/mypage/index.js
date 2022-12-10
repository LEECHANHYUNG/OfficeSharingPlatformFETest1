import axios from 'axios';
import { getSession, signOut } from 'next-auth/react';
import React from 'react';
import styled from 'styled-components';
import Banner from '../../components/mypage/Banner';
import Header from '../../components/mypage/header';
import instance from '../api/auth/token';
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
  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }
  let userData = {};
  try {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:3000/api/auth/token',
      data: {
        url: 'http://localhost:8080/mypage',
        accessToken: session.user.accessToken,
        refreshToken: session.user.refreshToken,
      },
    });
    if (response.status === 200) {
      userData = response.data;
    } else if (response.status === 202) {
      session.user.accessToken = response.data.accessToken;
      return {
        redirect: {
          destination: '/mypage',
          permanent: false,
        },
      };
    } else {
      throw new Error('authentication expired');
    }
  } catch (error) {}

  return {
    props: userData,
  };
}

export default Mypage;
