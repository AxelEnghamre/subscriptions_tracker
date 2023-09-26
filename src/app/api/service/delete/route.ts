const dynamic = "force-dynamic";

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { serviceInputDeleteSchema } from "@/lib/schemas/ServiceSchemas";

import type { Database } from "@/lib/supabase";

const POST = async (request: Request) => {
  const supabase = createRouteHandlerClient<Database>({ cookies });
  const data = await request.json();

  const session = (await supabase.auth.getSession()).data.session;

  if (!session) {
    return new Response(
      JSON.stringify({
        message: "Du har inte behörighet till att skapa en tjänst",
      }),
      {
        status: 417,
      },
    );
  }

  const serviceValidation = serviceInputDeleteSchema.safeParse(data);

  if (!serviceValidation.success) {
    return new Response(JSON.stringify({ message: "Ogiltig data" }), {
      status: 417,
    });
  }

  const serviceData = serviceValidation.data;

  const { error: ServiceDeleteError } = await supabase
    .from("services")
    .delete()
    .eq("id", serviceData.id)
    .select();

  if (ServiceDeleteError) {
    return new Response(JSON.stringify({ message: "Server fel" }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ message: "Tjänst borttagen" }), {
    status: 200,
  });
};

export { POST, dynamic };
