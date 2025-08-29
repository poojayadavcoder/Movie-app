import { FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <div className='w-full h-auto bg-black flex justify-start items-center flex-col'>
    <div className='w-full h-[200px] bg-black pt-[50px] flex 
    justify-around items-start gap-5'>
        <div>
            <h1 className='text-[20px] font-semibold text-violet-400'>Movie Go</h1>
            <div className='flex justify-start items-start mt-3 flex-col gap-2'>
                <h1 className='text-white text-[13px]'>About Us</h1>
                <h1 className='text-white text-[13px]'>Careers</h1>
                {/* <h1 className='text-white text-[13px]'></h1> */}
            </div>
        </div>
         <div>
            <h1 className='text-[20px] font-semibold text-violet-400'>Support</h1>
             <div className='flex justify-start items-start mt-3 flex-col gap-2'>
                <h1 className='text-white text-[13px]'>Help Center</h1>
                <h1 className='text-white text-[13px]'>Contact Us</h1>
                <h1 className='text-white text-[13px]'>Feedback</h1>
            </div>
        </div>
         <div>
            <h1 className='text-2xl font-semibold text-violet-400'>Legal</h1>
             <div className='flex justify-start items-start mt-3 flex-col gap-2'>
                <h1 className='text-white text-[13px]'>Privacy Policy</h1>
                <h1 className='text-white text-[13px]'>Terms of Service</h1>
                <h1 className='text-white text-[13px]'>Cookie Policy</h1>
            </div>
        </div>
      
    </div>
      <div className='flex gap-3 w-[90%] border-[1px] border-t-violet-400 justify-center items-center py-5'>
  <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
        <FaLinkedin className="text-white" />
      </a>
      <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-white" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-white" />
      </a>
        </div>
        </div>
  )
}
