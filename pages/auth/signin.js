import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Email from '../../components/auth/Email';
import Password from '../../components/auth/Password';
import AuthHeader from '../../components/ui/AuthHeader';
import Button from '../../components/ui/Button';
import { authSliceActions } from '../../store/auth';

const Wrapper = styled.div`
  margin: 20vh auto;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  text-align: center;

  .signInForm form {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .control {
    width: 100%;
  }
  .control.invalid input {
    border-color: red;
    background: #fbdada;
  }
  .control.invalid input:focus {
    outline: none;
    border-color: #4f005f;
    background: #f6dbfc;
  }
  .signInForm form input {
    width: 80%;
    height: 40px;
    margin: 10px auto;
  }

  Button {
    width: 80%;
    margin-top: 20px;
  }
  .navLink {
    margin-top: 20px;
    text-decoration: underline;
  }
  .validity-comment {
    text-align: left;
    margin-left: 60px;
    position: relative;
    top: 0px;
    left: 0px;
  }
`;
const SignIn = () => {
  const router = useRouter();
  const enteredEmail = useSelector((state) => state.auth.enteredEmail);
  const enteredPassword = useSelector((state) => state.auth.enteredPassword);
  const emailIsValid = useSelector((state) => state.auth.emailIsValid);
  const passwordIsValid = useSelector((state) => state.auth.passwordIsValid);
  const [formIsValid, setFormIsValid] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authSliceActions.resetValidation());
  }, []);
  useEffect(() => {
    const validityChecker = setTimeout(() => {
      setFormIsValid(emailIsValid & passwordIsValid);
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
      router.replace('/mypage');
      return;
    } else {
      alert(result.error);
    }
    signIn();
  };
  return (
    <Wrapper>
      <header>
        <AuthHeader />
      </header>
      <section className="signInForm">
        <form>
          <input name="csrfToken" type="hidden" />
          <Email />
          <Password />
          <Button type="submit" onClick={loginHanlder} disabled={!formIsValid}>
            로그인
          </Button>
          <p className="navLink">
            계정이 없으신가요?<Link href="/auth/signup">회원가입</Link>
          </p>
          <p className="navLink">
            <Link href="/auth/findUserInfo">아이디/비밀번호 찾기</Link>
          </p>
        </form>
      </section>
    </Wrapper>
  );
};

export default SignIn;
