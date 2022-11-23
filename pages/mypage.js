import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';

const MyPage = () => {
  const session = useSession();
  const router = useRouter();
  console.log(session);
  return <h1>MyPage</h1>;
};

export default MyPage;
