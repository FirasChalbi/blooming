import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        console.log('Credentials received');

        const user = { id: 1, name: process.env.ADMIN_USERNAME, 
          password: process.env.ADMIN_PASSWORD  };

        if (credentials?.username === user.name && credentials?.password === user.password) {
          console.log('User authenticated:', user);
          return user;
        } else {
          console.log('User authentication failed');
          return null;
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
    error: "/auth/error",
  },secret: process.env.NEXTAUTH_SECRET,
};

const handler = (req, res) => NextAuth(req, res, authOptions);
export { handler as GET, handler as POST };
