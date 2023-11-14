import ShortTextEntry from "@/dbClasses/ShortTextEntry";
import clientPromise from "@/utils/mongodb";

export async function GET() {
  const client = await clientPromise;
  const db = client.db("WebPortfolio");

  try {
    const shortTexts = await db.collection("StudiesNExpShortTexts").find({}).toArray();

    const shortTextsEntries = shortTexts.map((shortText) => 
      new ShortTextEntry(shortText._id, shortText.text)
    );

    return Response.json(shortTextsEntries, {status: 200});
  } catch(e) {
    return Response.json(e, {status: 404});
  }
}