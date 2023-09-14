import { SignUp } from "@/components/auth";
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Registra dig",
};

const SignUpPage = async () => {
  return <SignUp />;
};

export default SignUpPage;

export { metadata };
