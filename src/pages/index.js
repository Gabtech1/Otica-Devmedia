import Head from "next/head";
import styles from "@/styles/Home.module.css";
import Topo from '@/components/Topo'
import SecaoCapa from '@/components/SecaoCapa';
import SecaoProdutos from '@/components/SecaoProdutos';
import SecaoSobre from "@/components/SecaoSobre";
import Contato from "@/components/SecaoContato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Óticas vida - Loja de óculos</title>
        <meta name="description" content="Projeto desenvolvido em React através do curso da devmedia" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topo/>
      <SecaoCapa/>
      <SecaoProdutos/>
      <SecaoSobre/>
      <Contato />
      <Footer />
    </>
  );
}
