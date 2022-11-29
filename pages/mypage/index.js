import { getSession, signOut } from 'next-auth/react';
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
  let userData = {};
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
  if (response.ok) {
    //accessToken 일치
    userData = response.json();
  }
  if (response.status === 500) {
    // accessToken 불일치
    signOut();
  }
  if (response.status === 401) {
    // accessToken 만료
    console.log('accessToken 만료');
    fetch('http://localhost:8080/auth/refresh', {
      method: 'POST',
      headers: {
        Authorization: session.user.refreshToken,
      },
    })
      .then((res) => {
        if (res.status === 500 || res.status === 403) {
          //refreshToken 만료 or 불일치
          signOut();
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data) {
          console.log(data);
          console.log(session.user.accessToken);
          // accessToken발급
          session.user.refreshToken = data.refreshToken;
          session.user.accessToken = data.accessToken;
          console.log(session.user.accessToken);
          fetch('http://localhost:8080/mypage', {
            // accessToken 전달
            method: 'GET',
            headers: {
              Authorization: session.user.accessToken,
            },
          })
            .then((res) => {
              if (response.ok) {
                return res.json();
              } else {
                signOut();
              }
            })
            .then((data) => (userData = data));
        }
      });
  }
  return {
    props: userData,
  };
}

export default Mypage;
