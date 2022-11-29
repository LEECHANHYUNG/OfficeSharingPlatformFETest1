import { getSession } from 'next-auth/react';
import React from 'react';
import styled from 'styled-components';
import Banner from '../../components/mypage/Banner';
import Header from '../../components/mypage/header';

const Wrapper = styled.div``;

const Mypage = (props) => {
  return (
    <Wrapper>
      <Header
        userName={props.userName}
        myPageReservationList={props.myPageReservationList}
      />
      <Banner />
    </Wrapper>
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
  const response = await fetch('http://localhost:8080/mypage', {
    method: 'GET',
    headers: {
      Authorization: session.user.accessToken,
    },
  });
  const data = response.json();

  return {
    props: data,
  };
}

export default Mypage;
