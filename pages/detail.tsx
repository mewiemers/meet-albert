import Head from "next/head";
import React from "react";
import KookieDetail from "../components/kookiedetail/KookieDetail";

function Kookie() {
  return (
    <>
      <Head>
        <title>Meet Albert</title>
        <link rel="icon" href="/albert-hey.ico" />
      </Head>

      <main>
        <KookieDetail />
      </main>
    </>
  );
}
export default Kookie;
