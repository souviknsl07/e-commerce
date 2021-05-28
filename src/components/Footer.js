import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import { useRouter } from "next/router";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const router = useRouter();
  return (
    <footer className="bottom-0 mt-10 items-center flex relative w-full bg-amazon_blue h-60 justify-center flex-col">
      <button
        onClick={scrollToTop}
        className="p-2 sm:p-3 items-center flex justify-center dark:bg-amazon_blue-footer bg-amazon_blue-light text-white text-xs font-bold w-full top-0 absolute focus:outline-none hover:bg-gray-700"
      >
        Back To Top
      </button>
      <div className="border-[0.5px] border-amazon_blue-light w-full" />
      <h4 className="text-sm  text-white sm:mt-11 mt-7 absolute bottom-16">
        Developed by Souvik Nath
      </h4>
      <div className="flex mt-5 space-x-5 text-white absolute bottom-6">
        <GitHubIcon
          onClick={() => router.push("https://github.com/souviknsl07")}
          className="link"
        />
        <FacebookIcon
          onClick={() =>
            router.push("https://www.facebook.com/souvik.nath.12914")
          }
          className="link"
        />
        <LinkedInIcon
          onClick={() =>
            router.push("https://www.linkedin.com/in/souvik-nath-6b35691b0")
          }
          className="link"
        />
        <InstagramIcon
          onClick={() => router.push("https://www.instagram.com/iamsouviknath")}
          className="link"
        />
      </div>
    </footer>
  );
};

export default Footer;
