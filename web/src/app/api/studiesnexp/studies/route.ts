import StudyEntryInfo from "@/dbClasses/StudyEntry";
import clientPromise from "@/utils/mongodbConnection";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("WebPortfolio");

  try {
    const allStudies = await db.collection("Studies").find({}).toArray();

    const studyEntries = allStudies.map((study) => 
      new StudyEntryInfo(study._id,
        study.title,
        study.subtitle,
        study.duration,
        study.bulletPoints)
    );

    return Response.json(studyEntries, {status: 200});
  } catch(e) {
    return Response.json(e, {status: 404});
  }
}