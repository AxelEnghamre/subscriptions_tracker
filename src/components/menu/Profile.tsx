"use client";
import { SetStateAction, Dispatch } from "react";

const Profile = ({
  segment,
  setSegment,
  name,
}: {
  segment: string;
  setSegment: Dispatch<SetStateAction<string>>;
  name: string;
}) => {
  return (
    <div
      className={`absolute inset-0 w-full h-full bg-red-400 ${
        segment === name ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button onClick={() => setSegment("")}>close</button>
    </div>
  );
};

export default Profile;
