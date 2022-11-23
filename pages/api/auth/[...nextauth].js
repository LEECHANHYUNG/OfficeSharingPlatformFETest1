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
          const res = await fetch(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${process.env.FIREBASE_API_KEY}`,
            {
              method: 'POST',
              body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
              }),
              headers: { 'Content-Type': 'application/json' },
            }
          );
          if (!res.ok) {
            return null;
          }
          const data = await res.json();
          const user = { idToken: data.idToken };
          console.log(user);
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
      session.user.idToken = token.idToken;
      console.log(token);
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        console.log(user);
        token.idToken = user.idToken;
        return token;
      }
      return token;
    },
  },
});
