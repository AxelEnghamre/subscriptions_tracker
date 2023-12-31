const dynamic = "force-dynamic";
import { NextResponse } from "next/server";

import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.NEXT_SENDGRID_API_KEY as string);

const GET = async () => {
  try {
    // TODO get all the mails from supabase
    const emails = ["test@test.se"];
    const mail = {
      to: emails,
      from: process.env.NEXT_SENDGRID_SENDER_EMAIL as string,
      subject: "Påminelse",
      text: `
            Glöm inte dina fakturor!
          `,
    };

    try {
      await sgMail.send(mail);
    } catch (error) {
      // Error with sendgrid
      return new Response(JSON.stringify(error), { status: 500 });
    }
  } catch (error) {
    // Error with user data
    return new Response(JSON.stringify(error), { status: 417 });
  }

  return NextResponse.json({ ok: true });
};

export { GET, dynamic };
