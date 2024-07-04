import { ProfileType } from "@/type";
import type { NextApiRequest, NextApiResponse } from "next";
import MicrocmsAPI from "@/libs/microcmsAPI";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const microcmsAPI = new MicrocmsAPI();
    const profile: ProfileType = await microcmsAPI.getProfile();
    res.status(200).json(profile);
  } catch (error) {
    console.error(`Error in ${req.url}:`, error);
    res.status(500).json({ message: "Internal server error" });
  }
}
