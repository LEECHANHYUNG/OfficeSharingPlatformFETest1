import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import axios from 'axios';
export default NextAuth({
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        const email = credentials.email;
        const password = credentials.password;
        try {
          const response = await axios({
            url: 'http://localhost:8080/auth/signin',
            method: 'post',
            data: {
              email,
              password,
            },
            headers: { 'Content-Type': 'application/json' },
          });
          if (response.status === 202) {
            const user = {
              accessToken: response.data.accessToken,
              refreshToken: response.data.refreshToken,
              email: email,
            };
            return user;
          } else if (response.status === 401) {
            throw new Error();
          }
        } catch (error) {
          return Promise.reject(new Error('아이디/비밀번호를 확인해주세요'));
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth/signin',
  },
  callbacks: {
    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.email = token.email;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken;
        token.refreshToken = user.refreshToken;
        token.email = user.email;
        return token;
      }
      return token;
    },
  },
});
