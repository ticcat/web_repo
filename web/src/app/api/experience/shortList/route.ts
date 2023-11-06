import clientPromise from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("WebPortfolio");

  try {
    const allExp = await db.collection("Experience").find({}).toArray();
    //TODO: Create and return short work entry object list    

    return NextResponse.json( allExp, {
      status: 200,
    })
  } catch(e) {
    console.error(e);
  }
}