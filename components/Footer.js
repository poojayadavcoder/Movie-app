import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";
import background from "../public/layerBackImg.png"

export default function Footer() {
  return (
<div
className="w-full min-h-[300px] bg-black relative 
bg-no-repeat bg-cover bg-center flex justify-center items-center
 gap-5 flex-col pt-[120px]"

  style={{ backgroundImage:`url(${background.src})`}}
>
      <div className="w-full h-auto 
       flex justify-around items-start gap-5">
        <div>
          <h1 className="text-[16px] sm:text-[20px] font-semibold
           text-white">
            Movie Go
          </h1>
          <div className="flex justify-start items-start mt-3 flex-col gap-2">
            <h1 className="text-white text-[13px]">About Us</h1>
            <h1 className="text-white text-[13px]">Careers</h1>
          </div>
        </div>
        <div>
          <h1 className="text-[16px] sm:text-[20px] font-semibold
           text-white">
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
      <div className="flex gap-3 w-[90%] border-[1px]
       border-t-black border-x-0 border-b-0 justify-center items-center py-5">
        <a
          href="https://www.linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="text-white hover:text-violet-400" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter className="text-white hover:text-violet-400" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram className="text-white hover:text-violet-400" />
        </a>
      </div> 
    </div>
  );
}
