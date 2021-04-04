import Head from "next/head";
import React from "react";
import Arrow from "../components/arrows/Arrows";
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
        <Arrow backgroundColor={"var(--font-color)"} link={"/card"} />
      </main>
    </>
  );
}
export default Kookie;
