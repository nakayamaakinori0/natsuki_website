import Head from "next/head";
import { MetaType } from "@/type";
import { useRouter } from "next/router";

export default function SEOHead({
  title,
  titleTemplate,
  description,
  ogType,
  imgUrl,
}: MetaType) {
  const router = useRouter();
  const siteUrl = `${process.env.NEXT_PUBLIC_SITE_URL}`;
  const url = `${siteUrl}${router.asPath}`;
  const siteTitle = `${title} | ${titleTemplate}`;
  return (
    <Head>
      <meta name="viewport" content={"width=device-width, initial-scale=1"} />
      <title>{siteTitle}</title>
      <link href={url} rel="canonical" />
      <meta name="twitter:card" content={"summary_large_image"} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:url" content={url} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <link rel="icon" type="image/svg+xml" href={"/samplelogo.svg"} />
    </Head>
  );
}
