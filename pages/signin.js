import Link from 'next/link';
import React from 'react';
import Card from '../components/ui/Card';
const SignIn = () => {
  return (
    <Card>
      <header>
        <Link href="/">
          <h1>Office Sharing Platform</h1>
        </Link>
      </header>
      <section>
        <form>
          <input type="email" name="email" placeholder="아이디(이메일 형식)" />
          <input type="password" name="password" placeholder="패스워드" />

          <p>
            계정이 없으신가요?<Link href="/">회원가입</Link>
          </p>
        </form>
      </section>
    </Card>
  );
};

export default SignIn;
