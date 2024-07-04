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
      <div>
        <Image
          src={painting.image.url}
          width={400}
          height={400}
          alt="painting"
        ></Image>
        <h1>{painting.title}</h1>
        <pre>{painting.description}</pre>
      </div>
    </div>
  );
}

export default Painting;
