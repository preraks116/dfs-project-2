import { useEffect, useState } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import "@uiw/react-textarea-code-editor/dist.css";
import "react-medium-image-zoom/dist/styles.css";
import Footer from "../src/components/Footer";
import "../src/styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false);
  const env = process.env.NODE_ENV;

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted && env === "development") return null;
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1"
        />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="google" content="notranslate" />
      </Head>

      <ThemeProvider enableSystem={true} attribute="class">
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
