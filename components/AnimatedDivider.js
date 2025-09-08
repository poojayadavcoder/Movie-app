"use client";

export default function AnimatedDivider() {
  return (
    <div className="w-full py-[50px] bg-black flex justify-center">
      <div className="w-[80%] h-[2px] bg-gradient-to-r from-violet-400 via-pink-400 to-violet-400 animate-gradient"></div>

      <style jsx>{`
        @keyframes gradientMove {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        .animate-gradient {
          background-size: 200% auto;
          animation: gradientMove 3s linear infinite;
        }
      `}</style>
    </div>
  );
}


// "use client";

// export default function AnimatedDivider() {
//   return (
//     <div className="w-full py-[50px] bg-black flex justify-center">
//       <div className="relative w-[80%] h-[40px] overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-full wave"></div>
//       </div>

//       <style jsx>{`
//         .wave {
//           background: linear-gradient(to right, red, #ec4899, #8b5cf6);
//           background-size: 200% auto;
//           animation: waveMove 4s linear infinite;
//           clip-path: path(
//             "M0 20 Q 25 10, 50 20 T 100 20 T 150 20 T 200 20 V40 H0 Z"
//           );
//         }

//         @keyframes waveMove {
//           0% {
//             background-position: 0% 50%;
//           }
//           100% {
//             background-position: 200% 50%;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }
