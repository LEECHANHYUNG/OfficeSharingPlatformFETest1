import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import Email from '../../components/auth/Email';
import Name from '../../components/auth/Name';
import Password from '../../components/auth/Password';
import Phone from '../../components/auth/Phone';
import Button from '../../components/ui/Button';
import { authSliceActions } from '../../store/auth';

const SignUp = () => {
  const router = useRouter();
  const emailIsValid = useSelector((state) => state.auth.emailIsValid);
  const passwordIsValid = useSelector((state) => state.auth.passwordIsValid);
  const nameIsValid = useSelector((state) => state.auth.nameIsValid);
  const phoneIsValid = useSelector((state) => state.auth.phoneIsValid);
  const enteredEmail = useSelector((state) => state.auth.enteredEmail);
  const enteredPassword = useSelector((state) => state.auth.enteredPassword);
  const enteredName = useSelector((state) => state.auth.enteredName);
  const enteredPhone = useSelector((state) => state.auth.enteredPhone);
  const jobRef = useRef();
  const deskRef = useRef();
  const meetingRoomRef = useRef();
  const officeRef = useRef();
  const [formIsValid, setFormIsValid] = useState(false);
  const disatch = useDispatch();
  useEffect(() => {
    disatch(authSliceActions.resetValidation());
  }, []);
  useEffect(() => {
    const validityChecker = setTimeout(() => {
      setFormIsValid(
        emailIsValid && passwordIsValid && nameIsValid && phoneIsValid
      );
    }, 100);
    return () => {
      clearTimeout(validityChecker);
    };
  }, [emailIsValid, passwordIsValid, nameIsValid, phoneIsValid]);
  const signupHandler = (e) => {
    e.preventDefault();
    fetch('/api/auth/signup', {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        name: enteredName,
        phoneNumber: enteredPhone,
        job: jobRef.current.value,
        preferType: [
          {
            desk: deskRef.current.checked,
            meetingRoom: meetingRoomRef.current.checked,
            office: officeRef.current.checked,
          },
        ],
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((data) => {
      router.replace('/');
    });
  };
  return (
    <Wrapper>
      <header>
        <Link href="/" className="headerLink">
          <h1>Office Sharing Platform</h1>
        </Link>
      </header>
      <section className="signInForm">
        <form onSubmit={signupHandler}>
          <Email />
          <Password />
          <Name />
          <Phone />
          <input type="text" name="job" placeholder="직업" ref={jobRef} />
          <div className="select">
            <p>선호 공간 선택</p>
            <div className="selectBox">
              <label htmlFor="desk">
                <input type="checkbox" name="desk" value="true" ref={deskRef} />
                데스크
              </label>
              <label htmlFor="meeting">
                <input
                  type="checkbox"
                  name="meeting"
                  value="true"
                  ref={meetingRoomRef}
                />
                회의실
              </label>
              <label htmlFor="office">
                <input
                  type="checkbox"
                  name="office"
                  value="true"
                  ref={officeRef}
                />
                오피스
              </label>
            </div>
          </div>
          <Button type="submit" disabled={!formIsValid}>
            회원가입
          </Button>
          <p>
            계정이 있으신가요?<Link href="/auth/signin">로그인</Link>
          </p>
        </form>
      </section>
    </Wrapper>
  );
};

export default SignUp;
const Wrapper = styled.div`
  margin: 0 auto;
  border-radius: 6px;
  background-color: white;
  padding: 1rem;
  width: 90%;
  max-width: 40rem;
  text-align: center;
  position: relative;
  top: 50%;
  transform: translateY(50%);
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
  & .select {
    display: flex;
    width: 80%;
    align-items: start;
    justify-content: flex-start;
    flex-direction: column;
  }
  & .select p {
    margin: 0;
  }
  & .select .selectBox {
    display: flex;
    align-self: start;
    width: 15px;
    width: 100%;
  }
  & .select .selectBox input {
    width: 15px;
    height: 15px;
    margin: 0 5px;
  }
`;
