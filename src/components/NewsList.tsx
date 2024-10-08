import { useEffect, useState } from "react";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import dayjs from "@/libs/day";
import { News } from "@/type";
import { NewsListProps } from "@/type";
import useSWR from "swr";
import fetcher from "@/libs/fetcher";

function NewsList(props: NewsListProps) {
  const { limit } = props;
  const res = useSWR("/api/news/list", fetcher);
  const newsList: News[] = res.data?.contents;

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
                <div className="flex">
                  <Link href={`/news/${content.id}`}>
                    <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] xl:w-[300px] xl:h-[300px]">
                      <Image
                        src={
                          content?.head_image?.url
                            ? content.head_image.url
                            : "/NoImage.png"
                        }
                        fill
                        style={{ objectFit: "cover" }}
                        alt="news_head_image"
                        className="hover:opacity-80"
                      ></Image>
                    </div>
                  </Link>
                </div>
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
