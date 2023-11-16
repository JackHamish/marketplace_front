import { login, refresh } from "@/domains/auth";
import { loginSteam } from "@/domains/steam";
import { SteamUser } from "@/types/steam-user";
import { AxiosError } from "axios";
import NextAuth, { AuthOptions, User } from "next-auth";
import SteamProvider, {
  PROVIDER_ID as STEAM_PROVIDER_ID,
  SteamProfile,
} from "next-auth-steam";

import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextRequest } from "next/server";

async function handler(
  req: NextRequest,
  ctx: { params: { nextauth: string[] } },
) {
  return NextAuth(req, ctx, {
    providers: [
      SteamProvider(req, {
        //@ts-ignore
        clientSecret: process.env.STEAM_SECRET!,
        callbackUrl: "http://localhost:3000/api/auth/callback",
      }),
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          email: {
            label: "Username",
            type: "text",
            placeholder: "jsmith",
          },
          password: { label: "Password", type: "password" },
        },
        async authorize(credentials, req) {
          if (!credentials?.email || !credentials?.password) return null;

          try {
            const res = await login(credentials?.email, credentials?.password);

            if (res.status !== 200) {
              throw new Error(res.data.message);
            }

            const user = res.data;

            return user;
          } catch (error) {
            const err = error as AxiosError;
          }
        },
      }),
    ],
    pages: {
      signIn: "/login",
      error: "/",
    },
    callbacks: {
      async jwt({ token, user, session, trigger, profile, account }) {
        if (account?.provider === STEAM_PROVIDER_ID) {
          const user = await loginSteam(profile as SteamUser);

          token = user;
          return token;
        }

        if (user) {
          return { ...token, ...user };
        }

        if (trigger === "update") {
          token.user = { ...session };
        }

        if (new Date().getTime() < token.jwtExpiresIn) {
          return token;
        }

        return await refresh(token);
      },
      async session({ session, token, user }) {
        return {
          ...session,
          user: token.user,
          accessToken: token.accessToken,
          refreshToken: token.refreshToken,
        };
      },
    },

    secret: process.env.NEXTAUTH_SECRET,
    session: {
      strategy: "jwt",
    },
  });
}

export { handler as GET, handler as POST };
