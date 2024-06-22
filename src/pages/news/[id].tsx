import React, { useState, useEffect } from "react";
import { client } from "@/libs/client";
import { NextRouter, useRouter } from "next/router";
import Image from "next/image";

type News = {
  title: string;
  body: string;
  head_image: {
    url: string;
  };
};

function NewsDetail() {
  const [news, setNews] = useState<News>();
  const router: NextRouter = useRouter();
  const newsId: string | undefined =
    typeof router.query.id !== "string" ? undefined : router.query.id;

  useEffect(() => {
    const func = async () => {
      const res = await client.get({
        endpoint: "news_list",
        contentId: newsId,
        queries: { draftKey: "", fields: "", depth: 1 },
      });
      setNews(res);
    };
    if (newsId) func();
  }, [newsId]);

  if (!news) return null;

  return (
    <div>
      <Image
        src={news.head_image.url}
        width={400}
        height={400}
        alt={"news"}
      ></Image>
      <h1>{news.title}</h1>
      <p>{news.body}</p>
    </div>
  );
}

export default NewsDetail;
