import { signOut, useSession } from 'next-auth/react';
import React, { useState } from 'react';

const MyPage = () => {
  const { data: session, status } = useSession();
  const [userData, setUserData] = useState();
  console.log(session);
  console.log(status);
  try {
    fetch(process.env.myPage, {
      method: 'POST',
      headers: {
        Authorization: session.user.accessToken,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status === 200) {
          return res.json();
        } else {
          fetch(process.env.refresh, {
            method: 'GET',
            headers: {
              Authorization: session.user.refreshToken,
              'Content-Type': 'application/json',
            },
          })
            .then((res) => {
              if (res.status === 200) {
                return res.json();
              } else {
                signOut();
              }
            })
            .then((data) => {
              console.log(data.accessToken);
              console.log(data.refreshToken);
              return data;
            });
        }
      })
      .then((data) => {
        setUserData(data);
      });
  } catch (error) {}

  return <h1>{userData}</h1>;
};

export default MyPage;
