import React, { useState, useEffect } from "react";
import { NextRouter, useRouter } from "next/router";
import { News } from "@/type";
import Image from "next/image";

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
      <Image
        src={news.head_image.url}
        width={400}
        height={400}
        alt={"news"}
      ></Image>
      <h1 className="text-4xl mt-6 border-b-2">{news.title}</h1>
      <h2>{news.caption}</h2>
      <article
        className="prose prose-invert mt-6"
        dangerouslySetInnerHTML={{ __html: news.body }}
      ></article>
    </div>
  );
}

export default NewsDetail;
