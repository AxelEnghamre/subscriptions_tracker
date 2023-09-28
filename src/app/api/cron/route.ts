const dynamic = "force-dynamic";
import { NextResponse } from 'next/server';

const GET = async () => {
  return NextResponse.json({ ok: true });
}

export {GET,dynamic}