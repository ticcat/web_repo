import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const globalWithMongo = global as typeof globalThis & {
  _mongoClientPromise: Promise<MongoClient>
}

let client;
let clientPromise: Promise<MongoClient>;

if (!uri) {
  throw new Error("Mongodb uri not found");
}

if(process.env.NODE_ENV === "development") {
  if(!globalWithMongo._mongoClientPromise) {
    client = new MongoClient(uri);
    globalWithMongo._mongoClientPromise = client.connect();
  }
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  client = new MongoClient(uri);
  clientPromise = client.connect();
}

export default clientPromise;