import axios from 'axios';
import { getSession } from 'next-auth/react';
import React, { Fragment } from 'react';
import Banner from '../../components/mypage/Banner';
import CurrentReservation from '../../components/mypage/CurrentReservation';
import Header from '../../components/mypage/Header';
import RecentRerservation from '../../components/mypage/RecentRerservation';

const Mypage = (props) => {
  return (
    <Fragment>
      <Header userData={props.userData} />
      <Banner />
      <CurrentReservation item={props.currentResData} />
      <RecentRerservation item={props.recentResData} />
    </Fragment>
  );
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
  console.log(session);
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
