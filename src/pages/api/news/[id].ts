import { News } from "@/type";
import type { NextApiRequest, NextApiResponse } from "next";
import MicrocmsAPI from "@/libs/microcmsAPI";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const id: string = req.query.id as string;
    const microcmsAPI = new MicrocmsAPI();
    const news: News = await microcmsAPI.getNewsById(id);
    res.status(200).json(news);
  } catch (error) {
    console.error(`Error in ${req.url}:`, error);
    res.status(500).json({ message: "Internal server error" });
  }
}
