import React from 'react';
import { motion } from 'framer-motion';

export default function TransformationJourney() {
    const modules = [
        { id: "01", name: "Practical Accounting", tag: "TECHNICAL SKILLS" },
        { id: "02", name: "GST & Income Tax - Practical Training", tag: "COMPLIANCE" },
        { id: "03", name: "VAT, Zakat, Customs & Excise", tag: "COMPLIANCE" },
        { id: "04", name: "Corporate Financial Reporting - P&L, B/S, Cashflow Statement", tag: "REPORTING" },
        { id: "05", name: "ERP, MIS, Ratios & other Financial Tools", tag: "ANALYTICS" },
        { id: "06", name: "Business Structure, Banking System and Payroll Compliance", tag: "STRUCTURE" },
        { id: "07", name: "Business Communication and Office Etiquettes", tag: "SOFT SKILLS" },
        { id: "08", name: "Interview and Aptitude Training", tag: "PROFESSIONALISM" },
        { id: "09", name: "Live Projects-Development and Presentation", tag: "CORPORATE READINESS" },
    ];

    // Left Column Content Animations
    const leftContainerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.05
            }
        }
    };

    const leftItemVariants = {
        hidden: { opacity: 0, y: 25 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const pricingBoxVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } // Elegant custom cubic-bezier pop
        }
    };

    return (
        <section className="w-full bg-[#FBF4EA] font-inter py-16 md:py-24">
            <div className="mx-auto px-3 md:px-8 lg:px-10">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">

                    {/* Left Column - Staggered Slide In */}
                    <motion.div
                        variants={leftContainerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 md:space-y-8"
                    >
                        <motion.div variants={leftItemVariants} className="space-y-3">
                            <span className="text-[#F9A53C] font-md text-[15px] leading-none tracking-[0.1em] uppercase block">
                                The Transformation Journey
                            </span>
                            <h2 className="text-[#242424] font-semibold
               text-[32px] leading-[38px] tracking-normal
               md:text-[48px] md:leading-[57px]">
                                4.5 months. Intensive. Built like a corporate finance function.
                            </h2>
                        </motion.div>

                        <motion.p variants={leftItemVariants}
                            className="text-[#555454] font-normal tracking-normal
                     text-[16px] leading-[22px]
                     md:leading-[24px]">
                            The SPECIAL40 curriculum mirrors the real workflow inside a modern finance team from practical accounting and ERP tooling to corporate communication, GST compliance and live business projects.
                        </motion.p>

                        <motion.div variants={leftItemVariants}>
                        <button
    onClick={() =>
        document
            .getElementById('assessment-form')
            ?.scrollIntoView({ behavior: 'smooth' })
    }
    className="
        bg-[#F9A53C]
        text-white
        px-6
        py-3.5
        hover:bg-[#e0912f]
        transition-colors
        shadow-sm
        w-full
        sm:w-auto
        font-inter
        tracking-normal

        text-[20px]
        font-semibold
        leading-[100%]

        md:text-[16px]
        md:font-medium
    "
>
    Apply for Assessment
</button>
                        </motion.div>

                        {/* Pricing Box - Pop up entry */}
                        <motion.div
                            variants={pricingBoxVariants}
                            className="bg-[#09636E] md:max-w-110 p-8 text-white relative overflow-hidden shadow-md"
                        >
                            {/* Desktop: top-right corner */}
                            <div className="hidden md:block absolute top-4 right-4 bg-white text-[#09636E] text-[13px] font-normal tracking-normal uppercase px-2 py-1 leading-none">
                                Easy EMI Available
                            </div>

                            <div className="space-y-1 mt-6">
                                <span className="text-[#F9A53C] line-through opacity-80 block leading-none uppercase font-extralight text-[34px] md:text-[48px] mb-4 tracking-normal">
                                    ₹85,000
                                </span>
                                <span className="text-white block leading-none uppercase font-bold text-[52px] md:text-[70px] tracking-normal">
                                    ₹40,000
                                </span>
                                <span className="text-gray-300 text-xs block pt-1">
                                    + GST applicable
                                </span>
                            </div>

                            {/* Mobile: below GST text */}
                            <div className="block md:hidden mt-4">
                                <div className="bg-white text-[#09636E] text-[13px] font-normal tracking-normal uppercase px-2 py-1 leading-none inline-block">
                                    Easy EMI Available
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Column: Curriculum */}
                    <div className="lg:col-span-7 bg-white border border-[#F9A53C]/30 p-3 md:p-10 shadow-sm">

                        <div className="flex flex-col sm:flex-row sm:items-center justify-between items-center border-b border-gray-100 pb-5 mb-2 gap-4">
                            <h3 className="text-[#09636E] font-bold capitalize tracking-normal
               max-[450px]:text-[26px] max-[450px]:leading-[100%]
               min-[451px]:text-[26px] min-[451px]:leading-[100%]">
                                Curriculum Modules
                            </h3>
                            <div className="flex items-center gap-3 text-[11px] font-light tracking-wider uppercase">
                                <span className="bg-[#FBF4EA] text-[#F9A53C] px-2.5 py-1 font-semibold
                 text-[13px] leading-[24px] tracking-normal">
                                    Offline • 2.5 Months
                                </span>
                                <span className="bg-[#FBF4EA] text-[#F9A53C] px-2.5 py-1 font-semibold
                 text-[13px] leading-[24px] tracking-normal">
                                    Online • 2 Months
                                </span>
                            </div>
                        </div>

                        <motion.div
                            className="flex flex-col"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px 0px" }}
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: {
                                        staggerChildren: 0.06,
                                        delayChildren: 0.1,
                                    }
                                }
                            }}
                        >
                            {modules.map((mod) => (
                                <motion.div
                                    key={mod.id}
                                    variants={{
                                        hidden: { opacity: 0, x: 40 },
                                        visible: {
                                            opacity: 1,
                                            x: 0,
                                            transition: {
                                                duration: 0.45,
                                                ease: [0.25, 0.46, 0.45, 0.94],
                                            }
                                        }
                                    }}
                                    whileHover={{ x: 6, backgroundColor: "rgba(249, 165, 60, 0.04)" }}
                                    transition={{ duration: 0.2 }}
                                    className="py-4 border-b border-[#EEBE7E] last:border-0 transition-colors px-1 cursor-pointer"
                                >
                                    {/* Mobile: stacked layout */}
                                    <div className="flex items-start gap-3 sm:hidden">
                                        <span className="text-[#F9A53C] font-normal uppercase
                text-[15px] leading-[100%] tracking-[0.1em]
                min-w-[24px]">
                                            {mod.id}
                                        </span>
                                        <div className="flex flex-col space-y-1">
                                            <span className="text-[#242424] capitalize tracking-normal
                max-[450px]:text-[21px] max-[450px]:leading-snug
                min-[451px]:text-[18px] min-[451px]:leading-snug">
                                                {mod.name}
                                            </span>
                                            <span className="text-gray-400 font-normal uppercase
                text-[13px] leading-[100%] tracking-[0.11em]">
                                                {mod.tag}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Tablet+: original grid layout */}
                                    <div className="hidden sm:grid grid-cols-12 items-center">
                                        <div className="col-span-1 text-[#F9A53C] font-light text-sm md:text-base">
                                            {mod.id}
                                        </div>
                                        <div className="col-span-8 pr-4 text-[#242424] font-light text-sm md:text-[15px] leading-snug">
                                            {mod.name}
                                        </div>
                                        <div className="col-span-3 text-right text-gray-400 font-normal text-[10px] md:text-[11px] tracking-widest uppercase whitespace-nowrap">
                                            {mod.tag}
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>

                </div>

            </div>
        </section>
    );
}