import { SignIn } from "@/components/auth";
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Logga in",
};

const SignInPage = async () => {
  return <SignIn />;
};

export default SignInPage;

export { metadata };
