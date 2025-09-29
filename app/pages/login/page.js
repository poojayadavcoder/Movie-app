"use client"

import Footer from "@/components/Footer"
import Header from "@/components/Header"
import InputBox from "@/components/InputBox"
import { useState } from "react"
import toast from "react-hot-toast"
import Link from "next/link";
export default function Page() {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const [formError,setFormError]=useState({})
 
  const formValidation=({email,password})=>{
    let errors={}
     if(password.trim()===""){
       errors.password= "password is required"
    }
    if(email.trim()===""){
       errors.email="email is required"
    }
    setFormError(errors)
    return errors
  }

  const handleSubmit=async(e)=>{
     e.preventDefault()
       const errors = formValidation({ email, password })
      if (Object.keys(errors).length > 0) {
      // console.log("Validation errors:", errors)
      return
    }
    //  console.log(email)
    //  console.log(password)
     const res=await fetch('/api/login',{
     method:"POST",
     headers: { "Content-Type": "application/json" },
     body:JSON.stringify({password,email})
   })
   const data=await res.json()
   if (res.ok) {
    toast.success("Logged in successfully!")
    localStorage.setItem("token", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));

    // Optional: redirect to homepage
    window.location.href = "/"; 
  } else {
    toast.error(data.error || "Login failed")
  }
  //  console.log(data)
  }

 return (
    <>
    <Header/>
    <div className="w-full min-h-[100vh] flex justify-center items-center mt-[90px] px-2 md:mt-[100px]">
       <div className="w-[350px] h-[500px] rounded-2xl p-[2px] bg-gradient-to-tl from-violet-400 via-pink-500 to-violet-900 flex justify-center items-center">
         <div className="w-full h-full bg-black rounded-2xl 
         flex justify-center items-center flex-col gap-5 px-[20px]">
            <div className="text-center flex justify-center items-center flex-col">
              <h1 className="text-white text-[16px]">Sign in to <span className="logo text-violet-400 text-[19px]">Movie Go</span> </h1>
              <p className="text-white text-[16px]">Welcome back! Please sign in to continue</p>
           </div>
           {/* <div className="flex justify-center items-center text-white gap-3 py-[5px] border-[1px] border-white w-[90%] rounded-2xl">
             <span className="">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 533.5 544.3">
                   <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.5-34.1-4.3-50.4H272v95.4h146.9c-6.3 34-25.3 62.8-53.8 82v68h86.7c50.6-46.7 81.7-115.4 81.7-195z"/>
                   <path fill="#34A853" d="M272 544.3c72.7 0 133.8-24 178.5-64.9l-86.7-68c-24.1 16.2-54.9 25.8-91.8 25.8-70.7 0-130.7-47.7-152.3-111.7H30.7v69.9c44.6 88.3 135.8 148.9 241.3 148.9z"/>
                   <path fill="#FBBC05" d="M119.7 325.5a162.1 162.1 0 0 1 0-106.7v-69.9H30.7a272 272 0 0 0 0 246.5l89-69.9z"/>
                   <path fill="#EA4335" d="M272 107.7c39.6 0 75.2 13.7 103.3 40.6l77.3-77.3C405.6 24 344.6 0 272 0 166.5 0 75.3 60.6 30.7 148.9l89 69.9C141.3 155.4 201.3 107.7 272 107.7z"/>
                </svg>
                </span>
             <p className="text-[14px]">Continue with Google</p>
           </div> */}
           {/* <div className="w-[95%] ">
            <div className="relative w-full flex items-center">
               <div className="flex-grow h-px bg-gray-300"></div>
                <span className="mx-1 text-white bg-black px-1 text-[17px]">or</span>
                <div className="flex-grow h-px bg-gray-300"></div>
            </div> */}
           {/* </div> */}
           <form action="" onSubmit={(e)=>handleSubmit(e)}
            className="flex justify-center items-center gap-3 flex-col"
            >
             <InputBox label="Email"
                  setValue={setEmail}
                  errorKey="email"
                   formError={formError}
                   placeholder="Enter your email here..."
                />
             <InputBox label="Password"
                  setValue={setPassword}
                  errorKey="password"
                  formError={formError}
                  placeholder="Enter your password here..."
              />
           <button className="py-[3px] text-violet-400 border-[1px] border-violet-400 rounded-[5px] w-[95%] hover:bg-violet-400 hover:text-white transition-all duration-300 ease-linear cursor-pointer">Continue</button>
           </form>
           <div className="w-[95%] border-t-[1px] pt-5 border-x-0 border-b-0 border-white flex justify-center items-center py-[8px]">
            <h1 className="text-white text-[14px]">Don’t have an account? <Link href="/pages/signup" className="font-semibold text-violet-400 underline">Sign up</Link></h1>
           </div>
         </div>
       </div>
    </div>
    <Footer/>
    </>
  )
}
