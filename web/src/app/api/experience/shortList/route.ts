import WorkEntryInfo from "@/dbClasses/WorkEntry";
import clientPromise from "@/utils/mongodb";

export async function GET(request: Request) {
  const client = await clientPromise;
  const db = client.db("WebPortfolio");

  const  {searchParams} = new URL(request.url);
  const type = searchParams.get("type");

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

    return Response.json(workEntries, {
      status: 200,
    })
  } catch(e) {
    Response.json({status: 404});
  }
}