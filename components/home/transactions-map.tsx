// import Image from "next/image"

// const TransactionsMap = () => {
//   return (
//     <section className="py-16 px-4 relative overflow-hidden">
//       <div className="container mx-auto">
//         <div className="bg-[#0A1A4A] rounded-xl overflow-hidden p-6 md:p-12 relative">
//           {/* Content */}
//           <div className="relative z-10 max-w-xl mb-8">
//             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
//               Transactions from Africa to the last mile
//             </h2>
//             <p className="text-gray-300 text-lg">
//               We provide the technology and infrastructure that powers agency banking, merchant payments, and seamless
//               financial transactions. Whether you're a bank, a fintech, or a business, we're here to simplify your
//               financial journey.
//             </p>
//           </div>

//           {/* Map visualization */}
//           <div className="relative h-[300px] md:h-[400px] w-full">
//             {/* Africa Map */}
//             <div className="absolute left-0 bottom-0 w-[60%] h-[90%]">
//               <Image src="/map2.png" alt="Africa Map" fill className="object-contain" />

//               {/* User avatars in West Africa */}
//               <div className="absolute top-[60%] left-[20%] flex -space-x-2">
//                 <div className="h-8 w-8 rounded-full bg-yellow-500 border-2 border-white overflow-hidden z-30">
//                   <Image src="/Ellipse 16 (1).png" alt="User" width={32} height={32} />
//                 </div>
//                 <div className="h-8 w-8 rounded-full bg-blue-500 border-2 border-white overflow-hidden z-20">
//                   <Image src="/Ellipse 16.png" alt="User" width={32} height={32} />
//                 </div>
//                 <div className="h-8 w-8 rounded-full bg-green-500 border-2 border-white overflow-hidden z-10">
//                   <Image src="/Ellipse 17.png" alt="User" width={32} height={32} />
//                 </div>
//               </div>
//             </div>

//             {/* North America Map */}
//             <div className="absolute right-0 top-0 w-[40%] h-[60%]">
//               <Image src="/map1.png" alt="North America Map" fill className="object-contain" />

//               {/* Transaction point */}
//               <div className="absolute bottom-[30%] right-[40%]">
//                 <div className="h-3 w-3 bg-blue-400 rounded-full animate-pulse"></div>
//               </div>
//             </div>

//             {/* Connection Lines */}
//             <div className="absolute inset-0">
//               <Image src="/map-connect.png" alt="Connection Lines" fill className="object-contain" />
//             </div>
//           </div>

//           {/* Background decorative elements */}
//           <div className="absolute bottom-0 right-0 opacity-10">
//             <div className="w-64 h-64 bg-blue-500 rotate-45 transform translate-x-32 translate-y-32"></div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default TransactionsMap


import Image from "next/image"

const TransactionsMap = () => {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="bg-[#0A1A4A] rounded-xl overflow-hidden p-6 md:p-12 relative">
          {/* Content */}
          <div className="relative z-10 max-w-xl mb-8">
            <h2 className=" font-grotesk text-headline md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Transactions from Africa to the last mile
            </h2>
            <p className="text-gray-300 text-lg font-grotesk text-headline">
              We provide the technology and infrastructure that powers agency banking, merchant payments, and seamless
              financial transactions. Whether you&apos;re a bank, a fintech, or a business, we&apos;re here to simplify
              your financial journey.
            </p>
          </div>

          {/* Map visualization */}
          <div className=" h-[100%] md:h-[400px] w-full  ">
            {/* Africa Map */}
            <div className="absolute left-0 bottom-0 w-[60%] h-[50%]">
              <Image
                src="/map-people.png"
                alt="Africa Map"
                fill
                className="object-contain"
              />

              {/* User avatars in West Africa */}
              {/* <div className="absolute top-[60%] left-[20%] flex -space-x-2">
                <div className="h-8 w-8 rounded-full bg-yellow-500 border-2 border-white overflow-hidden z-30">
                  <div className="w-full h-full bg-yellow-500"></div>
                </div>
                <div className="h-8 w-8 rounded-full bg-blue-500 border-2 border-white overflow-hidden z-20">
                  <div className="w-full h-full bg-purple-500"></div>
                </div>
                <div className="h-8 w-8 rounded-full bg-green-500 border-2 border-white overflow-hidden z-10">
                  <div className="w-full h-full bg-green-500"></div>
                </div>
              </div> */}
            </div>

            {/* North America Map */}
            <div className="absolute right-0 top-0 w-[20%] h-[50%]  ">
              <Image
                src="/map.png"
                alt="North America Map"
                fill
                className="object-contain"
              />

              {/* Transaction point */}
              <div className="absolute bottom-[30%] right-[40%]">
                <div className="h-3 w-3 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Connection Lines */}
            <div className="absolute inset-0 left-[30%] ">
              <Image
                src="/map-connect.png"
                alt="Connection Lines"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Background decorative elements */}
          {/* <div className="absolute bottom-0 right-0 opacity-10">
            <Image
              src="/Decorative-Shape"
              alt="Decorative Shape"
              width={300}
              height={300}
              className="transform translate-x-32 translate-y-32"
            />
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default TransactionsMap
