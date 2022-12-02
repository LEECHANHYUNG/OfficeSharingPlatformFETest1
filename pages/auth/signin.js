import { getSession, signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useReducer, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Email from '../../components/auth/Email';
import Password from '../../components/auth/Password';
import Button from '../../components/ui/Button';
import { authSliceActions } from '../../store/auth';

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
  }
  & header h1 {
    cursor: pointer;
  }
  & .signInForm form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  & .control {
    width: 100%;
  }
  & .control.invalid input {
    border-color: red;
    background: #fbdada;
  }
  & .control.invalid input:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }
  & .signInForm form input {
    width: 80%;
    height: 40px;
    margin: 10px auto;
  }

  & Button {
    width: 80%;
    margin-top: 20px;
  }
  & .navLink {
    text-align: center;
  }
  & .validity-comment {
    text-align: left;
    margin-left: 60px;
    position: relative;
    top: 0px;
    left: 0px;
  }
`;
const SignIn = ({ csrfToken }) => {
  const router = useRouter();
  const enteredEmail = useSelector((state) => state.auth.enteredEmail);
  const enteredPassword = useSelector((state) => state.auth.enteredPassword);
  const emailIsValid = useSelector((state) => state.auth.emailIsValid);
  const passwordIsValid = useSelector((state) => state.auth.passwordIsValid);
  const [formIsValid, setFormIsValid] = useState(false);
  const disatch = useDispatch();

  useEffect(() => {
    disatch(authSliceActions.resetValidation());
  }, []);
  useEffect(() => {
    const validityChecker = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 100);
    return () => {
      clearTimeout(validityChecker);
    };
  }, [emailIsValid, passwordIsValid]);

  const loginHanlder = async (e) => {
    e.preventDefault();

    const result = await signIn('credentials', {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    });

    if (!result.error) {
      router.replace('/');
      return;
    } else {
      alert(result.error);
    }
    signIn();
  };
  return (
    <Wrapper>
      <header>
        <Link href="/" className="headerLink">
          <h1>Office Sharing Platform</h1>
        </Link>
      </header>
      <section className="signInForm">
        <form>
          <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
          <Email />
          <Password />
          <Button type="submit" onClick={loginHanlder} disabled={!formIsValid}>
            로그인
          </Button>
          <p className="navLink">
            계정이 없으신가요?<Link href="/auth/signup">회원가입</Link>
          </p>
        </form>
      </section>
    </Wrapper>
  );
};

export default SignIn;
