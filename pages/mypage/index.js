import { useSession } from 'next-auth/react';
import React from 'react';
import styled from 'styled-components';
import Header from '../../components/mypage/header';

const Wrapper = styled.div``;

const Mypage = () => {
  const { data } = useSession();
  return (
    <Wrapper>
      <Header email={data.user.email} />
    </Wrapper>
  );
};

export default Mypage;
