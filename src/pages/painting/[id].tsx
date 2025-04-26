import React, { useEffect, useState } from "react";
import Image from "next/image";
import { NextRouter, useRouter } from "next/router";
import { PaintingType } from "@/type";

function Painting() {
  const [painting, setPainting] = useState<PaintingType>();
  const router: NextRouter = useRouter();
  const paintingId: string = router.query.id as string;

  useEffect(() => {
    const func = async () => {
      const res = await fetch(`/api/painting/${paintingId}`);
      const data: PaintingType = await res.json();
      setPainting(data);
    };
    if (paintingId) func();
  }, [paintingId]);

  if (!painting) return null;

  return (
    <div>
      <div className="mt-6 flex justify-center flex-col items-center">
        <Image
          src={painting.image.url}
          width={400}
          height={400}
          alt="painting"
        ></Image>
      </div>
      <div className="px-5">
        <h1 className="mt-2 text-2xl">{painting.title}</h1>
        <pre className="mt-2">{painting.description}</pre>
      </div>
    </div>
  );
}

export default Painting;
