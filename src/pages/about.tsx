import Menu from "@/components/Menu";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sobre</title>
        <meta name="description" content="Site...Sobre..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Menu />
        <br></br> <br></br> <br></br> <br></br>
        <br></br>
        <h2>Pagina inicial</h2>
      </main>
    </>
  );
}
