"use client";

import GoBackButton from "@/components/UI/buttons/GoBackButton";
import { useRouter } from "next/navigation";

const GoHomeButton = () => {
  const router = useRouter();

  return <GoBackButton onClick={() => router.push("/")} />;
};

export default GoHomeButton;
