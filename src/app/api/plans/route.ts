import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();

  // Todo: logic of data validation and saving to database
  console.log("Received plans form:", body);

  return NextResponse.json({ message: "Success" });
}
