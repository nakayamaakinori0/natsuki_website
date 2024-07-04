import type { NextApiRequest, NextApiResponse } from "next";
import MicrocmsAPI from "@/libs/microcmsAPI";
import { PaintingType } from "@/type";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const id: string = req.query.id as string;
    const microcmsAPI = new MicrocmsAPI();
    const painting: PaintingType = await microcmsAPI.getPaintingById(id);
    res.status(200).json(painting);
  } catch (error) {
    console.error(`Error in ${req.url}:`, error);
    res.status(500).json({ message: "Internal server error" });
  }
}
