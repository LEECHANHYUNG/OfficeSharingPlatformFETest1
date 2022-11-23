import Link from 'next/link';
import { Fragment, useEffect, useState } from 'react';
import { signOut, signIn } from 'next-auth/react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { modalActions } from '../../store/modal';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 8vh;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #252424;
  z-index: 1000;
  & h1 {
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & ul li {
    color: #fff;
    cursor: pointer;
    font-size: 1rem;
  }
  & .line {
    padding: 0 20px;
  }
  & Link .link {
    text-decoration: none;
    color: #fff;
  }
  & Link {
    color: #fff;
    text-decoration: none;
  }
`;

const MainHeader = () => {
  const [isAunthenticated, setIsAuthenticated] = useState(false);
  const { session, status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/');
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, [status]);

  const signOutHandler = () => {
    signOut();
  };
  return (
    <Fragment>
      <Header>
        <Link href="/" className="link">
          <a>
            <h1>
              <Image src={'/svg/logo.svg'} width="32" height="32" />
              Place Sharing Platform
            </h1>
          </a>
        </Link>
        <ul>
          {!isAunthenticated && (
            <li>
              <Link href="/auth/signin" className="link">
                로그인
              </Link>
            </li>
          )}
          {isAunthenticated && <li onClick={signOutHandler}>로그아웃</li>}
          <li className="line">|</li>
          {!isAunthenticated && (
            <li>
              <Link href="/auth/signup" className="link">
                회원가입
              </Link>
            </li>
          )}
          {isAunthenticated && (
            <li>
              <Link href="/mypage" className="link">
                마이페이지
              </Link>
            </li>
          )}
        </ul>
      </Header>
    </Fragment>
  );
};

export default MainHeader;
