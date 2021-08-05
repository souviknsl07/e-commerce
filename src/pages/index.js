import { getSession } from "next-auth/client";
import Head from "next/head";
import { useState } from "react";

import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductFeed from "../components/ProductFeed";

export default function Home({ products }) {
  const [search, setSearch] = useState("");
  const [value, setValue] = useState("");

  return (
    <div className="bg-gray-100 dark:bg-amazon_blue-light">
      <Head>
        <title>E-commerce</title>
        <link rel="icon" href="/images.png" />
      </Head>
      <Header search={search} setSearch={setSearch} />
      <Categories setValue={setValue} />
      <main className="max-w-screen-2xl mx-auto">
        <Banner />
        <ProductFeed value={value} search={search} products={products} />
      </main>
      <div className="h-[50vh]" />
      <Footer />
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
