"use client";

import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";

const Profile = () => {
  const { profile } = useContext(UserContext) as UserContext;

  return (
    <ul className="h-full text-logo flex flex-col gap-5">
      <li className="h-10 border-b-2 border-logo">{profile.name}</li>
      <li className="h-10 border-b-2 border-logo">Hantera hushåll</li>
      <li className="h-10 border-b-2 border-logo">
        Total premunationskostnad / månad
      </li>
      <li className="h-10 border-b-2 border-logo">
        Total premunationskostnad / år
      </li>
    </ul>
  );
};

export default Profile;
