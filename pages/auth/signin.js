import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import Button from '../../components/ui/Button';

const Wrapper = styled.div`
  margin: 5rem auto;
  border-radius: 6px;
  background-color: white;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  text-align: center;

  & header .headerLink {
    color: #111;
    text-decoration: none;
    font-size: 30px;
    font-weight: 900;
    text-align: center;
    cursor: pointer;
  }
  & .signInForm form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  & .signInForm form input {
    width: 80%;
    height: 40px;
    margin: 10px auto;
  }
  & .signInForm .select {
    display: flex;
    margin-left: 46px;
    flex-direction: column;
    align-self: flex-start;
  }
  & .signInForm .select p {
    margin: 0;
  }
  & .signInForm .select input {
    position: relative;
    top: 14px;
    width: 15px;
  }
  & .signInForm .select .selectBox {
    width: 100%;
  }
  & Button {
    width: 80%;
    margin-top: 20px;
  }
  & .navLink {
    text-align: center;
  }
`;

const signup = () => {
  return (
    <Wrapper>
      <header>
        <Link href="/" className="headerLink">
          <h1>Office Sharing Platform</h1>
        </Link>
      </header>
      <section className="signInForm">
        <form>
          <input type="email" name="email" placeholder="아이디(이메일 형식)" />
          <input type="password" name="password" placeholder="패스워드" />

          <Button type="submit">로그인</Button>
          <p className="navLink">
            계정이 없으신가요?<Link href="/auth/signup">회원가입</Link>
          </p>
        </form>
      </section>
    </Wrapper>
  );
};

export default signup;
