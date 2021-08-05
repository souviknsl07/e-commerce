import { useSession } from "next-auth/client";
import Head from "next/head";
import Image from "next/image";
import { useSelector } from "react-redux";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import Currency from "react-currency-formatter";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";

import {
  selectItems,
  selectTotal,
  selectTotalItems,
} from "../slices/basketSlice";
import Header from "../components/Header";
import CheckoutProduct from "../components/CheckoutProduct";
import Footer from "../components/Footer";

const stripePromise = loadStripe(process.env.stripe_public_key);

const Checkout = () => {
  const items = useSelector(selectItems);
  const total = useSelector(selectTotal);
  const totalItems = useSelector(selectTotalItems);
  const [session] = useSession();

  const createCheckoutSession = async () => {
    const stripe = await stripePromise;

    const checkoutSession = await axios.post("/api/create-checkout-session", {
      items: items,
      email: session.user.email,
    });

    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });

    if (result.error) alert(result.error.message);
  };

  return (
    <div className="bg-gray-100 dark:bg-amazon_blue-light">
      <Head>
        <title>Checkout</title>
        <link rel="icon" href="/images.png" />
      </Head>
      <Header />
      <main className="lg:flex max-w-screen-2xl mx-auto dark:bg-amazon_blue-light">
        <div className="flex-grow m-5 shadow-sm ">
          <Image
            src="https://s3.envato.com/files/173909488/banner_720x300.jpg"
            width={1024}
            height={250}
            objectFit="contain"
          />
          <div className="flex flex-col p-5 space-y-10 bg-white dark:bg-amazon_blue dark:text-white">
            <div className="flex space-x-5">
              <ShoppingCartIcon className="h-[50px]" />
              <h1 className="sm:text-3xl sm:font-normal font-medium text-lg border-b pb-4 w-full">
                {items.length === 0
                  ? "Your Cart is Empty"
                  : `You have ${items.length} ${
                      items.length === 1 ? "item" : "items"
                    } in your Cart`}
              </h1>
            </div>

            {items.length > 0 &&
              items.map((item) => {
                return (
                  <CheckoutProduct
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    rating={item.rating}
                    price={item.price}
                    quantity={item.quantity}
                    description={item.description}
                    category={item.category}
                    image={item.image}
                  />
                );
              })}
          </div>
        </div>

        {items.length > 0 && (
          <div className="flex flex-col bg-white p-10 mt-10 lg:m-0 shadow-md dark:bg-amazon_blue dark:text-white">
            <>
              <h2 className="whitespace-nowrap">
                Subtotal ({totalItems} items):{" "}
                <span className="font-bold">
                  <Currency
                    quantity={Math.round(total * 72.91)}
                    currency="INR"
                    group=","
                  />
                </span>
              </h2>

              <button
                role="link"
                disabled={!session}
                onClick={createCheckoutSession}
                className={`button mt-2 dark:text-black ${
                  !session &&
                  "from-gray-300 to-gray-500 border-gray-200 dark:border-amazon_blue text-gray-300 cursor-not-allowed"
                }`}
              >
                {!session ? "Sign in to Checkout" : "Proceed to Checkout"}
              </button>
            </>
          </div>
        )}
      </main>
      <div className="h-[50vh]" />
      <Footer />
    </div>
  );
};

export default Checkout;
