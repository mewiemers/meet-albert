import type { AppProps } from "next/app";
import Head from "next/head";
import React from "react";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />

      <Head>
        <title>Meet Albert</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
        />
      </Head>
    </>
  );
}

export default MyApp;
