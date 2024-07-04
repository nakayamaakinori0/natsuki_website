import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "@/libs/day";
import { NewsListType } from "@/type";

function NewsList() {
  const [newsList, setNewsList] = useState<any[]>([]);

  useEffect(() => {
    const func = async () => {
      const res = await fetch("/api/news/list");
      const data: NewsListType = await res.json();
      setNewsList(data?.contents);
    };
    func();
  }, []);

  if (!newsList) return null;
  return (
    <div>
      <Link href={"news/"}>
        <h1 className="text-4xl mt-6 border-b-2">News</h1>
      </Link>
      <ul>
        {newsList.map((content) => {
          return (
            <li key={content.id} className="border-b mt-4 pb-4">
              <Link href={`/news/${content.id}`}>
                <h2 className="text-xl">{content.title}</h2>
              </Link>
              {content?.createdAt && (
                <div className="test-xs">
                  {dayjs(content.createdAt).format("YYYY/MM/DD")}
                </div>
              )}

              {content?.head_image?.url && (
                <Link href={`/news/${content.id}`}>
                  <Image
                    src={content.head_image.url}
                    width={400}
                    height={400}
                    alt="news_head_image"
                    className="mt-2"
                  ></Image>
                </Link>
              )}
              {content?.caption && (
                <Link href={`/news/${content.id}`}>
                  <div className="mt-2">
                    {content?.caption.length > 70
                      ? `${content.caption.substring(0, 70)}.....`
                      : content.caption}
                  </div>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default NewsList;
