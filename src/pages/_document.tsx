import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* google search console のための設定, tagmanagerとは別 */}
        <meta
          name="google-site-verification"
          content="7MBD52o3PmOpOECathX4Hsm9lc-_in1ftoytLiBs130"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
