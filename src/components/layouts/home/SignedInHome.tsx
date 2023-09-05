// "use client";

import { useRouter } from "next/navigation";
import AllServicesTest from "./AllServicesTest";

const SignInHome = () => {
  // const router = useRouter();

  // const signOut = async () => {
  //   fetch("/api/auth/sign-out", {
  //     method: "POST",
  //   });
  //   router.push("/sign-in");
  // };

  return (
    <>
      <h2>Inloggad</h2>
      {/* <button onClick={signOut}>logga ut</button> */}
      <AllServicesTest />
    </>
  );
};

export default SignInHome;
