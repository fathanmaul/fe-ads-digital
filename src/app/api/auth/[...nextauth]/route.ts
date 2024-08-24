import { login } from "@/lib/service";

import { compare } from "bcrypt";
import {
  NextAuthOptions,
  User as NextAuthUser,
  Session,
  User,
} from "next-auth";
import { JWT } from "next-auth/jwt";
import NextAuth from "next-auth/next";
import Credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const { email, password } = credentials as {
          email: string;
          password: string;
        };
        const user: any = await login({ email, password });
        if (!user) {
          throw new Error("No user found");
        }
        const passwordConfirm = await compare(password, user.password);
        if (!passwordConfirm) {
          throw new Error("Password is incorrect");
        }
        return {
          ...user,
          username: user.username,
          country_code: user.country_code,
          phone: user.phone,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.email = user.email;
        token.username = (user as User).username;
      }
      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      session.user = session.user || {};
      if (token.email) {
        session.user.email = token.email;
      }
      if (token.username) {
        session.user.username = token.username as string;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
