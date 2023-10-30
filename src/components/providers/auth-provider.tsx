"use client";
import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

type Props = React.PropsWithChildren;

export const AuthProvider = ({ children }: Props) => {
  return <SessionProvider>{children}</SessionProvider>;
};
