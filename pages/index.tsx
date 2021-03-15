import Head from "next/head";
import styles from "../styles/Home.module.css";
import Card from "../components/card/Card";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <Card primary label="Primary" />
        </div>
      </main>

      <footer className={styles.footer}>Powered by Melanie</footer>
    </div>
  );
}
