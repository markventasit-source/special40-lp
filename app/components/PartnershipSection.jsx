import React from 'react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export default function PartnershipSection() {

    const highlights = [
        { title: "Trusted", desc: "Finance & advisory experts" },
        { title: "Real", desc: "Business consultants" },
        { title: "10+ yrs", desc: "Industry expertise" }
    ];

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const highlightVariants = {
        hidden: { opacity: 0, scale: 0.9 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const imageVariants = {
        hidden: { opacity: 0, x: 50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };

    const overlayVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: 0.6, ease: "easeOut" }
        }
    };

    return (
        <section className="w-full mt-6 bg-white font-inter py-10 md:py-24 overflow-hidden">

            <div className="mx-auto px-4 md:px-8 lg:px-10">

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-15px" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-stretch"
                >
                    {/* Left Column */}
                    <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col justify-between space-y-4 md:space-y-6 h-full">

                        {/* Heading */}
                        <div className="space-y-3">
                            <motion.span
                                variants={itemVariants}
                                className="text-[#F9A53C] font-md text-[15px] leading-none tracking-[0.1em] uppercase block"
                            >
                                Powered by Industry Expertise
                            </motion.span>

                            <motion.h2
                                variants={itemVariants}
                                className="text-[#242424] font-bold text-3xl md:text-[48px] md:leading-[57px] tracking-normal"
                            >
                                In partnership with <span className="text-[#F9A53C]">CAPITAIRE.</span>
                            </motion.h2>
                        </div>

                        {/* Description */}
                        <motion.div
                            variants={itemVariants}
                            className="space-y-3 md:space-y-4 text-[#555454] tracking-normal"
                            style={{
                                fontFamily: 'Inter',
                                fontWeight: '400',
                                fontSize: '18px',
                                lineHeight: '26px',
                                letterSpacing: '0%'
                            }}
                        >
                            <p>
                                Capitaire is a trusted finance and advisory firm of experienced Chartered Accountants and real business consultants with over a decade of industry experience.
                            </p>

                            <p>
                                SPECIAL40 students learn directly from professionals who understand real business finance—how decisions are made, how risks are evaluated, and what corporate India actually expects from a finance team.
                            </p>
                        </motion.div>

                        {/* Highlights */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 pt-1 md:pt-2"
                        >
                            {highlights.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={highlightVariants}
                                    whileHover={{
                                        scale: 1.03,
                                        y: -5,
                                        boxShadow: "0 10px 25px -5px rgba(0,0,0,0.1)",
                                        transition: { duration: 0.2 }
                                    }}
                                    className={`border border-gray-100 p-3 md:p-4 flex flex-col justify-between min-h-[90px] md:min-h-[100px] bg-white shadow-xs ${highlights.length === 3 && idx === 2 ? 'col-span-2 md:col-span-1' : ''
                                        }`}
                                >
                                    <motion.span
                                        className="text-[#09636E] block"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: '600',
                                            fontStyle: 'Semi Bold',
                                            fontSize: '21px',
                                            lineHeight: '100%',
                                            letterSpacing: '0%',
                                        }}
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {item.title}
                                    </motion.span>
                                    <span
                                        className="text-[#555454] block mt-2"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: '400',
                                            fontStyle: 'Regular',
                                            fontSize: '14px',
                                            lineHeight: '15px',
                                            letterSpacing: '0%',
                                        }}
                                    >
                                        {item.desc}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTA - Full width on mobile with arrow icon */}
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            className="pt-1 md:pt-2"
                        >
                            <button
                                onClick={() =>
                                    document
                                        .getElementById('assessment-form')
                                        ?.scrollIntoView({ behavior: 'smooth' })
                                }
                                className="
        bg-[#09636E]
        text-white
        px-5
        md:px-6
        py-5
        md:py-4
        hover:bg-[#074f58]
        transition-colors
        shadow-sm
        w-full
        sm:w-auto
        inline-flex
        items-center
        justify-center
        whitespace-nowrap
        gap-2
        font-inter
        tracking-normal

        text-[18px]
        font-semibold
        leading-[100%]

        md:text-[18px]
        md:font-medium
    "
                            >
                                <span>Apply for Assessment</span>
                                <ArrowRight className="shrink-0" size={18} />
                            </button>
                        </motion.div>

                    </motion.div>

                    {/* Right Column */}
                    <motion.div
                        variants={imageVariants}
                        className="lg:col-span-7 relative w-full min-h-[280px] sm:min-h-[380px] md:min-h-[460px] h-full  overflow-hidden shadow-sm"
                    >
                        {/* Main Image */}
                        <Image
                            src="/classroom.jpg"
                            alt="Capitaire corporate finance classroom training environment"
                            fill
                            className="object-cover object-center"
                            priority
                        />

                        {/* Floating Overlay */}
                        <motion.div
                            variants={overlayVariants}
                            whileHover={{ scale: 1.05, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute bottom-4 md:bottom-6 right-4 md:right-6 max-w-[190px] md:max-w-[210px] bg-[#242424]/70 backdrop-blur-md border border-white/10 text-white p-3 md:p-4  shadow-xl"
                        >
                            <motion.span
                                className="text-[#F9A53C] text-[10px] font-bold tracking-wider uppercase block mb-1"
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                Mentorship
                            </motion.span>

                            <p className="text-gray-200 text-[11px] md:text-xs font-normal leading-normal">
                                Learn from those who have done it.
                            </p>
                        </motion.div>

                    </motion.div>

                </motion.div>

            </div>

        </section>
    );
}