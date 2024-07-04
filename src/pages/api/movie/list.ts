import { NextApiRequest, NextApiResponse } from "next";
import { PlaylistItems } from "@/type";
import YoutubeAPI from "@/libs/YoutubeAPI";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const youtubeAPI = new YoutubeAPI();
    const movieList: PlaylistItems = await youtubeAPI.getPlaylistItems();
    res.status(200).json(movieList);
  } catch (error) {
    console.error(`Error in ${req.url}:`, error);
    res.status(500).json({ message: "Internal server error" });
  }
}
