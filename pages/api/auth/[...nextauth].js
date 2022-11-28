import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

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
          const res = await fetch('http://localhost:8080/auth/signin', {
            method: 'POST',
            body: JSON.stringify({
              email,
              password,
            }),
            headers: { 'Content-Type': 'application/json' },
          });
          if (!res.ok) {
            return null;
          }
          const data = await res.json();
          const user = {
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
            email: email,
          };
          return user;
        } catch (error) {
          return error;
        }
      },
    }),
  ],
  secret: process.env.SECRET,
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
