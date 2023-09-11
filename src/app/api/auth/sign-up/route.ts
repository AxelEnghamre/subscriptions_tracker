const dynamic = "force-dynamic";

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

import { signUpSchema } from "@/lib/schemas/AuthSchemas";

const POST = async (request: Request) => {
  const supabase = createRouteHandlerClient({ cookies });
  const data = await request.json();
  const requestUrl = new URL(request.url);

  const validatedData = signUpSchema.safeParse(data);

  if (validatedData.success) {
    const email = validatedData.data.email;
    const name = validatedData.data.name;
    const password = validatedData.data.password;

    /* TODO: Implement name in the sign up */
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${requestUrl.origin}/auth/callback`,
        data: {
          name,
        },
      },
    });

    return NextResponse.redirect(requestUrl.origin, {
      status: 301,
    });
  }

  return new Response(JSON.stringify({ message: "Ogiltig data" }), {
    status: 417,
  });
};

export { POST, dynamic };
