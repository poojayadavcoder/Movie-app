
"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export default function Slider() {
  const [sliderData, setSliderData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const response = await fetch("/api/movies/slider");
    const data = await response.json();
    setSliderData(data);
  }

  if (sliderData.length === 0) return <div>Loading...</div>;

  return (
    <div className="w-full h-[500px] overflow-hidden
     bg-amber-200 flex ">
       <Swiper 
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        className="w-full h-full">
      {
        sliderData.map((slide, index) => { 
          return(
            <SwiperSlide>
            <div key={index} 
            className="w-full h-full overflow-hidden relative">
                <Image
                src={slide.image}
                alt={slide.title || "movie-poster"}
                // width={900}
                // height={400}
                quality={100}
                fill
                className=" w-full h-full object-cover"
              />
              <div className="w-full h-full absolute top-0 left-0
               bg-black/40"></div>
              <div className="absolute bottom-[80px] left-[50px] z-30
              w-[340px] h-[200px] flex justify-start items-start gap-3 flex-col">
                <h1 className="text-3xl font-bold text-white 
                [text-shadow:_0_0_4px_violet]">{slide.title}</h1>
                <p className="text-[14px] text-white ">{slide.description}</p>
             <div className="flex justify-center items-center gap-3">
                 <button className="bg-black text-violet-400 
                 text-[14px] border-[1px] border-violet-400 hover:bg-violet-400 hover:text-white cursor-pointer transition-all duration-150 ease-linear font-semibold rounded-[5px] px-3 py-[4px]">Explore More</button>
                <button className="bg-black text-violet-400 text-[14px] border-[1px] border-violet-400 font-semibold rounded-[5px] 
                px-3 py-[4px] hover:bg-violet-400 hover:text-white cursor-pointer transition-all duration-150 ease-linear">Watch Now</button>
             </div>
              </div>
              </div>
              </SwiperSlide>
          )
        })}
        </Swiper>
    </div>
         
  );
}


      /* <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        // pagination={{ clickable: true }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        className="w-full h-full"
      > *
        {/* /* {sliderData.map((slide, index) => { */
          // return (
            // <div key={index}></div>
          // )
        // } 
          // <SwiperSlide key={index}>
            // <div className="relative w-full h-full" key={index}>
            //   <Image
            //     src={slide.image}
            //     alt={slide.title || "movie-poster"}
            //     fill
            //     className="object-cover"
            //   />
              /* <div className="absolute bottom-5 left-5
               text-white bg-black bg-opacity-50 px-4 py-2 
               rounded-lg">
                <h2 className="text-lg font-bold">{slide.title}</h2>
                <p className="text-sm">{slide.description}</p>
              </div> */
            // </div>
          /* </SwiperSlide> */
        
     /* </Swiper> */
 












// 'use client'
// import Image from "next/image"
// import { useEffect, useState } from "react"
// @import 'swiper/css';
// @import 'swiper/css/navigation';
// @import 'swiper/css/pagination';

// export default function Slider() {
//  const [sliderData,setSliderData]=useState([])
//   useEffect(()=>{
//   fetchData()
//   },[])

//   async function fetchData(){
//   const response= await fetch('/api/movies/slider')
//   const data= await response.json()
//   setSliderData(data)
//   }
//   console.log(sliderData)

//   return (
//     <div className='w-full min-h-[400px] flex'>
//         {
//             sliderData.map((slide,index)=>{
//                 return (
//         <div
//           key={index}
//           className={`w-full h-full  relative
//             transition-opacity duration-700
//           `}
//         >
//           <Image
//             src={slide.image}
//             alt={slide.title || "movie-poster"}
//             width={900} height={400}
//             className="object-cover"
//           />
//           <div className="absolute bottom-5 left-5 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
//             <h2 className="text-lg font-bold">{slide.title}</h2>
//             <p className="text-sm">{slide.description}</p>
//           </div>
//         </div>
//        )
//       })
//      }
//    </div>
//   )
// }


// "use client";
// import Image from "next/image";
// import { useEffect, useState } from "react";

// export default function Slider() {
//   const [sliderData, setSliderData] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   async function fetchData() {
//     const response = await fetch("/api/movies/slider");
//     const data = await response.json();
//     setSliderData(data);
//   }

//   // Auto-slide every 3 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prevIndex) =>
//         prevIndex === sliderData.length - 1 ? 0 : prevIndex + 1
//       );
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [sliderData]);

//   if (sliderData.length === 0) return <div>Loading...</div>;

//   return (
//     <div className="relative w-full h-[400px] overflow-hidden">
//       <div
//         className="flex transition-transform duration-700 ease-in-out"
//         style={{
//           transform: `translateX(-${currentIndex * 100}%)`,
//           width: `${sliderData.length * 100}%`,
//         }}
//       >
//         {sliderData.map((slide, index) => (
//           <div key={index} className="w-full h-[400px] relative flex-shrink-0">
//             <Image
//               src={slide.image}
//               alt={slide.title || "movie-poster"}
//               fill
//               className="object-cover"
//             />
//             <div className="absolute bottom-5 left-5 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg">
//               <h2 className="text-lg font-bold">{slide.title}</h2>
//               <p className="text-sm">{slide.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
