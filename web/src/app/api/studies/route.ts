import StudyEntry from "@/dbClasses/StudyEntry";
import clientPromise from "@/utils/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("WebPortfolio");

  try {
    const allStudies = await db.collection("Studies").find({}).toArray();

    const studyEntries = allStudies.map((study) => 
      new StudyEntry(study._id,
        study.title,
        study.subtitle,
        study.duration,
        study.text)
    );

    return Response.json(studyEntries, {status: 200});
  } catch(e) {
    return Response.json(e, {status: 404});
  }
}