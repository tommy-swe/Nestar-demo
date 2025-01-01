/* MetaDatas Integrations file */
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  console.log("DOCUMENT=> PAGES Routing");
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="title" content="Nestar Demo" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" type="image/png" href="/img/logo/favicon.svg" />

        <meta
          name="keyword"
          content={
            "nestar, nestar.uz, devex, mern, mern nestjs fullstack, nextjs project"
          }
        />
        <meta
          name="description"
          content={
            "Buy and Sell properties anywhere anytime in South Korea. | " +
            "Покупайте и продавайте недвижимость в любом месте и в любое время в Южной Корее." +
            "대한민국에서 언제나, 어디서나 부동산을 사고팔 수 있습니다."
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
