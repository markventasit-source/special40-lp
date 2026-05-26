import React from 'react';
import { motion } from 'framer-motion';

export default function TheProblem() {
    const issues = [
        {
            num: "Issue · 01",
            title: "No practical finance exposure",
            desc: "Years of theory but never inside a real finance function."
        },
        {
            num: "Issue · 02",
            title: "Low-salary accounting roles",
            desc: "Entry roles plateau quickly with no clear growth path."
        },
        {
            num: "Issue · 03",
            title: "Interview fear",
            desc: "Candidates freeze when asked about real business scenarios."
        },
        {
            num: "Issue · 04",
            title: "No corporate confidence",
            desc: "Lack of professional polish, communication and presence."
        },
        {
            num: "Issue · 05",
            title: "No industry readiness",
            desc: "Tools, processes and reporting standards are unfamiliar."
        },
        {
            num: "Issue · 06",
            title: "No career direction",
            desc: "Drifting between unrelated roles with no compounding skill."
        },
        {
            num: "Issue · 07",
            title: "Theory-only education",
            desc: "Curriculum built for exams, not for corporate finance."
        }
    ];

    // Animation variants for the container to orchestrate children (staggering)
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.1, // Delays the next card animation by 0.1s
            },
        },
    };

    // Animation variants for individual cards
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 30
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 60,
                damping: 15,
                duration: 0.6
            }
        },
    };

    return (
        <section className="w-full bg-[#09636E] font-inter py-16 md:py-24 text-white overflow-hidden">
            {/* Container aligned with all previous landing page sections */}
            <div className="mx-auto px-3 md:px-8 lg:px-10">

                {/* Top Centered Header Area - Animates smoothly on scroll */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="flex flex-col items-center text-center space-y-4 max-w-3xl mx-auto mb-16"
                >
                    <span className="text-[#F9A53C] font-light text-[15px] leading-none tracking-[0.1em] uppercase">
                        The Problem
                    </span>
                    <h2 className="text-white font-semibold
               text-[32px] leading-[38px] tracking-normal
               md:text-[48px] md:leading-[57px]">
                        Why most commerce graduates struggle in the job market.
                    </h2>
                    <p className="text-gray-200/90 font-normal tracking-normal pt-2
              max-[450px]:text-[16px] max-[450px]:leading-[22px]
              min-[451px]:text-[16px] min-[451px]:leading-[24px]">
                        The gap between what is taught in classrooms and what companies actually need has
                        widened sharply. SPECIAL40 was built to close it deliberately and selectively.
                    </p>
                </motion.div>

                {/* Asymmetric Problem Grid — Controls staggering */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {issues.map((issue, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                scale: 1.02,
                                backgroundColor: "rgba(7, 79, 88, 0.8)",
                                borderColor: "rgba(255, 255, 255, 0.25)"
                            }}
                            className="bg-[#42878F]/20 border border-white/10 p-6 md:p-8 flex flex-col space-y-3 transition-colors cursor-pointer"
                        >
                            {/* Issue Number Subheading */}
                            <span className="text-[#F9A53C] font-light uppercase
                text-[15px] leading-[100%] tracking-[0.1em]">
                                {issue.num}
                            </span>

                            {/* Issue Heading and Description */}
                            <div className="space-y-2">
                                <h3 className="text-white font-md text-[22px] leading-tight tracking-tight">
                                    {issue.title}
                                </h3>
                                <p className="text-gray-200/90 font-normal tracking-normal pt-2
              max-[450px]:text-[16px] max-[450px]:leading-[22px]
              min-[451px]:text-[16px] min-[451px]:leading-[24px]">
                                    {issue.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}