import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useEffect, useReducer, useRef, useState } from 'react';
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
  position: relative;
  top: 200px;

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
const emailRegExp =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;

const passwordRegExp =
  /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
const emailReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return { value: action.val, isValid: emailRegExp.test(action.value) };
  }
  if (action.type === 'INPUT_BLUR') {
    return { value: state.value, isValid: emailRegExp.test(state.value) };
  }
  return { value: '', isValid: false };
};
const passwordReducer = (state, action) => {
  if (action.type === 'USER_INPUT') {
    return {
      value: action.val,
      isValid: passwordRegExp.test(action.val.trim()),
    };
  }
  if (action.type === 'INPUT_BLUR') {
    return {
      value: state.value,
      isValid: passwordRegExp.test(state.value.trim()),
    };
  }
  return { value: '', isValid: false };
};

const SignIn = ({ csrfToken }) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [emailBlur, setEmailBlur] = useState(false);
  const [passwordBlur, setPasswordBlur] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);
  const router = useRouter();

  const [emailState, dispatchEmail] = useReducer(emailReducer, {
    value: '',
    isValid: null,
  });

  const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
    value: '',
    isValid: null,
  });
  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const validityChecker = setTimeout(() => {
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);
    return () => {
      clearTimeout(validityChecker);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = () => {
    dispatchEmail({ type: 'USER_INPUT', val: emailInputRef.current.value });

    setFormIsValid(
      emailRegExp.test(emailInputRef.current.value) && passwordState.isValid
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: 'USER_INPUT', val: event.target.value });
    setFormIsValid(
      emailState.isValid &&
        passwordRegExp.test(passwordInputRef.current.value.trim())
    );
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: 'INPUT_BLUR' });
    setEmailBlur(true);
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: 'INPUT_BLUR' });
    setPasswordBlur(true);
  };
  const loginHanlder = async (e) => {
    e.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    const result = await signIn('credentials', {
      redirect: false,
      email: enteredEmail,
      password: enteredPassword,
      returnSecureToken: true,
    });

    if (!result.error) {
      alert(result);
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
          <div
            className={`control${
              emailState.isValid === false ? ' invalid' : ''
            }`}
          >
            <div className="validity-comment">
              {!emailState.isValid &&
                emailBlur &&
                '이메일 양식으로 입력 해주세요'}
            </div>
            <label htmlFor="email">
              <input
                type="email"
                name="email"
                placeholder="아이디(이메일 형식)"
                ref={emailInputRef}
                onChange={emailChangeHandler}
                onBlur={validateEmailHandler}
                required
              />
            </label>
          </div>
          <div
            className={`control${
              passwordState.isValid === false ? ' invalid' : ''
            }`}
          >
            <div className="validity-comment">
              {!passwordState.isValid &&
                passwordBlur &&
                '영어 대소문자/숫자/특수문자 포함 8~15자리'}
            </div>
            <label htmlFor="password">
              <input
                type="password"
                name="password"
                placeholder="패스워드"
                ref={passwordInputRef}
                onChange={passwordChangeHandler}
                onBlur={validatePasswordHandler}
                minLength="8"
                maxLength="15"
                required
              />
            </label>
          </div>
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
