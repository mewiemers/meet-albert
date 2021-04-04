import Head from "next/head";
import Link from "next/link";
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
        <Link href={`/card/`}>
          <a>
            <KookiePage />
          </a>
        </Link>
      </main>
    </>
  );
}
export default Kookie;
