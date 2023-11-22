import React from "react";

type Props = {
  children: React.ReactNode;
  editModal: React.ReactNode;
  createNftModal: React.ReactNode;
  nftModal: React.ReactNode;
};

export default function UserLayout({
  children,
  editModal,
  createNftModal,
  nftModal,
}: Props) {
  return (
    <main className="flex grow flex-col items-center justify-between px-12 py-6 pb-20">
      {children}
      {editModal}
      {createNftModal}
      {nftModal}
    </main>
  );
}
