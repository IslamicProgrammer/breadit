import { NextAuthOptions } from "next-auth";
import { db } from "./db";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";
import { nanoid } from "nanoid";

export const AuthOptions: NextAuthOptions = {
  adapter: PrismaAdapter(db),
  pages: { signIn: "/sign-in" },
  session: { strategy: "jwt" },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],

  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.user!.id = token.id;
        session.user!.name = token.name;
        session.user!.email = token.email;
        session.user!.image = token.picture;
        session.user!.username = token.username;
      }

      return session;
    },
    async jwt({ token, user }) {
      const dbUser = await db.user.findFirst({
        where: {
          email: user.email,
        },
      });

      if (!dbUser) {
        token.id = user?.id;
        return token;
      }

      if (!dbUser.username) {
        await db.user
          .update({
            where: { id: user.id },
            data: { username: nanoid(10) },
          })
          .then(() => {
            return {
              id: dbUser.id,
              name: dbUser.name,
              email: dbUser.email,
              picture: dbUser.image,
              username: dbUser.username || "",
            };
          });
      }

      return {
        id: dbUser.id,
        name: dbUser.name,
        email: dbUser.email,
        picture: dbUser.image,
        username: dbUser.username || "",
      };
    },
    redirect() {
      return "/";
    },
  },
};
