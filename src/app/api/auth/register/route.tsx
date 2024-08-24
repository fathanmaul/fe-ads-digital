import { register } from "@/lib/service";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const req = await request.json();
  const result = await register(req);
  return NextResponse.json(
    {
      status: result.status,
      body: {
        message: result.message,
      },
    },
    {
      status: result.statusCode,
    }
  );
}
