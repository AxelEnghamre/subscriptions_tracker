"use client";

import { useContext } from "react";
import { UserContext } from "@/contexts/UserContext";

const Profile = () => {
  const {profile} = useContext(UserContext) as UserContext;

  return (
    <ul>
      <li>{profile.name}</li>
      <li>Hantera hushåll</li>
      <li>Total premunationskostnad / månad</li>
      <li>Total premunationskostnad / år</li>
    </ul>
  );
};

export default Profile;
