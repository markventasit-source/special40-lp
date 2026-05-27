import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SelectionProcess() {
    const steps = [
        {
            stepNum: "STEP 1",
            idNum: "01",
            title: "Initial Enquiry & Career Consultation",
            desc: "Submit your enquiry and meet our team to discuss your career goals, background and ambition."
        },
        {
            stepNum: "STEP 2",
            idNum: "02",
            title: "Online Capability Assessment",
            desc: "A structured test covering finance aptitude, logical reasoning and career seriousness."
        },
        {
            stepNum: "STEP 3",
            idNum: "03",
            title: "Selection & Admission",
            desc: "Qualified candidates receive admission approval and personalised enrolment guidance."
        }
    ];

    // Master container variant for orchestrating the stepped timeline cards
    const stepContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15, // Smooth waterfall effect for steps
            }
        }
    };

    // Animation variant for each sequential step card
    const stepCardVariants = {
        hidden: {
            opacity: 0,
            x: 40
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 70,
                damping: 16,
                duration: 0.6
            }
        }
    };

    return (
        <section className="w-full bg-white font-inter py-8 md:py-10 overflow-hidden">
            {/* Aligns tightly with your master layout grid bounds */}
            <div className="mx-auto px-4 md:px-8 lg:px-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                    {/* Left Column: Animates into place from the left side */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-15px" }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        className="lg:col-span-5 flex flex-col space-y-6"
                    >
                        <div className="space-y-3">
                            <span className="text-[#F9A53C] font-md text-[15px] leading-none tracking-[0.1em] uppercase block">
                                Our Selection Process
                            </span>
                            <h2 className="text-[#242424] font-bold
               text-[32px] leading-[38px] tracking-normal
               md:text-[48px] md:leading-[57px]">
                                Selective by design.
                            </h2>
                        </div>

                        <p className="text-[#555454] font-normal tracking-normal pt-2
              max-[450px]:text-[18px] max-[450px]:leading-[22px]
              min-[451px]:text-[18px] min-[451px]:leading-[24px]">
                            We believe serious career transformation begins with selecting serious candidates. Every seat is earned, not bought.
                        </p>

                        {/* Custom Tag Pill Element */}
                        <div className="self-start">
                            <span className="inline-flex items-center gap-1.5 bg-[#F9A53C] text-white px-4 py-1.5 text-xs font-md uppercase tracking-wider">
                                <span className="w-2 h-2 bg-white rounded-full opacity-90 animate-pulse" />
                                Limited Selective Seats
                            </span>
                        </div>

                        {/* Cohort Working Team Image with subtle scale-up entry */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" }}
                            className="relative w-full h-[240px] md:h-[290px] overflow-hidden shadow-sm mt-4"
                        >
                            <Image
                                src="/selection.png"
                                alt="Candidates working together during selection process"
                                fill
                                className="object-cover"
                            />
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Interactive Process Step Cards triggering sequentially */}
                    <motion.div
                        variants={stepContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-15px" }}
                        className="lg:col-span-7 flex flex-col space-y-2 lg:pt-4"
                    >
                        {steps.map((step, idx) => (
                            <motion.div
                                key={idx}
                                variants={stepCardVariants}
                                whileHover={{
                                    x: 6,
                                    backgroundColor: "rgba(228, 246, 248, 0.3)",
                                    borderColor: "rgba(9, 99, 110, 0.3)"
                                }}
                                className="bg-[#E4F6F8]/10 border border-[#E4F6F8] p-6 px-4 md:px-8 lg:pr-24 flex items-start gap-6 md:gap-8 transition-all duration-300 cursor-pointer"
                            >

                                {/* Large Stylized Identifier */}
                                <div className="min-w-[40px] max-[430px]:hidden">
                                    <span className="text-[#F9A53C]/70 mt-8 font-light text-[32px] md:text-[40px] leading-none block">
                                        {step.idNum}
                                    </span>
                                </div>

                                {/* Step Narrative Details */}
                                <div className="space-y-2">

                                    <span className="text-[#F9A53C] mb-6 text-[13px] font-md tracking-wider uppercase block whitespace-nowrap">
                                        {step.stepNum}
                                    </span>
                                    <h3
                                        className="text-[#09636E] mb-4 leading-none tracking-normal"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: '600',
                                            fontStyle: 'Semi Bold',
                                            fontSize: '24px',
                                            lineHeight: '130%',
                                            letterSpacing: '0%',
                                            '@media (min-width: 768px)': {
                                                fontWeight: '700',
                                                fontStyle: 'Bold',
                                                fontSize: '26px',
                                            }
                                        }}
                                    >
                                        {step.title}
                                    </h3>

                                    <p
                                        className="text-[#555454] tracking-normal"
                                        style={{
                                            fontFamily: 'Inter',
                                            fontWeight: '400',
                                            fontStyle: 'Regular',
                                            fontSize: '18px',
                                            lineHeight: '22px',
                                            letterSpacing: '0%',
                                        }}
                                    >
                                        {step.desc}
                                    </p>

                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                </div>

            </div>
        </section>
    );
}