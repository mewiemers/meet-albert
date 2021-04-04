import { MongoClient } from "mongodb";
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

let client = null;
let db = null;

const url = process.env.MONGODB_URL;

type Handler = (req: NextApiRequest, res: NextApiResponse) => void;
export const withDatabase = (handler: Handler) => async (
  req: NextApiRequest,
  res: NextApiResponse
) => {
  await connectDB(url, "animalsinfo");
  return await handler(req, res);
};

export async function connectDB(url, dbName) {
  if (db) {
    return;
  }
  client = await MongoClient.connect(url, { useUnifiedTopology: true });
  db = client.db(dbName);
}

export async function getCollection(collectionName) {
  return await db.collection(collectionName);
}

export async function infoList(collectionName) {
  return await db.collection(collectionName).find().toArray();
}

export async function quizanswers(collectionName) {
  return await db.collection(collectionName).find().toArray();
}

export function closeDB() {
  client.close();
}
