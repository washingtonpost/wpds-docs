import { ThemeProvider } from "next-themes";
import React from "react";
import Script from "next/script";
import { DefaultSeo } from "next-seo";
import { globalStyles, darkTheme, Box } from "@washingtonpost/wpds-ui-kit";
import { darkModeStyles } from "~/components/DarkModeStyles";
import { PageLayout } from "~/components/Layout";
import { SSRProvider } from "@react-aria/ssr";
import { useRouter } from "next/router";
import { GoogleTagManager } from "@washingtonpost/site-third-party-scripts";
import SEO from "../next-seo.config";
import "@codesandbox/sandpack-react/dist/index.css";
import { Footer } from "~/components/Footer";

const pageview = (url) => {
  window.dataLayer.push({
    event: "pageview",
    page: url,
  });
};

function App({ Component, pageProps }) {
  globalStyles();
  darkModeStyles();

  const getLayout = Component.getLayout;

  const router = useRouter();
  useEffect(() => {
    router.events.on("routeChangeComplete", pageview);
    return () => {
      router.events.off("routeChangeComplete", pageview);
    };
  }, [router.events]);

  return (
    <SSRProvider>
      <DefaultSeo {...SEO} />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        value={{
          dark: darkTheme.className,
          light: "light",
        }}
        disableTransitionOnChange={false}
        enableColorScheme={false}
      >
        {/** only render on prod */}
        {process.env.NODE_ENV === "production" && (
          <Script id="gtm-script" strategy="afterInteractive">
            {GoogleTagManager}
          </Script>
        )}
        {getLayout ? (
          getLayout(
            <>
              <Component {...pageProps} />
              <Footer />
            </>
          )
        ) : (
          <PageLayout {...pageProps}>
            <Component {...pageProps} />
          </PageLayout>
        )}
      </ThemeProvider>
    </SSRProvider>
  );
}

export default App;
