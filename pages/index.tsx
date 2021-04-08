import Logo from "../components/welcome/Welcome";
import Link from "next/link";

export default function Home() {
  return (
    <>
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
