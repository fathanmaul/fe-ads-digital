import { NextResponse } from "next/server";

export async function GET(){
  return NextResponse.json({
    status: 200,
    body: {
      message: "Welcome to the API route!"
    }
  })
}