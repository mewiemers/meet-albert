import Head from "next/head";
import React from "react";
import BeforeQuiz from "../components/beforequiz/BeforeQuiz";

function Kookie() {
  return (
    <>
      <Head>
        <title>Meet Albert</title>
        <link rel="icon" href="/albert-hey.ico" />
      </Head>

      <main>
        <BeforeQuiz link={"/question"} />
      </main>
    </>
  );
}
export default Kookie;
