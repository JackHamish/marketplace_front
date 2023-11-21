import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function NftLayout({ children }: Props) {
  return (
    <main className="flex grow flex-col items-center justify-between px-12 py-6 pb-20">
      {children}
    </main>
  );
}
