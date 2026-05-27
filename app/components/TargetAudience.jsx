import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function TargetAudience() {
    const cards = [
        {
            num: "01",
            title: "Final Year B.Com Students",
            pain: "Unsure how to enter the corporate finance world after graduation.",
            trans: "Graduate already trained and placement-ready.",
            outcome: "Step into a corporate finance role straight out of college."
        },
        {
            num: "02",
            title: "Fresh B.Com Graduates",
            pain: "Stuck in low-paid clerical accounting jobs with no growth path.",
            trans: "Build practical exposure and a professional identity.",
            outcome: "Move into structured finance roles with real career growth."
        },
        {
            num: "03",
            title: "Trapped Under ₹30k/Month",
            pain: "Stuck in same salary for years, no real corporate skill upgrade in years.",
            trans: "Rebuild capability around what companies actually pay for.",
            outcome: "Reposition for higher-paying, higher-responsibility finance roles."
        },
        {
            num: "04",
            title: "ACCA/CMA Students Lacking Practical Exposure",
            pain: "Theoretically strong but lacking practical exposure that companies demand.",
            trans: "Gain industry-relevant practical exposure, mentorship, and career guidance.",
            outcome: "A serious, long-term professional finance trajectory."
        },
        {
            num: "05",
            title: "Career-Oriented Finance Aspirants",
            pain: "Want corporate finance careers but don't know where to begin.",
            trans: "Curated curriculum, mentorship and industry pathways.",
            outcome: "A serious, long-term professional finance trajectory."
        },
        {
            num: "06",
            title: "Theoretically Strong, Practically Weak",
            pain: "Top of the class, but lacking real-world business confidence.",
            trans: "Train in live corporate environments with real case work.",
            outcome: "Enter the market with the confidence of an experienced hire."
        }
    ];

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.08,
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.55,
                ease: [0.215, 0.61, 0.355, 1],
            }
        }
    };

    return (
        <section className="w-full mt-10 bg-white font-inter py-8 md:py-16 lg:py-24">
            {/* Shared layout width container */}
            <div className="mx-auto px-4 md:px-8 lg:px-10">

                {/* Top Split Header */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start mb-16">
                    <div className="lg:col-span-7 flex flex-col space-y-3">
                        <span className="text-[#F9A53C] uppercase font-normal
                max-[450px]:text-[15px] max-[450px]:leading-[100%] max-[450px]:tracking-[0.1em]
                min-[451px]:text-[15px] min-[451px]:leading-[100%] min-[451px]:tracking-[0.1em]">
                            Who Should Apply
                        </span>
                        <h2 className="text-[#242424] font-semibold tracking-normal max-w-xl
               max-[450px]:text-[32px] max-[450px]:leading-[38px]
               min-[451px]:text-[48px] min-[451px]:leading-[57px]">
                            Built for serious commerce graduates ready for a real career.
                        </h2>
                    </div>

                    <div className="lg:col-span-5 lg:pt-8">
                        <p className="text-[#555454] font-normal tracking-normal
              max-[450px]:text-[18px] max-[450px]:leading-[22px]
              min-[451px]:text-[18px] min-[451px]:leading-[24px]">
                            SPECIAL40 selects ambitious individuals who want more than a job—they want a professional finance identity.
                        </p>
                    </div>
                </div>

                {/* 6-Card Presentation Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-15px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-4 lg:gap-6"
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            variants={cardVariants}
                            whileHover={{
                                y: -6,
                                boxShadow: "0 12px 30px -10px rgba(249, 165, 60, 0.14)",
                                borderColor: "rgba(249, 165, 60, 0.35)",
                                backgroundColor: "rgba(251, 244, 234, 0.8)",
                            }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                            className="bg-[#FBF4EA]/50 p-6 md:p-8 flex flex-col md:space-y-5 border border-transparent transition-colors cursor-pointer"
                        >
                            {/* Card Numbering & Heading */}
                            <div className="space-y-2">
                                <span className="text-[#F9A53C] block font-light
                text-[26px] leading-[100%] tracking-normal">
                                    {card.num}
                                </span>
                                <h3 className="text-[#242424] mb-4 font-semibold tracking-normal
               max-[450px]:text-[21px] max-[450px]:leading-[150%]
               min-[451px]:text-[26px] min-[451px]:leading-[120%]
               min-h-[56px] flex items-start">
                                    {card.title}
                                </h3>
                            </div>

                            {/* Data Rows Content Split */}
                            <div className="space-y-4 text-xs md:text-[13px] leading-relaxed flex-grow">
                                {/* Pain Block */}
                                <div className="space-y-1">
                                    <span className="text-[#09636E] block uppercase font-normal tracking-[0.1em]
                max-[450px]:text-[15px] max-[450px]:leading-[100%]
                min-[451px]:text-[15px] min-[451px]:leading-[100%]">
                                        Current Pain
                                    </span>
                                    <p className="text-[#555454] font-normal tracking-normal
              max-[450px]:text-[18px] max-[450px]:leading-[28px]
              min-[451px]:text-[18px] min-[451px]:leading-[30px]">
                                        {card.pain}
                                    </p>
                                </div>

                                {/* Transformation Block */}
                                <div className="space-y-1">
                                    <span className="text-[#09636E] block uppercase font-normal tracking-[0.1em]
                max-[450px]:text-[15px] max-[450px]:leading-[100%]
                min-[451px]:text-[15px] min-[451px]:leading-[100%]">
                                        Transformation
                                    </span>
                                    <p className="text-[#555454] font-normal tracking-normal
              max-[450px]:text-[18px] max-[450px]:leading-[28px]
              min-[451px]:text-[18px] min-[451px]:leading-[30px]">
                                        {card.trans}
                                    </p>
                                </div>

                                {/* Outcome Block (Utilizing your new #FF383C hex color assignment) */}
                                <div className="space-y-1">
                                    <span className="text-[#FF383C] block uppercase font-normal tracking-[0.1em]
                max-[450px]:text-[15px] max-[450px]:leading-[100%]
                min-[451px]:text-[15px] min-[451px]:leading-[100%]">
                                        Career Outcome
                                    </span>
                                    <p className="text-[#555454] font-normal tracking-normal
              max-[450px]:text-[18px] max-[450px]:leading-[28px]
              min-[451px]:text-[18px] min-[451px]:leading-[30px]">
                                        {card.outcome}
                                    </p>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </motion.div>

                {/* Green Call-To-Action Button (Strictly below 430px) */}
                <div className="max-[430px]:flex hidden w-full justify-center mt-6">
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
                            md:py-3.5
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
                </div>

            </div>
        </section>
    );
}