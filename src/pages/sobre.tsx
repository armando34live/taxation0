import AboutContent from "@/components/AboutContent";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Head from "next/head";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre Empresa</title>
        <meta name="description" content="Site...Sobre..." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <Menu/>
    <AboutContent/>
    <Footer/>
      </main>
    </>
  );
}
