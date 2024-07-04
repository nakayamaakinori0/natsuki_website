import { Video } from "@/type";
import type { NextApiRequest, NextApiResponse } from "next";
import YoutubeAPI from "@/libs/YoutubeAPI";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const id: string = req.query.id as string;
    const youtubeAPI = new YoutubeAPI();
    const movie: Video = await youtubeAPI.getVideoById(id);
    res.status(200).json(movie);
  } catch (error) {
    console.error(`Error in ${req.url}:`, error);
    res.status(500).json({ message: "Internal server error" });
  }
}
