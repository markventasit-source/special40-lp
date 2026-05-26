import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function ProgramDifference() {
    const [api, setApi] = useState(null);
    const [current, setCurrent] = useState(0);

    const points = [
        {
            title: "Corporate Environment Training",
            desc: "A real office-like learning experience not a classroom.",
            icon: (
                <svg className="w-5 h-5 text-[#F9A53C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
            )
        },
        {
            title: "Live Projects & Case Studies",
            desc: "Practical exposure to actual business finance scenarios.",
            icon: (
                <svg className="w-5 h-5 text-[#F9A53C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2zm0 4h18M7 15h.01M11 15h.01M15 15h.01" />
                </svg>
            )
        },
        {
            title: "CA-Led Mentorship",
            desc: "Guided by Capitaire CAs with 10+ years of corporate experience.",
            icon: (
                <svg className="w-5 h-5 text-[#F9A53C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
            )
        },
        {
            title: "Career Transformation Focus",
            desc: "Outcome-driven not just course completion.",
            icon: (
                <svg className="w-5 h-5 text-[#F9A53C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            )
        },
        {
            title: "Placement-Oriented Learning",
            desc: "Built backwards from what hiring managers actually look for.",
            icon: (
                <svg className="w-5 h-5 text-[#F9A53C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5a2 2 0 10-2 2h2zm0 4h12M4 11h12" />
                </svg>
            )
        },
        {
            title: "Selective Admission",
            desc: "An assessment-based, quality-driven cohort ecosystem.",
            icon: (
                <svg className="w-5 h-5 text-[#F9A53C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
            )
        },
        {
            title: "Professional Identity Building",
            desc: "Communication, presence and corporate confidence.",
            icon: (
                <svg className="w-5 h-5 text-[#F9A53C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
            )
        }
    ];

    const totalSlides = points.length + 1;

    const autoplayPlugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    );

    useEffect(() => {
        if (!api) return;

        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    const gridVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.07,
                delayChildren: 0.05,
            }
        }
    };

    const cellVariants = {
        hidden: { opacity: 0, scale: 0.94 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: [0.25, 0.46, 0.45, 0.94],
            }
        }
    };

    return (
        <section className="w-full bg-white font-inter py-8 md:py-24">
            <div className="mx-auto px-3 md:px-8 lg:px-10">

                {/* Section Title Headers */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-16 items-start mb-16">
                    <div className="lg:col-span-7 flex flex-col space-y-3">
                        <span className="text-[#F9A53C] font-light uppercase
                text-[15px] leading-[100%] tracking-[0.1em]">
                            The Special40 Difference
                        </span>
                        <h2 className="text-[#242424] font-semibold
               text-[32px] leading-[38px] tracking-normal
               md:text-[48px] md:leading-[57px]">
                            Engineered to make you valuable not just employable.
                        </h2>
                    </div>

                    <div className="lg:col-span-5 lg:pt-8">

                        <p className="text-[#555454] font-normal tracking-normal pt-2
              max-[450px]:text-[16px] max-[450px]:leading-[22px]
              min-[451px]:text-[16px] min-[451px]:leading-[24px]">
                            Every element of the program is designed around one outcome: producing finance professionals companies want to retain.
                        </p>
                    </div>
                </div>

                {/* Grid View (Hidden below 450px) */}
                <motion.div
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px 0px" }}
                    className="hidden min-[450px]:grid border border-gray-100 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                >
                    {points.slice(0, 6).map((point, index) => (
                        <motion.div
                            key={index}
                            variants={cellVariants}
                            whileHover={{
                                backgroundColor: "rgba(9, 99, 110, 0.03)",
                                borderColor: "rgba(9, 99, 110, 0.18)",
                            }}
                            transition={{ duration: 0.2 }}
                            className="p-3 md:p-8 border border-gray-50 flex flex-col space-y-3 md:space-y-4 min-h-[180px] md:min-h-[220px] group"
                        >
                            <motion.div
                                whileHover={{ scale: 1.08, rotate: 3 }}
                                transition={{ duration: 0.22, ease: "easeOut" }}
                                className="h-9 w-9 bg-[#FBF4EA] flex items-center justify-center"
                            >
                                {point.icon}
                            </motion.div>
                            <div className="space-y-1.5">
                                <h3 className="text-[#242424] font-md text-[18px] leading-snug">
                                    {point.title}
                                </h3>
                                <p className="text-[#555454] font-normal tracking-normal pt-2
              max-[450px]:text-[16px] max-[450px]:leading-[22px]
              min-[451px]:text-[16px] min-[451px]:leading-[24px]">
                                    {point.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}

                    <motion.div
                        variants={cellVariants}
                        whileHover={{
                            backgroundColor: "rgba(9, 99, 110, 0.03)",
                            borderColor: "rgba(9, 99, 110, 0.18)",
                        }}
                        transition={{ duration: 0.2 }}
                        className="p-3 md:p-8 border border-gray-50 flex flex-col space-y-3 md:space-y-4 min-h-[180px] md:min-h-[220px] group"
                    >
                        <motion.div
                            whileHover={{ scale: 1.08, rotate: 3 }}
                            transition={{ duration: 0.22, ease: "easeOut" }}
                            className="h-9 w-9 bg-[#FBF4EA] flex items-center justify-center"
                        >
                            {points[6].icon}
                        </motion.div>
                        <div className="space-y-1.5">
                            <h3 className="text-[#242424] font-md text-[18px] leading-snug">
                                {points[6].title}
                            </h3>

                            <p className="text-[#555454] font-normal tracking-normal pt-2
              max-[450px]:text-[16px] max-[450px]:leading-[22px]
              min-[451px]:text-[16px] min-[451px]:leading-[24px]">
                                {points[6].desc}
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={cellVariants}
                        className="bg-[#09636E] p-4 md:p-8 flex flex-col justify-between min-h-[160px] md:min-h-[220px] text-white lg:col-span-1"
                    >
                        <div className="space-y-2">
                            <span className="text-[#F9A53C] block font-light uppercase tracking-wider text-[11px]">
                                In Summary
                            </span>
                            <h3 className="text-white font-md text-[22px] leading-tight">
                                A premium ecosystem, not a course catalogue.
                            </h3>
                        </div>
                        <p className="text-[#555454] font-normal tracking-normal pt-2
              max-[450px]:text-[16px] max-[450px]:leading-[22px]
              min-[451px]:text-[16px] min-[451px]:leading-[24px]">
                            Every Batch is selected, mentored and tracked individually.
                        </p>
                    </motion.div>

                    <div className="hidden lg:block p-8 bg-white border-l border-t border-gray-50" />
                </motion.div>

                {/* Mobile Carousel Structure (Visible only below 450px) */}
                <div className="block min-[450px]:hidden w-full">
                    <Carousel
                        setApi={setApi}
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        plugins={[autoplayPlugin.current]}
                        className="w-full"
                        onMouseEnter={autoplayPlugin.current.stop}
                        onMouseLeave={autoplayPlugin.current.reset}
                    >
                        <CarouselContent className="-ml-3">
                            {points.map((point, index) => (
                                <CarouselItem key={index} className="pl-3 basis-[88%] flex">
                                    <div className="w-full p-5 border border-[#E5E5E5] flex flex-col min-h-[190px] bg-white">
                                        <div className="h-9 w-9 bg-[#FBF4EA] flex items-center justify-center shrink-0 mb-4">
                                            {point.icon}
                                        </div>
                                        <div className="space-y-1">
                                            <h3 className="text-[#242424] font-medium text-[16px] leading-snug">
                                                {point.title}
                                            </h3>
                                            <p className="text-[#555454] font-normal text-[13px] leading-relaxed">
                                                {point.desc}
                                            </p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}

                            <CarouselItem className="pl-3 basis-[88%] flex">
                                <div className="w-full bg-[#09636E] p-5 flex flex-col justify-between min-h-[190px] text-white">
                                    <div className="space-y-1">
                                        <span className="text-[#F9A53C] block font-light uppercase tracking-wider text-[10px]">
                                            In Summary
                                        </span>
                                        <h3 className="text-white font-medium text-[17px] leading-tight">
                                            A premium ecosystem, not a course catalogue.
                                        </h3>
                                    </div>
                                    <p className="text-gray-200/90 font-normal text-[12px] leading-relaxed pt-2">
                                        Every Batch is selected, mentored and tracked individually.
                                    </p>
                                </div>
                            </CarouselItem>
                        </CarouselContent>
                    </Carousel>

                    {/* Pagination Progress Indicators */}
                    <div className="flex items-center justify-center gap-2 mt-6">
                        {Array.from({ length: totalSlides }).map((_, index) => (
                            <button
                                key={index}
                                onClick={() => api?.scrollTo(index)}
                                className={`h-1.5 rounded-full transition-all duration-300 ease-out ${current === index
                                    ? "w-5 bg-[#F9A53C]"
                                    : "w-2.5 bg-[#FFE5C2]"
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Green Call-To-Action Button (Strictly below 430px) */}
                    <div className="max-[430px]:flex hidden w-full justify-center mt-6">
                        <button
                            type="button"
                            onClick={() => document.getElementById('assessment-form')?.scrollIntoView({ behavior: 'smooth' })}
                            className="w-full bg-[#09636E] text-white text-sm font-semibold py-3 px-6  text-center shadow-md hover:brightness-110 active:scale-[0.99] transition-all tracking-wide"
                        >
                            Apply for Assessment
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
}