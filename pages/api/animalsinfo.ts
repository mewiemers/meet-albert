import type { NextApiRequest, NextApiResponse } from "next";
import { withDatabase, infoList } from "../../server/db";

export default withDatabase(
  async (req: NextApiRequest, res: NextApiResponse) => {
    const animal = await infoList("infoList");
    res.status(200).json(animal);
  }
);
