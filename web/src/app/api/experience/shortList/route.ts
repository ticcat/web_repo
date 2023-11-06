import WorkEntryInfo from "@/dbClasses/WorkEntry";
import clientPromise from "@/utils/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("WebPortfolio");

  try {
    const allExp = await db.collection("Experience").find({}).toArray();

    const workEntries = allExp.map((exp) => new WorkEntryInfo(
      exp._id,
      exp.title,
      exp.role,
      {
        start_date: exp.duration.start_date,
        end_date: exp.duration.end_date,
        period: exp.duration.perdiod
      },
      exp.stack)
    );

    return NextResponse.json(workEntries, {
      status: 200,
    })
  } catch(e) {
    console.error(e);
  }
}