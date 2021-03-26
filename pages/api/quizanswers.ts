import type { NextApiRequest, NextApiResponse } from "next";
import { withDatabase, quizanswers } from "../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const answer = await quizanswers("quizanswers");
    res.status(200).json(answer);
  }
);
