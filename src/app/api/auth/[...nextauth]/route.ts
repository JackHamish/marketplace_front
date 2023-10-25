import { login, refresh } from "@/domains/auth";
import { AxiosError } from "axios";
import NextAuth, { AuthOptions, User } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: AuthOptions = {
    providers: [
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
                    const res = await login(
                        credentials?.email,
                        credentials?.password,
                    );

                    if (res.status !== 200) {
                        // console.log(res);

                        throw new Error(res.data.message);
                    }

                    const user = res.data;

                    return user;
                } catch (error) {
                    const err = error as AxiosError;
                    console.log(err.response?.data);
                }
            },
        }),
    ],
    pages: {
        signIn: "/login",
        error: "/",
    },
    callbacks: {
        async jwt({ token, user, session }) {
            if (user) return { ...token, ...user };

            if (new Date().getTime() < token.jwtExpiresIn) return token;

            return await refresh(token);
        },
        async session({ session, token, user }) {
            return {
                ...session,
                user: {
                    ...token.user,
                },
                accessToken: token.accessToken,
                refreshToken: token.refreshToken,
            };
        },
    },

    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
