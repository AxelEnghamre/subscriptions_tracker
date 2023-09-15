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

    const signUp = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          name,
        },
      },
    });

    if (signUp.error) {
      return new Response(JSON.stringify({ message: "Server fel" }), {
        status: 500,
      });
    }

    return new Response(JSON.stringify({ message: "Använadre skapad" }), {
      status: 200,
    });
  }

  return new Response(JSON.stringify({ message: "Ogiltig data" }), {
    status: 417,
  });
};

export { POST, dynamic };
