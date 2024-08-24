import React, { useState, useEffect } from "react";
import { NextRouter, useRouter } from "next/router";
import { News } from "@/type";
import Image from "next/image";
import dayjs from "@/libs/day";

function NewsDetail() {
  const [news, setNews] = useState<News>();
  const router: NextRouter = useRouter();
  const newsId: string = router.query.id as string;

  useEffect(() => {
    const func = async () => {
      const res = await fetch(`/api/news/${newsId}`);
      const data: News = await res.json();
      setNews(data);
    };
    if (newsId) func();
  }, [newsId]);

  if (!news) return null;

  return (
    <div>
      {news.head_image && (
        <div className="mt-6 flex justify-center">
          <Image
            src={news.head_image.url}
            width={700}
            height={700}
            alt={"news"}
          ></Image>
        </div>
      )}
      <h1 className="text-4xl mt-6 border-b-2 pl-5">{news.title}</h1>
      {news?.createdAt && (
        <div className="test-xs pl-5 text-accent">
          {dayjs(news.createdAt).format("YYYY/MM/DD")}
        </div>
      )}
      <article
        className="prose prose-invert mt-6 pl-10"
        dangerouslySetInnerHTML={{ __html: news.body }}
      ></article>
    </div>
  );
}

export default NewsDetail;
