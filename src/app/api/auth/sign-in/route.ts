import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { signInSchema } from "@/lib/schemas/AuthSchemas";

import type { Database } from "@/lib/supabase";

const dynamic = "force-dynamic";

const POST = async (request: Request) => {
  const supabase = createRouteHandlerClient<Database>({ cookies });
  const data = await request.json();

  const validatedData = signInSchema.safeParse(data);

  if (validatedData.success) {
    const email = validatedData.data.email;
    const password = validatedData.data.password;

    const auth = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (auth.error) {
      return new Response(JSON.stringify({ message: "Invalid user" }), {
        status: 401,
      });
    }

    if (auth.data) {
      return new Response(JSON.stringify({ message: "Success logged in" }), {
        status: 200,
      });
    }
  }

  return new Response(JSON.stringify({ message: "Invalid user data" }), {
    status: 417,
  });
};

export { POST, dynamic };
