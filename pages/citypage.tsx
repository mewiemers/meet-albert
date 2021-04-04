import Head from "next/head";
import React from "react";
import Citypage from "../components/citypage/Citypage";

function City() {
  return (
    <>
      <Head>
        <title>Meet Albert</title>
        <link rel="icon" href="/albert-hey.ico" />
      </Head>

      <main>
        <Citypage link={"/kookiepage"} />
      </main>
    </>
  );
}

export default City;
