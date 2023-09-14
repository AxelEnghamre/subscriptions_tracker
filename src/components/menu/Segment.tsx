"use client";
import { SetStateAction, Dispatch } from "react";
import GoBackButton from "../UI/buttons/GoBackButton";

const Segment = ({
  segment,
  setSegment,
  name,
  children,
}: {
  segment: string;
  setSegment: Dispatch<SetStateAction<string>>;
  name: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`w-full h-full text-logo ${
        segment === name ? "block" : "hidden"
      }`}
    >
      <GoBackButton onClick={() => setSegment("")} />
      {children}
    </div>
  );
};

export default Segment;
