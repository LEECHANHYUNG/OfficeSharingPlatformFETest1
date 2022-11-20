import { faBorderTopLeft } from '@fortawesome/free-solid-svg-icons/faBorderTopLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { modalActions } from '../../store/modal';

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
  & h1 svg {
    height: 3rem;
    padding-right: 20px;
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
    font-size: 1.2rem;
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
  const isLoginClicked = useSelector((state) => state.modal.isLoginClicked);
  const dispatch = useDispatch();
  const onClickLogin = () => {
    dispatch(modalActions.loginClick());
  };
  return (
    <Fragment>
      <Header>
        <Link href="/" className="link">
          <a>
            <h1>
              <FontAwesomeIcon icon={faBorderTopLeft} className="logo" /> Office
              Office Sharing Platform
            </h1>
          </a>
        </Link>
        <ul>
          <li>
            <Link href="/auth/signin" className="link">
              로그인
            </Link>
          </li>
          <li className="line">|</li>
          <li>
            <Link href="/auth/signup" className="link">
              회원가입
            </Link>
          </li>
        </ul>
      </Header>
    </Fragment>
  );
};

export default MainHeader;
