"use client";

import { useCurrentUser } from "@/domains/user/hooks";
import Loading from "./user-info/loading";
import UserInfo from "./user-info";

const UserPage = () => {
  const { data: user } = useCurrentUser();

  return user ? <UserInfo user={user} /> : <Loading />;
};

export default UserPage;
