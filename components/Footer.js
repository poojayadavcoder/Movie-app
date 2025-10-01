import Link from "next/link";
import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div
      className="w-full h-auto relative px-2
bg-no-repeat bg-cover bg-center flex justify-start items-center
 gap-6 flex-col py-[20px] mt-2 md:mt-5"
    >
      <div
        className=" w-full h-full absolute top-0 left-0 bg-gradient-to-t from-purple-700
 to-black z-20"
      ></div>
      <div className="w-full h-[50px] flex justify-center items-center relative z-20 ">
        <h1 className="font-bold logo text-[30px] text-white shadowLogo">
          Movie Go
        </h1>
      </div>
      <div
        className="w-full h-auto relative z-25
       flex justify-around items-start gap-5"
      >
        <div>
          <h1
            className="text-[16px] sm:text-[20px] font-semibold
           text-white"
          >
            Links
          </h1>
          <div className="flex justify-start items-start mt-3 flex-col gap-2">
            <h1 className="text-white text-[13px]">
              <Link href="/">Home</Link>
            </h1>
            <h1 className="text-white text-[13px]">
              <Link href="/pages/movies">Movies</Link>
            </h1>
            <h1 className="text-white text-[13px]">
              <Link href="/pages/watchlist">Favorites</Link>
            </h1>
          </div>
        </div>
        <div>
          <h1
            className="text-[16px] sm:text-[20px] font-semibold
           text-white"
          >
            Support
          </h1>
          <div className="flex justify-start items-start mt-3 flex-col gap-2">
            <h1 className="text-white text-[13px]">Help Center</h1>
            <h1 className="text-white text-[13px]">Contact Us</h1>
            <h1 className="text-white text-[13px]">Feedback</h1>
          </div>
        </div>
        <div>
          <h1 className="text-[16px] sm:text-2xl font-semibold text-white">
            Legal
          </h1>
          <div className="flex justify-start items-start mt-3 flex-col gap-2">
            <h1 className="text-white text-[13px]">Privacy Policy</h1>
            <h1 className="text-white text-[13px]">Terms of Service</h1>
            <h1 className="text-white text-[13px]">Cookie Policy</h1>
          </div>
        </div>
      </div>
      <div
        className="flex gap-3 w-[90%] border-[1px] relative z-25 pt-10
       border-t-white border-x-0 border-b-0 justify-center items-center"
      >
        <Link
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-2 border-[1px] border-white"
        >
          <FaLinkedin className="text-white hover:text-violet-400" />
        </Link>
        <Link
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-2 border-[1px] border-white"
        >
          <FaTwitter className="text-white hover:text-violet-400" />
        </Link>
        <Link
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full p-2 border-[1px] border-white"
        >
          <FaInstagram className="text-white hover:text-violet-400" />
        </Link>
      </div>
    </div>
  );
}
