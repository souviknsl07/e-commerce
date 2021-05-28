import Head from "next/head";
import { getProviders, signIn } from "next-auth/client";
import Image from "next/image";

const Signin = ({ providers }) => {
  return (
    <div className="grid bg-gray-100 dark:bg-amazon_blue w-screen dark:text-white place-items-center h-screen">
      <Head>
        <title>Sign In</title>
        <link rel="icon" href="/images.png" />
      </Head>
      <div className="flex flex-col items-center">
        <Image
          src="https://www.designfreelogoonline.com/wp-content/uploads/2016/07/000749-online-store-logos-design-free-online-E-commerce-cart-logo-maker-02.png"
          width={150}
          height={200}
          objectFit="contain"
          className="cursor-pointer"
        />
        {Object.values(providers).map((provider) => (
          <button
            className="p-3 font-medium border-none focus:outline-none bg-gray-200 hover:bg-gray-300 dark:hover:bg-gray-700 rounded-md text-sm items-center flex dark:bg-amazon_blue-light "
            key={provider.name}
            onClick={() => signIn(provider.id)}
            variant="outlined"
          >
            SIGN IN WITH {provider.name.toUpperCase()}
            <img
              className="ml-2 rounded-full"
              src="https://banner2.cleanpng.com/20180416/ppe/kisspng-g-suite-pearl-river-middle-school-google-docs-soft-google-plus-5ad4f155b36555.6827254815239048537348.jpg"
              alt="google"
              height={20}
              width={20}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Signin;

export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
