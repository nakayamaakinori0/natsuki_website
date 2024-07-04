import { GetRequestOptions, PlaylistItems, Video } from "@/type";

export default class YoutubeAPI {
  baseUrl: string | undefined;
  apiKey: string | undefined;
  playlistId: string | undefined;
  constructor() {
    this.baseUrl = process.env.YOUTUBE_URL;
    this.apiKey = process.env.YOUTUBE_API_KEY;
    this.playlistId = process.env.PLAYLIST_ID;
    if (!this.baseUrl || !this.apiKey || !this.playlistId) {
      throw new Error("Youtube environment variables are not set.");
    }
  }
  async getPlaylistItems(): Promise<PlaylistItems> {
    try {
      const requestOptions: GetRequestOptions = {
        method: "GET",
        redirect: "follow",
      };
      const res = await fetch(
        `${this.baseUrl}/playlistItems?part=contentDetails,id,snippet,status&playlistId=${this.playlistId}&key=${this.apiKey}&maxResults=10`,
        requestOptions
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log("Error in getPlaylistItems", error);
      throw error;
    }
  }
  async getVideoById(id: string): Promise<Video> {
    try {
      const requestOptions: GetRequestOptions = {
        method: "GET",
        redirect: "follow",
      };
      const res = await fetch(
        `${this.baseUrl}/videos?part=snippet,contentDetails&key=${this.apiKey}&id=${id}`,
        requestOptions
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log("Error in getVideoById", error);
      throw error;
    }
  }
}
