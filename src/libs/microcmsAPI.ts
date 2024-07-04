import { createClient } from "microcms-js-sdk";
import {
  PaintingType,
  PaintingList,
  News,
  NewsListType,
  ProfileType,
} from "@/type";

export default class MicrocmsAPI {
  serviceDomain: string | undefined;
  apiKey: string | undefined;
  client: ReturnType<typeof createClient>;

  constructor() {
    this.serviceDomain = process.env.MICROCMS_SERVICE_DOMAIN;
    this.apiKey = process.env.MICROCMS_API_KEY;
    if (!this.serviceDomain || !this.apiKey) {
      throw new Error("microcms environment variables are not set.");
    }
    this.client = createClient({
      serviceDomain: this.serviceDomain,
      apiKey: this.apiKey,
    });
  }
  async getPaintingList(): Promise<PaintingList> {
    try {
      const res = await this.client.get({
        endpoint: "painting_list",
        queries: { draftKey: "", fields: "", depth: 1 },
      });
      return res;
    } catch (error) {
      console.error("Error in getPaintingList", error);
      throw error;
    }
  }
  async getPaintingById(id: string): Promise<PaintingType> {
    try {
      const res = await this.client.get({
        endpoint: "painting_list",
        contentId: id,
        queries: { draftKey: "", fields: "", depth: 1 },
      });
      return res;
    } catch (error) {
      console.error("Error in getPaintingById", error);
      throw error;
    }
  }

  async getNewsList(): Promise<NewsListType> {
    try {
      const res = await this.client.get({
        endpoint: "news_list",
        queries: { draftKey: "", fields: "", depth: 1 },
      });
      return res;
    } catch (error) {
      console.error("Error in getNewsList", error);
      throw error;
    }
  }
  async getNewsById(id: string): Promise<News> {
    try {
      const res = await this.client.get({
        endpoint: "news_list",
        contentId: id,
        queries: { draftKey: "", fields: "", depth: 1 },
      });
      return res;
    } catch (error) {
      console.error("Error in getNewsById", error);
      throw error;
    }
  }
  async getProfile(): Promise<ProfileType> {
    try {
      const res = await this.client.get({
        endpoint: "profile",
        queries: { draftKey: "", fields: "", depth: 1 },
      });
      return res;
    } catch (error) {
      console.error("Error in getProfile", error);
      throw error;
    }
  }
}
