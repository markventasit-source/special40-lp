import React from 'react';
import { motion, useInView } from 'framer-motion';

export default function PlacementSupport() {
    const stats = [
        { value: "100%", label: "Placement Support" },
        { value: "40", label: "Seats per Batch" },
        { value: "10+ yrs", label: "Mentor experience" }
    ];

    const features = [
        "Interview preparation",
        "Resume guidance",
        "Career mentorship",
        "Mock interviews",
        "Industry readiness",
        "Placement assistance"
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

    const statVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const featureVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, ease: "easeOut" }
        }
    };

    return (
        <section className="w-full relative min-h-[500px] md:min-h-[600px] lg:min-h-[680px] flex items-center font-inter overflow-hidden">

            {/* Background Image with fade-in */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{ backgroundImage: `url('/bgo.png')` }}
            />

            {/* Layer 1: Teal color tint */}
            <div
                className="absolute inset-0 z-[5]"
                style={{ backgroundColor: '#09636E', opacity: 0.05 }}
            />

            {/* Layer 2: Mobile — full solid overlay for legibility */}
            <div
                className="absolute inset-0 z-[6] md:hidden"
                style={{ backgroundColor: '#09636E', opacity: 0.92 }}
            />

            {/* Layer 3: Tablet/Desktop — left-to-right gradient with slide animation */}
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="absolute inset-0 z-[6] hidden md:block"
                style={{ background: 'linear-gradient(to right, #09636E 30%, #09636E99 55%, #09636E44 75%, transparent 100%)' }}
            />

            {/* Main Content */}
            <div className="w-full px-4 md:px-8 lg:px-10 relative z-20 py-12 md:py-16 lg:py-24">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
                >
                    <div className="col-span-1 lg:col-span-8 space-y-6 md:space-y-8">

                        {/* Header */}
                        <motion.div variants={itemVariants} className="space-y-3">
                            <motion.span
                                variants={itemVariants}
                                className="text-[#F9A53C] font-md text-xs md:text-[13px] tracking-[0.15em] uppercase block"
                            >
                                Placement Support
                            </motion.span>
                            <motion.h2
                                variants={itemVariants}
                                className="
        text-white
        font-semibold
        font-inter
        tracking-normal
        max-w-2xl

        max-[450px]:text-[32px]
        max-[450px]:leading-[36px]

        min-[451px]:text-[48px]
        min-[451px]:leading-[57px]
    "
                            >
                                100% placement support engineered into the program.
                            </motion.h2>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            variants={itemVariants}
                            className="
        text-gray-200/90
        font-normal
        font-inter
        tracking-normal
        max-w-xl

        text-[18px]
        leading-[28px]

        md:leading-[30px]
    "
                        >
                            Placement isn't a separate service we sell. It is the outcome the entire SPECIAL40 program is built around from selection to mentorship to live project exposure.
                        </motion.p>

                        {/* Stats */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap items-center gap-x-6 md:gap-x-10 gap-y-4 pt-2 border-b border-white/10 pb-6"
                        >
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={statVariants}
                                    whileHover={{ scale: 1.05, y: -5 }}
                                    transition={{ duration: 0.2 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="flex flex-col">
                                        <motion.span
                                            className="text-[#F9A53C] font-medium text-2xl md:text-3xl lg:text-[40px] leading-none"
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                                            viewport={{ once: true }}
                                        >
                                            {stat.value}
                                        </motion.span>
                                        <span className="
        text-gray-200/90
        font-normal
        font-inter
        tracking-normal
        max-w-xl

        text-[18px]
        leading-[28px]

        md:leading-[30px]
    "
                                        >
                                            {stat.label}
                                        </span>
                                    </div>
                                    {idx < stats.length - 1 && (
                                        <div className="hidden sm:block h-8 w-[1px] bg-white/20 ml-4 md:ml-6" />
                                    )}
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Features */}
                        <motion.div
                            variants={itemVariants}
                            className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-3 pt-2"
                        >
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    variants={featureVariants}
                                    whileHover={{
                                        scale: 1.02,
                                        backgroundColor: "rgba(255,255,255,0.15)",
                                        transition: { duration: 0.2 }
                                    }}
                                    className="bg-white/10 backdrop-blur-sm border border-white/10 py-3 px-4 flex items-center gap-3"
                                >
                                    <motion.div
                                        className="w-5 h-5 bg-[#F9A53C] rounded-full flex items-center justify-center flex-shrink-0"
                                        whileHover={{ scale: 1.2, rotate: 90 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </motion.div>
                                    <span className="
        text-gray-200/90
        font-normal
        font-inter
        tracking-normal
        max-w-xl

        text-[18px]
        leading-[28px]

        md:leading-[30px]
    ">
                                        {feature}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>

                    </div>

                    <div className="hidden lg:block col-span-1 lg:col-span-4" />

                </motion.div>
            </div>
        </section>
    );
}