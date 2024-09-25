import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "@/components/Layout";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";
import * as gtag from "@/libs/gtag";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    const handleRouterChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeStart", handleRouterChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouterChange);
    };
  }, []);

  return (
    <div>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtag.gaId}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.gaId}');
          `,
        }}
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GoogleTagManager gtmId="G-FGZ6FF3PZG" />
    </div>
  );
}
