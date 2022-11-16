import { faBorderTopLeft } from '@fortawesome/free-solid-svg-icons/faBorderTopLeft';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import styled from 'styled-components';

const Header = styled.header`
  width: 100%;
  height: 8vh;
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #252424;

  & h1 {
    color: #fff;
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
  return (
    <Header>
      <Link href="/main" className="link">
        <a>
          <h1>
            <FontAwesomeIcon icon={faBorderTopLeft} className="logo" /> Office
            Sharing Platform
          </h1>
        </a>
      </Link>
      <ul>
        <li>
          <Link href="/" className="link">
            SignIn
          </Link>
        </li>
        <li className="line">|</li>
        <li>
          <Link href="/" className="link">
            SignUp
          </Link>
        </li>
      </ul>
    </Header>
  );
};

export default MainHeader;
