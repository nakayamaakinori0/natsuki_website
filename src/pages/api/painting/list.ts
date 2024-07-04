import { PaintingList } from "@/type";
import type { NextApiRequest, NextApiResponse } from "next";
import MicrocmsAPI from "@/libs/microcmsAPI";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const microcmsAPI = new MicrocmsAPI();
    const paintingList: PaintingList = await microcmsAPI.getPaintingList();
    res.status(200).json(paintingList);
  } catch (error) {
    console.error(`Error in ${req.url}:`, error);
    res.status(500).json({ message: "Internal server error" });
  }
}
