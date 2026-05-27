import React from 'react';
import { motion } from 'framer-motion';

export default function OutcomeComparison() {
    const beforePoints = [
        "No Practical Skills",
        "Confused Graduate",
        "Low Confidence",
        "Low Salaried Jobs"
    ];

    const afterPoints = [
        "Corporate-Ready Finance Professional",
        "Strong Practical Exposure",
        "Interview Confidence",
        "High-Growth Finance Opportunities",
        "Professional Identity & Clear Career Path"
    ];

    // Card Side Entry Keyframe Variants
    const leftCardVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const arrowVariants = {
        hidden: { opacity: 0, scale: 0.7 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { type: "spring", stiffness: 200, delay: 0.3 }
        }
    };

    const rightCardVariants = {
        hidden: { opacity: 0, x: 30, y: 10 },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }
        }
    };

    return (
        <section className="w-full bg-white font-inter py-12 md:py-24 overflow-hidden">
            {/* Container matches exact layout constraints */}
            <div className="mx-auto px-4 md:px-8 lg:px-10">

                {/* Header Sequence */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-15px" }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col items-center text-center space-y-3 max-w-3xl mx-auto mb-16"
                >
                    <span className="text-[#F9A53C] font-md text-[15px] leading-none tracking-[0.1em] uppercase">
                        Outcome
                    </span>
                    <h2 className="text-[#242424] px-6 font-bold text-3xl md:text-[40px] md:leading-[46px] tracking-normal max-w-150">
                        Become industry-ready. Become irreplaceable.
                    </h2>
                </motion.div>

                {/* Before vs After Comparison Grid Block */}
                <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-8 mx-auto mb-8">

                    {/* Left Card: Before State */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-15px" }}
                        variants={leftCardVariants}
                        className="w-full lg:flex-1 bg-[#FBF4EA]/60  p-8 md:p-10 flex flex-col justify-start border border-transparent"
                    >
                        <span className="text-[#555454] font-normal tracking-[0.1em] uppercase text-[15px] leading-none block mb-8">
                            Before Special40
                        </span>
                        <ul className="flex flex-col flex-grow w-full justify-between">
                            {beforePoints.map((point, index) => (
                                <li
                                    key={index}
                                    className="text-[#242424] font-medium text-lg py-4 flex items-center gap-3 w-full border-b border-[#F9A53C]/40 last:border-0 capitalize leading-none"
                                >
                                    <span className="w-1.5 h-1.5 bg-[#242424] rounded-full flex-shrink-0" />
                                    <span className="flex-1">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Central Connecting Arrow */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-15px" }}
                        variants={arrowVariants}
                        className="flex-shrink-0 bg-[#F9A53C] text-white w-12 h-12 flex items-center justify-center shadow-sm my-2 lg:my-0 transform rotate-90 lg:rotate-0 self-center"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                    </motion.div>

                    {/* Right Card: After State (Higher pop intensity) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-15px" }}
                        variants={rightCardVariants}
                        whileHover={{ y: -3, transition: { duration: 0.2 } }}
                        className="w-full lg:flex-1 bg-[#09636E] p-8 md:p-10 flex flex-col justify-start text-white shadow-md border border-transparent cursor-default"
                    >
                        <span className="text-[#F9A53C] font-normal uppercase text-[15px] leading-none tracking-[0.1em] block mb-8">
                            After Special40
                        </span>
                        <ul className="flex flex-col flex-grow w-full justify-between">
                            {afterPoints.map((point, index) => (
                                <li
                                    key={index}
                                    className="text-white font-medium text-lg py-4 flex items-center gap-3 w-full border-b border-[#1E818D] last:border-0 capitalize leading-snug"
                                >
                                    <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                                    <span className="flex-1">{point}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                </div>

                {/* Bottom Core Statement Quote Block */}
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-15px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                    className="md:mt-16 md:ml-24 pl-6"
                >
                    <blockquote className="text-[#F9A53C] italic font-normal tracking-normal max-w-200
                      max-[450px]:text-[26px] max-[450px]:leading-[33px]
                      min-[451px]:text-[32px] min-[451px]:leading-[43px]">
                        &ldquo;The goal is not just getting a job. The goal is becoming valuable enough that companies want to retain you.&rdquo;
                    </blockquote>
                </motion.div>

            </div>
        </section>
    );
}