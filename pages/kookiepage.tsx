import Head from "next/head";
import React from "react";
import KookiePage from "../components/kookiepage/KookiePage";

function Kookie() {
  return (
    <>
      <Head>
        <title>Meet Albert</title>
        <link rel="icon" href="/albert-hey.ico" />
      </Head>

      <main>
        <KookiePage link={"/detail"} />
      </main>
    </>
  );
}
export default Kookie;
