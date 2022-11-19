import React from 'react';

const SignIn = () => {
  return (
    <Card className={classes.signIn}>
      <header>
        <Link to="/main" className={classes.headerLink}>
          <h1>Office Sharing Platform</h1>
        </Link>
      </header>
      <section className={classes.signUpForm}>
        <form onSubmit={submitHandler}>
          <input
            type="email"
            name="email"
            placeholder="아이디(이메일 형식)"
            ref={emailInputRef}
          />
          <input
            type="password"
            name="password"
            placeholder="패스워드"
            ref={passwordInputRef}
          />

          {isLoading && <p>loading...</p>}
          {!isLoading && <Button type="submit">로그인</Button>}
          <p className={classes.navLink}>
            계정이 없으신가요?<Link to="/auth/signup">회원가입</Link>
          </p>
        </form>
      </section>
    </Card>
  );
};

export default SignIn;
