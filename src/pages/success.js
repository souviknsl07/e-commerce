import { CheckCircleIcon } from "@heroicons/react/solid";
import Head from "next/head";
import { useRouter } from "next/router";

import Header from "../components/Header";

const Success = () => {
  const router = useRouter();

  return (
    <div className="bg-gray-100 h-screen">
      <Head>
        <title>Order Confirmed</title>
        <link rel="icon" href="/images.png" />
      </Head>
      <Header />

      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5">
            <CheckCircleIcon className="text-green-500 h-10" />
            <h1 className="text-3xl">
              Thank You, Your Order has been confirmed
            </h1>
          </div>
          <p>
            Thank You for shopping with us, to check the status of your order(s)
            please press the button below.
          </p>
          <button
            onClick={() => router.push("/orders")}
            className="button mt-8"
          >
            Go to my orders
          </button>
        </div>
      </main>
    </div>
  );
};

export default Success;
