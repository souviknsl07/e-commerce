import { getSession } from "next-auth/client";
import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100">
      <Head>
        <title>E-commerce</title>

        <link rel="manifest" href="/manifest.json" />
        <link href="/images.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/images.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/images.png"></link>
      </Head>
      <Header />

      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: {
      products,
      session,
    },
  };
}
