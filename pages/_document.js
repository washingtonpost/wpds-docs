import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText, reset, Box } from "@washingtonpost/wpds-ui-kit";
import { Favicon } from "@washingtonpost/site-components/core/favicon";
import { ToastContainer } from "react-toastify";

/**
 * Get the css and reset the internal css representation.
 * This is very *IMPORTANT* to do as the server might handle multiple requests
 * and we don't want to have the css accumulated from previous requests
 */
const getCssAndReset = () => {
  const css = getCssText();
  reset();
  return css;
};

export default class Document extends NextDocument {
  static async getInitialProps(ctx) {
    const initialProps = await NextDocument.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" id="wpds">
        <Head>
          <Favicon />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssAndReset() }}
          />
          <link
            rel="preload"
            href="https://www.washingtonpost.com/wp-stat/assets/fonts/PostoniWide-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="https://www.washingtonpost.com/wp-stat/assets/fonts/PostoniWide-Regular.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="https://www.washingtonpost.com/wp-stat/assets/fonts/ITC_Franklin-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <link
            rel="preload"
            href="https://www.washingtonpost.com/wp-stat/assets/fonts/ITC_Franklin-Light.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <style
            dangerouslySetInnerHTML={{
              __html: `@font-face {
								font-family: Postoni;
								font-weight: 700;
								font-display: fallback;
								src: url(https://www.washingtonpost.com/wp-stat/assets/fonts/PostoniWide-Bold.woff2);
								unicode-range: U+a, U+20-29, U+2c-5b, U+5d, U+5f, U+61-7d, U+a0, U+a9, U+c9,
								  U+e0-e3, U+e7, U+e9, U+ea, U+ed, U+f3-f5, U+fa, U+2009, U+2013, U+2014,
								  U+2018, U+2019, U+201c, U+201d, U+2026;
							  }
							  @font-face {
								font-family: Postoni;
								font-weight: 300;
								font-display: fallback;
								src: url(https://www.washingtonpost.com/wp-stat/assets/fonts/PostoniWide-Regular.woff2);
							  }
							  @font-face {
								font-family: Franklin;
								font-weight: 700;
								font-display: fallback;
								unicode-range: U+a, U+20-29, U+2c-5b, U+5d, U+5f, U+61-7d, U+a0, U+a9, U+c9,
								  U+e0-e3, U+e7, U+e9, U+ea, U+ed, U+f3-f5, U+fa, U+2009, U+2013, U+2014,
								  U+2018, U+2019, U+201c, U+201d, U+2026;
								src: url(https://www.washingtonpost.com/wp-stat/assets/fonts/ITC_Franklin-Bold.woff2);
							  }
							  @font-face {
								font-family: Franklin;
								font-weight: 300;
								font-display: fallback;
								src: url(https://www.washingtonpost.com/wp-stat/assets/fonts/ITC_Franklin-Light.woff2);
								unicode-range: U+a, U+20-29, U+2c-5b, U+5d, U+5f, U+61-7d, U+a0, U+a9, U+c9,
								  U+e0-e3, U+e7, U+e9, U+ea, U+ed, U+f1, U+f3-f5, U+fa, U+2009, U+2013,
								  U+2014, U+2018, U+2019, U+201c, U+201d, U+2026;
							  }`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
