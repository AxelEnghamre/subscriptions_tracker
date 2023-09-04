"use client";

import { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

const SignIn = () => {
  const supabase = createClientComponentClient();
  const [signInFormValue, setSignInFormValue] = useState<{
    email: string;
    password: string;
  }>();

  return <form action=""></form>;
};

export default SignIn;
