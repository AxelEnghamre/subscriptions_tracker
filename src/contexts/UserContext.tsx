"use client";

import { createContext, useState } from "react";

type Profile = {
  icon_url?: string;
  id?: string;
  name?: string;
};

type UserContext = {
  profile: Profile;
  setProfile: Function;
};

const UserContext = createContext<UserContext | null>(null);

const UserContextProvider = ({
  children,
  profile,
}: {
  children: React.ReactNode;
  profile: Profile;
}) => {
  const [profileState, setProfileState] = useState<Profile>(profile);

  return (
    <UserContext.Provider
      value={{
        profile: profileState,
        setProfile: setProfileState,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export { UserContext, UserContextProvider};

export type {Profile};
