// import React, { useState } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// export default function ProgramFeatures() {
//     const [isPlaying, setIsPlaying] = useState(false);

//     // Orchestration variant for the staggered cards stack
//     const cardContainerVariants = {
//         hidden: {},
//         visible: {
//             transition: {
//                 staggerChildren: 0.1, // Quick cascading sequence downwards
//             }
//         }
//     };

//     // Standard card movement
//     const cardItemVariants = {
//         hidden: { opacity: 0, y: 20 },
//         visible: {
//             opacity: 1,
//             y: 0,
//             transition: { type: "tween", ease: "easeOut", duration: 0.5 }
//         }
//     };

//     return (
//         <section className="w-full bg-white font-inter py-6 pb-[200px] -mb-[300px] overflow-hidden">
//             {/* Main Container matching the Hero layout width bounds */}
//             <div className="mx-auto px-3 md:px-8 lg:px-10">

//                 {/* Top Header Grid Area */}
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start mb-12">
//                     {/* Left Title Box - Drifts up on viewport entry */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 25 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true, margin: "-100px" }}
//                         transition={{ duration: 0.6, ease: "easeOut" }}
//                         className="lg:col-span-7 flex flex-col space-y-3"
//                     >
//                         <span className="text-[#F9A53C] font-sm text-[15px] leading-none tracking-[0.1em] uppercase">
//                             Inside the Program
//                         </span>
//                         <h2 className="text-[#242424] max-w-[500px] font-md text-3xl md:text-[48px] md:leading-[57px] tracking-normal">
//                             A premium corporate classroom not a coaching center.
//                         </h2>
//                     </motion.div>

//                     {/* Right Subtitle Box - Follows title box immediately */}
//                     <motion.div
//                         initial={{ opacity: 0, y: 15 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         viewport={{ once: true, margin: "-100px" }}
//                         transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
//                         className="lg:col-span-5 lg:pt-8"
//                     >
//                         <p className="text-[#555454] font-normal text-sm md:text-[16px] md:leading-[24px] tracking-normal">
//                             Step inside SPECIAL40. Real corporate environments, focused batch and
//                             CA-led sessions designed to feel like work, not class.
//                         </p>
//                     </motion.div>
//                 </div>

//                 {/* Lower Content Split: Video Placeholder vs Feature Cards Stack */}
//                 <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">

//                     {/* Left Side: Video Preview Container - Fades in cleanly with a subtle scale entry */}
//                     <motion.div
//                         initial={{ opacity: 0, scale: 0.98 }}
//                         whileInView={{ opacity: 1, scale: 1 }}
//                         viewport={{ once: true, margin: "-100px" }}
//                         transition={{ duration: 0.6, ease: "easeOut" }}
//                         className="lg:col-span-7 relative w-full rounded-sm bg-gray-900 overflow-hidden group cursor-pointer shadow-sm aspect-video lg:aspect-auto lg:min-h-[300px] md:min-h-[440px] -mt-4 md:mt-0"
//                     >
//                         {isPlaying ? (
//                             <video
//                                 src="/Special40Class.mp4"
//                                 controls
//                                 autoPlay
//                                 playsInline
//                                 className="absolute inset-0 w-full h-full object-cover"
//                             />
//                         ) : (
//                             <div
//                                 className="absolute inset-0 w-full h-full"
//                                 onClick={() => setIsPlaying(true)}
//                             >
//                                 <div
//                                     className="absolute inset-0 bg-cover bg-center opacity-80 transition-transform duration-500 group-hover:scale-105"
//                                     style={{ backgroundImage: `url('/videothumb.jpg')` }}
//                                 />

//                                 {/* Subtle Overlay */}
//                                 <div className="absolute inset-0 bg-black/10" />

//                                 {/* Play Button */}
//                                 <div className="absolute inset-0 flex items-center justify-center">
//                                     <button className="h-16 w-16 md:h-20 md:w-20 rounded-full bg-[#F9A53C] text-white flex items-center justify-center shadow-lg transform transition-transform duration-300 group-hover:scale-110 active:scale-95">
//                                         <Image
//                                             src="/play.png"
//                                             alt="Play"
//                                             width={32}
//                                             height={32}
//                                         />
//                                     </button>
//                                 </div>
//                             </div>
//                         )}
//                     </motion.div>

//                     {/* Right Side: Feature Feature List Stack (Staggered orchestration) */}
//                     <motion.div
//                         variants={cardContainerVariants}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true, margin: "-100px" }}
//                         className="lg:col-span-5 flex flex-col justify-between space-y-2"
//                     >

//                         {/* Card 1: Corporate */}
//                         <motion.div
//                             variants={cardItemVariants}
//                             whileHover={{ y: -4, borderColor: "rgba(9, 99, 110, 0.2)" }}
//                             className="bg-white p-5 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col space-y-2 transition-all duration-300"
//                         >
//                             <div className="flex items-center gap-2">
//                                 <div className="w-6 h-[1px] bg-[#F9A53C]" />
//                                 <span className="text-[#F9A53C] text-xs font-sm uppercase tracking-wider">Corporate</span>
//                             </div>
//                             <h4 className="text-[#09636E] font-md text-base md:text-lg">
//                                 Real office-like training environment
//                             </h4>
//                         </motion.div>

//                         {/* Card 2: Live */}
//                         <motion.div
//                             variants={cardItemVariants}
//                             whileHover={{ y: -4, borderColor: "rgba(9, 99, 110, 0.2)" }}
//                             className="bg-white p-5 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col space-y-2 transition-all duration-300"
//                         >
//                             <div className="flex items-center gap-2">
//                                 <div className="w-6 h-[1px] bg-[#F9A53C]" />
//                                 <span className="text-[#F9A53C] text-xs font-sm uppercase tracking-wider">Live</span>
//                             </div>
//                             <h4 className="text-[#09636E] font-md text-base md:text-lg">
//                                 Industry projects and case work
//                             </h4>
//                         </motion.div>

//                         {/* Card 3: Mentor-Led */}
//                         <motion.div
//                             variants={cardItemVariants}
//                             whileHover={{ y: -4, borderColor: "rgba(9, 99, 110, 0.2)" }}
//                             className="bg-white p-5 rounded-sm shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col space-y-2 transition-all duration-300"
//                         >
//                             <div className="flex items-center gap-2">
//                                 <div className="w-6 h-[1px] bg-[#F9A53C]" />
//                                 <span className="text-[#F9A53C] text-xs font-sm uppercase tracking-wider">Mentor-Led</span>
//                             </div>
//                             <h4 className="text-[#09636E] font-md text-base md:text-lg">
//                                 Chartered Accountants from CAPITAIRE
//                             </h4>
//                         </motion.div>

//                         {/* Card 4: Atmosphere (Filled Custom Palette Container) */}
//                         <motion.div
//                             variants={cardItemVariants}
//                             whileHover={{ scale: 1.01, backgroundColor: "#074f58" }}
//                             className="bg-[#09636E] p-6 rounded-sm shadow-md flex flex-col space-y-2 text-white transition-all duration-300 cursor-pointer"
//                         >
//                             <div className="flex items-center gap-2">
//                                 <div className="w-6 h-[1px] bg-[#F9A53C]" />
//                                 <span className="text-[#F9A53C] text-xs font-sm uppercase tracking-wider">Atmosphere</span>
//                             </div>
//                             <p className="text-gray-100 font-normal text-sm md:text-base leading-relaxed">
//                                 Glass-walled training rooms, live dashboards, focused peers built to mirror real corporate finance teams.
//                             </p>
//                         </motion.div>

//                     </motion.div>
//                 </div>

//             </div>
//         </section>
//     );
// }


import React from 'react';
import { motion } from 'framer-motion';

export default function ProgramFeatures() {
    // Orchestration variant for the staggered cards stack
    const cardContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1, // Quick cascading sequence downwards
            }
        }
    };

    // Standard card movement
    const cardItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "tween", ease: "easeOut", duration: 0.5 }
        }
    };

    return (
        <section className="w-full bg-white font-inter py-6 pb-[200px] -mb-[300px] overflow-hidden">
            {/* Main Container matching the Hero layout width bounds */}
            <div className="mx-auto px-3 md:px-8 lg:px-10">

                {/* Top Header Grid Area */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start mb-12">
                    {/* Left Title Box - Drifts up on viewport entry */}
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="lg:col-span-7 flex flex-col space-y-3"
                    >
                        <span className="text-[#F9A53C] font-sm text-[15px] leading-none tracking-[0.1em] uppercase">
                            Inside the Program
                        </span>
                        <h2 className="text-[#242424] max-w-[500px] font-md text-3xl md:text-[48px] md:leading-[57px] tracking-normal">
                            A premium corporate classroom not a coaching center.
                        </h2>
                    </motion.div>

                    {/* Right Subtitle Box - Follows title box immediately */}
                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
                        className="lg:col-span-5 lg:pt-8"
                    >
                        <p className="text-[#555454] font-normal text-sm md:text-[16px] md:leading-[24px] tracking-normal">
                            Step inside SPECIAL40. Real corporate environments, focused batch and
                            CA-led sessions designed to feel like work, not class.
                        </p>
                    </motion.div>
                </div>

                {/* Lower Content Split: Autoplay Video vs Feature Cards Stack */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch">

                    {/* Left Side: Seamless Looping Video Container */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="lg:col-span-7 relative w-full bg-gray-900 overflow-hidden shadow-sm aspect-video lg:aspect-auto lg:min-h-[300px] md:min-h-[440px] -mt-4 md:mt-0"
                    >
                        <video
                            src="/Special40Class.mp4"
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Right Side: Feature List Stack (Staggered orchestration) */}
                    <motion.div
                        variants={cardContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:col-span-5 flex flex-col justify-between space-y-2"
                    >

                        {/* Card 1: Corporate */}
                        <motion.div
                            variants={cardItemVariants}
                            whileHover={{ y: -4, borderColor: "rgba(9, 99, 110, 0.2)" }}
                            className="bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col space-y-2 transition-all duration-300"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-[1px] bg-[#F9A53C]" />
                                <span className="text-[#F9A53C] text-xs font-sm uppercase tracking-wider">Corporate</span>
                            </div>
                            <h4 className="text-[#09636E] font-md text-base md:text-lg">
                                Real office-like training environment
                            </h4>
                        </motion.div>

                        {/* Card 2: Live */}
                        <motion.div
                            variants={cardItemVariants}
                            whileHover={{ y: -4, borderColor: "rgba(9, 99, 110, 0.2)" }}
                            className="bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col space-y-2 transition-all duration-300"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-[1px] bg-[#F9A53C]" />
                                <span className="text-[#F9A53C] text-xs font-sm uppercase tracking-wider">Live</span>
                            </div>
                            <h4 className="text-[#09636E] font-md text-base md:text-lg">
                                Industry projects and case work
                            </h4>
                        </motion.div>

                        {/* Card 3: Mentor-Led */}
                        <motion.div
                            variants={cardItemVariants}
                            whileHover={{ y: -4, borderColor: "rgba(9, 99, 110, 0.2)" }}
                            className="bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-50 flex flex-col space-y-2 transition-all duration-300"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-[1px] bg-[#F9A53C]" />
                                <span className="text-[#F9A53C] text-xs font-sm uppercase tracking-wider">Mentor-Led</span>
                            </div>
                            <h4 className="text-[#09636E] font-md text-base md:text-lg">
                                Chartered Accountants from CAPITAIRE
                            </h4>
                        </motion.div>

                        {/* Card 4: Atmosphere */}
                        <motion.div
                            variants={cardItemVariants}
                            whileHover={{ scale: 1.01, backgroundColor: "#074f58" }}
                            className="bg-[#09636E] p-6 shadow-md flex flex-col space-y-2 text-white transition-all duration-300 cursor-pointer"
                        >
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-[1px] bg-[#F9A53C]" />
                                <span className="text-[#F9A53C] text-xs font-sm uppercase tracking-wider">Atmosphere</span>
                            </div>
                            <p className="text-gray-100 font-normal text-sm md:text-base leading-relaxed">
                                Glass-walled training rooms, live dashboards, focused peers built to mirror real corporate finance teams.
                            </p>
                        </motion.div>

                    </motion.div>
                </div>

            </div>
        </section>
    );
}