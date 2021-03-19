import Head from "next/head";
import Logo from "../components/welcome/Welcome";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Meet Albert</title>
        <link rel="icon" href="/" />
      </Head>

      <main>
        <Logo></Logo>
        <div></div>
      </main>

      <footer></footer>
    </div>
  );
}
