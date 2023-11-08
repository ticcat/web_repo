import WorkEntryInfo from "@/dbClasses/WorkEntry";
import clientPromise from "@/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const client = await clientPromise;
  const db = client.db("WebPortfolio");

  const type = request.nextUrl.searchParams.get("type");

  try {
    let allExp;

    switch (type) {
      case "work":
      case "personal": {
        allExp =  await db.collection("Experience").find({type: type}).toArray();
        break;
      }
      default: {
        allExp =  await db.collection("Experience").find({}).toArray();
        break;
      }
    }
    

    const workEntries = allExp.map((exp) => new WorkEntryInfo(
      exp._id,
      exp.title,
      exp.role,
      {
        start_date: exp.duration.start_date,
        end_date: exp.duration.end_date,
        period: exp.duration.period
      },
      exp.stack,
      exp.url)
    );

    return NextResponse.json(workEntries, {
      status: 200,
    })
  } catch(e) {
    console.error(e);
  }
}