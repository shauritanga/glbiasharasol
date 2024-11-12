import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import { getUserByEmail, getUserById } from "./data/user";
import bcrypt from "bcryptjs";
import { LoginSchema } from "@/schemas";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  adapter: PrismaAdapter(db),
  session: { strategy: "jwt", maxAge: 20 * 60 },
  callbacks: {
    async session({ token, session }) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      if (token.role && session.user) {
        session.user.role = token.role as "ADMIN" | "USER";
      }
      return session;
    },
    async jwt({ token }) {
      if (!token.sub) return null;
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      token.role = existingUser.role;
      return token;
    },
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        console.log("Hello");
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          console.log("1234");
          const { email, password } = validatedFields.data;
         
          const user = await getUserByEmail(email);
          console.log(user);
          if (!user || !user.password) return null;
          console.log("Hapa inafika");
          const isMatch = await bcrypt.compare(password, user.password);
          console.log(isMatch);
          if (isMatch) {
            return user;
          }
        }
        return null;
      },
    }),
  ],
});
