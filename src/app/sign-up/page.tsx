import { SignUp } from "@/components/auth";
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Registra dig",
};

const SignInPage = async () => {
  return <SignUp />;
};

export default SignInPage;

export { metadata };
