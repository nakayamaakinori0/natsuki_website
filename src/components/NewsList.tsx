import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "@/libs/day";
import { NewsListType } from "@/type";
import { NewsListProps } from "@/type";

function NewsList(props: NewsListProps) {
  const { limit } = props;
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
      <div className="flex border-b-2">
        <Link href={"news/"}>
          <h1 className="pl-5 text-4xl mt-6  hover:text-accent">News</h1>
        </Link>
      </div>
      <ul>
        {newsList.map((content, index) => {
          if (index < limit) {
            return (
              <li key={content.id} className="px-10 border-b mt-4 pb-4">
                {content?.head_image?.url && (
                  <div className="flex">
                    <Link href={`/news/${content.id}`}>
                      <Image
                        src={content.head_image.url}
                        width={400}
                        height={400}
                        alt="news_head_image"
                        className="mt-2 hover:opacity-80"
                      ></Image>
                    </Link>
                  </div>
                )}

                <div className="flex">
                  <Link href={`/news/${content.id}`}>
                    <h2 className="text-xl hover:text-accent">
                      {content.title}
                    </h2>
                  </Link>
                </div>
                {content?.createdAt && (
                  <div className="test-xs text-accent">
                    {dayjs(content.createdAt).format("YYYY/MM/DD")}
                  </div>
                )}

                {content?.caption && (
                  <div className="flex">
                    <div className="mt-2">
                      {content?.caption.length > 70
                        ? `${content.caption.substring(0, 70)}.....`
                        : content.caption}
                    </div>
                  </div>
                )}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default NewsList;
