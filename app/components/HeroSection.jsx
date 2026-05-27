import React from 'react';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import LeadForm from './LeadForm';

export default function HeroSection() {
    // Parent orchestrator for content staggered loading
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Smooth, quick sequence cascading downwards
                delayChildren: 0.1
            }
        }
    };

    // Soft slide-up variant for text blocks
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "tween", ease: "easeOut", duration: 0.5 }
        }
    };

    return (
        <section className="w-full bg-gradient-to-b from-[#FFFFFF] to-[#FFE5C2] font-inter flex flex-col overflow-hidden">

            {/* Top Header Row */}
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="w-full mx-auto px-4 md:px-8 lg:px-10 pt-5"
            >
                <div className="w-full py-1 flex justify-between items-center border-b border-[#DEDBD7]">
                    <div className="relative h-14 w-48">
                        <Image
                            src="/logo.png"
                            alt="Logo"
                            fill
                            className="object-contain object-left"
                            priority
                        />
                    </div>
                    <button
                        onClick={() => document.getElementById('assessment-form')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-[#09636E] text-white px-5 py-2.5  text-md font-semibold hover:bg-[#074f58] transition-colors hidden min-[431px]:block active:scale-95 duration-150"
                    >
                        Apply for Assessment
                    </button>
                </div>
            </motion.div>

            {/* Main Content Container */}
            <div className="w-full mx-auto px-4 md:px-8 lg:px-10 py-6 md:py-12 flex-grow flex items-center">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

                    {/* Left Column: Marketing Copy with Staggered Elements */}
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="lg:col-span-7 flex flex-col space-y-4"
                    >
                        {/* Pill Tag */}
                        <motion.div variants={itemVariants}>
                            <span
                                className="bg-[#F9A53C] text-white px-4 py-1 text-[18px] leading-[24px] tracking-normal font-medium inline-block w-full sm:w-auto text-center sm:text-left whitespace-nowrap"
                                style={{
                                    fontFamily: 'Inter',
                                    fontStyle: 'Medium',
                                    letterSpacing: '0%',
                                }}
                            >
                                Kerala's First Finance Career Program
                            </span>
                        </motion.div>

                        {/* Animated Main Title */}
                        <motion.h1
                            variants={itemVariants}
                            className="font-inter font-bold text-[46px] leading-[49px] tracking-normal
             md:font-semibold md:text-5xl 
             lg:text-[62px] lg:leading-[69px] lg:tracking-normal"
                            style={{
                                fontFamily: 'Inter',
                                fontStyle: 'normal',
                                letterSpacing: '0%',
                            }}
                        >
                            Become an <span className="text-[#09636E]">irreplaceable</span> finance professional.
                        </motion.h1>

                        {/* Sub-heading */}
                        <motion.p
                            variants={itemVariants}
                            className="text-[#09636E] my-6 h-6 flex items-center opacity-100 tracking-normal max-[450px]:max-w-[300px]"
                            style={{
                                fontFamily: 'Inter',
                                fontWeight: '500',
                                fontStyle: 'Medium',
                                fontSize: '24px',
                                lineHeight: '30px',
                                letterSpacing: '0%',
                            }}
                        >
                            Built for ambitious commerce graduates.
                        </motion.p>

                        {/* Exact Typography Description */}
                        <motion.p
                            variants={itemVariants}
                            className="text-gray-600 mt-2 font-normal 
             max-[450px]:text-[18px] max-[450px]:leading-[28px]
             min-[451px]:text-[18px] min-[451px]:leading-[30px]
             tracking-normal"
                        >
                            SPECIAL40 is an exclusive finance career acceleration program that
                            transforms commerce graduates into corporate-ready professionals through
                            practical training, live projects, CA-led mentorship and real business exposure.
                        </motion.p>

                        {/* Left Side CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row gap-4 pt-4"
                        >
                            <button
                                onClick={() => document.getElementById('assessment-form')?.scrollIntoView({ behavior: 'smooth' })}
                                className="
    bg-[#09636E] 
    text-white 
    px-6 
    py-4  
    flex 
    items-center 
    justify-center 
    gap-2 
    transition-colors 
    shadow-sm 
    w-full 
    sm:w-auto 
    active:scale-[0.98] 
    duration-100
    
    /* Typography styles matching your specs */
    font-['Inter'] 
    font-semibold  /* font-weight: 600 */
    text-[18px]    /* font-size: 18px */
    leading-[100%] /* line-height: 100% */
    tracking-normal /* letter-spacing: 0% (normal) */
    
    hover:bg-[#074f58]
  "
                            >
                                Apply for Assessment <ArrowRight size={18} />
                            </button>
                            <button
                                className="
    border 
    border-[#09636E] 
    text-gray-800 
    backdrop-blur-sm 
    px-6 
    py-4  
    transition-colors 
    shadow-sm 
    w-full 
    sm:w-auto 
    active:scale-[0.98] 
    duration-100
    
    /* Typography styles matching your specs */
    font-['Inter'] 
    font-bold      /* font-weight: 600 (or 700 for bold) */
    text-[18px]    /* font-size: 18px */
    leading-[100%] /* line-height: 100% */
    tracking-normal /* letter-spacing: 0% */
    
    hover:bg-white/80
  "
                            >
                                Book Career Consultation
                            </button>
                        </motion.div>

                        {/* Social Proof / Badges */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-row gap-4 pt-4"
                        >
                            <div className="border border-[#F9A53C] bg-[#FFE5C2]/20 max-w-[200px] backdrop-blur-sm  p-3 flex flex-col justify-center flex-1 min-w-0 hover:bg-[#FFE5C2]/40 transition-colors">
                                <div className="flex text-[#F9A53C] gap-0.5 mb-1 justify-center sm:justify-start">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={14} fill="#F9A53C" strokeWidth={0} />
                                    ))}
                                </div>
                                <p className="text-xs font-bold text-gray-800 text-center sm:text-left whitespace-nowrap">
                                    4.9/5 · <span className="hidden sm:inline">Experience rating</span>
                                    <span className="sm:hidden">Rating</span>
                                </p>
                            </div>

                            <div className="border border-[#F9A53C] max-w-[200px] bg-[#FFE5C2]/20 backdrop-blur-sm  p-3 flex flex-col justify-center flex-1 min-w-0 hover:bg-[#FFE5C2]/40 transition-colors">
                                <p className="text-xs text-gray-500 text-center sm:text-left truncate">Powered by CAPITAIRE</p>
                                <p className="text-xs font-bold text-gray-800 text-center sm:text-left whitespace-nowrap">Consulting CAs</p>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Lead Capture Form Container */}
                    {/* Fades in cleanly with a slight delay so focus hits copy first */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.6, ease: "easeOut" }}
                        className="w-full hidden lg:block lg:col-span-5"
                    >
                        <LeadForm />
                    </motion.div>

                </div>
            </div>
        </section>
    );
}