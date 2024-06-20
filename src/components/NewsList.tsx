import { useEffect, useState } from "react";
import React from "react";
import { client } from "@/libs/client";
import Link from "next/link";
import Image from "next/image";
import dayjs from "@/libs/day";

function NewsList() {
  const [newsList, setNewsList] = useState<any[]>([]);
  useEffect(() => {
    const func = async () => {
      const res = await client.get({ endpoint: "news_list" });
      setNewsList(res?.contents);
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
              {content?.start_date &&
                content?.end_date &&
                dayjs(content.start_date).isSame(dayjs(content.end_date)) && (
                  <div className="test-xs">
                    {dayjs(content.start_date).format("YYYY/MM/DD")}
                  </div>
                )}
              {content?.start_date &&
                content?.end_date &&
                !dayjs(content.start_date).isSame(dayjs(content.end_date)) && (
                  <div className="text-xs">
                    {dayjs(content.start_date).format("YYYY/MM/DD")}-
                    {dayjs(content.end_date).format("YYYY/MM/DD")}
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
              {content?.body && (
                <Link href={`/news/${content.id}`}>
                  <div className="mt-2">
                    {content?.body.length > 70
                      ? `${content.body.substring(0, 70)}.....`
                      : content.body}
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
