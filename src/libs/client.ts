import { createClient } from "microcms-js-sdk";

const MICROCMS_SERVICE_DOMAIN = process.env.NEXT_PUBLIC_MICROCMS_SERVICE_DOMAIN;
const MICROCMS_API_KEY = process.env.NEXT_PUBLIC_MICROCMS_API_KEY;

export const client = createClient({
  serviceDomain: MICROCMS_SERVICE_DOMAIN || "",
  apiKey: MICROCMS_API_KEY || "",
});
