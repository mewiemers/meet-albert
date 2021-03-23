import Head from "next/head";
import Logo from "../components/welcome/Welcome";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meet Albert</title>
        <link rel="icon" href="/" />
      </Head>

      <main>
        <Link href={`/traveling/`}>
          <a>
            <Logo />
          </a>
        </Link>
      </main>
    </>
  );
}
