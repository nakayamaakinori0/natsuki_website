import React, { useEffect, useState } from "react";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { client } from "@/libs/client";

type Painting = {
  title: string;
  description: string;
  image: {
    url: string;
    height: number;
    width: number;
  };
};

function Painting() {
  const [painting, setPainting] = useState<Painting>();
  const router: NextRouter = useRouter();
  const paintingId: string | undefined =
    typeof router.query.id !== "string" ? undefined : router.query.id;

  useEffect(() => {
    const func = async () => {
      const res = await client.get({
        endpoint: "painting_list",
        contentId: paintingId,
        queries: { draftKey: "", fields: "", depth: 1 },
      });
      setPainting(res);
    };
    if (paintingId) func();
  }, []);

  if (!painting) return null;

  return (
    <div>
      <div>
        <Image
          src={painting.image.url}
          width={400}
          height={400}
          alt="painting"
        ></Image>{" "}
        <h1>{painting.title}</h1>
        <p>{painting.description}</p>
      </div>
    </div>
  );
}

export default Painting;
