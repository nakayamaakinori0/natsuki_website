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
      <meta charSet="utf-8" />

      <link href={url} rel="canonical" />
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="twitter:card" content={"summary_large_image"} />
      <link rel="icon" type="image/svg+xml" href={"/samplelogo.svg"} />

      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:site_name" content="サイト名" />
      <meta property="og:locale" content="ja_JP" />
    </Head>
  );
}
