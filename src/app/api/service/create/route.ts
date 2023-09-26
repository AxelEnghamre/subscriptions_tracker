const dynamic = "force-dynamic";

import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { serviceInputSchema } from "@/lib/schemas/ServiceSchemas";

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

  const serviceValidation = serviceInputSchema.safeParse(data);

  if (!serviceValidation.success) {
    return new Response(JSON.stringify({ message: "Ogiltig data" }), {
      status: 417,
    });
  }

  const serviceData = serviceValidation.data;

  const { error: ServiceInsertError } = await supabase
    .from("services")
    .insert([
      {
        name: serviceData.name,
        website_url: serviceData.websiteUrl,
        category: serviceData.category,
        owner_id: session.user.id,
      },
    ])
    .select();

  if (ServiceInsertError) {
    return new Response(JSON.stringify({ message: "Server fel" }), {
      status: 500,
    });
  }

  return new Response(JSON.stringify({ message: "Tjänst skapad" }), {
    status: 200,
  });
};

export { POST, dynamic };
