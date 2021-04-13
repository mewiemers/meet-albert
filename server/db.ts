import { Collection, Db, MongoClient } from "mongodb";
import type { NextApiRequest, NextApiResponse } from "next";

export type Animal = {
  name: string;
  id: string;
  ImgSrc: string;
  description: string;
  audioFile: string;
};
export type Question = {
  _id: string;
  question: string;
  answerOptions: AnswerOption[];
  quizid: string;
};

export type AnswerOption = {
  answerText: string;
  isCorrect: boolean;
};

let client: MongoClient = null;
let db: Db = null;

const url = process.env.MONGODB_URL;

type Handler = (req: NextApiRequest, res: NextApiResponse) => void;
export const withDatabase = (handler: Handler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await connectDB(url, "animalsinfo");
  return handler(req, res);
};

export async function connectDB(url: string, dbName: string) {
  if (db) {
    return;
  }
  client = await MongoClient.connect(url, { useUnifiedTopology: true });
  db = client.db(dbName);
}

export function getCollection<T>(collectionName: string): Collection<T> {
  return db.collection(collectionName);
}

export async function infoList(collectionName: string) {
  return await db.collection(collectionName).find().toArray();
}

export async function quizanswers(collectionName: string) {
  return await db.collection(collectionName).find().toArray();
}

export function closeDB() {
  client.close();
}
