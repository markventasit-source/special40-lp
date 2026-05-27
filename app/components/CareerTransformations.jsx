import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

export default function CareerTransformations() {

    const testimonials = [
        {
            image: "/fazil.png",
            quote: "I came in as a fresh B.Com graduate with no real exposure. By the end of the program I was working on live projects and walked into corporate interviews with genuine confidence.",
            name: "Fazil M",
            role: "Accounts Assistant",
            ctc: "4.5 LPA",
            company: "Kiwis Foods PVT LTD - Tirunelveli"
        },
        {
            image: "/aaron.png",
            quote: "I was stuck in a low-paid accounting role for two years. SPECIAL40 rebuilt my skill set around what companies actually pay for. My role and salary changed within months.",
            name: "Aaron Bijoy",
            role: "Finance Analyst",
            ctc: "4.8 LPA",
            company: "Placed at KPMG - Bangalore"
        },
        {
            image: "/mathew.png",
            quote: "It doesn't feel like a course. It feels like an office. That mindset shift — from student to professional — is what made the real difference for me.",
            name: "Mathew Moothedan",
            role: "Accountant",
            ctc: "4.6 LPA",
            company: "Placed at GuruCompliance - Bangalore"
        }
    ];

    const autoplayPlugin = React.useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    );

    // Animation variants
    const headerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section className="w-full font-inter py-4 md:py-2 overflow-hidden">
            <div className="mx-auto px-3 md:px-8 lg:px-10">

                {/* Centered Header Block */}
                <motion.div
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14 md:mb-20"
                >
                    <motion.span
                        variants={headerVariants}
                        className="text-[#F5A63A] font-md text-xs md:text-[13px] tracking-[0.18em] uppercase mb-4"
                    >
                        Career Transformations
                    </motion.span>

                    <motion.h2
                        variants={headerVariants}
                        className="text-[#1A1A1A] font-semibold text-3xl md:text-[46px] md:leading-[54px] tracking-tight mb-6"
                    >
                        Real students.<br className="hidden sm:inline" /> Real corporate journeys.
                    </motion.h2>

                    <motion.p
                        variants={headerVariants}
                        className="text-[#555454] font-md text-md md:text-[15px] leading-relaxed max-w-xl"
                    >
                        Selected stories from past SPECIAL40 batch professionals who walked in as graduates and walked out as hires.
                    </motion.p>
                </motion.div>

                {/* Testimonials Carousel Container */}
                <motion.div
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="w-full"
                >
                    <Carousel
                        opts={{
                            loop: true,
                            align: "start",
                        }}
                        plugins={[autoplayPlugin.current]}
                        className="w-full"
                        onMouseEnter={autoplayPlugin.current.stop}
                        onMouseLeave={autoplayPlugin.current.reset}
                    >
                        <CarouselContent className="-ml-4 md:-ml-6 lg:-ml-8">
                            {testimonials.map((item, index) => (
                                <CarouselItem
                                    key={index}
                                    className="pl-4 md:pl-6 lg:pl-8 basis-[88%] sm:basis-[70%] md:basis-1/3 flex"
                                >
                                    <motion.div
                                        variants={itemVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, margin: "-50px" }}
                                        whileHover={{
                                            y: -8,
                                            transition: { duration: 0.3 }
                                        }}
                                        className="w-full bg-white border border-[#E5E5E5] flex flex-col overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                                    >
                                        {/* Image Container with explicit background color */}
                                        <motion.div
                                            className="relative w-full aspect-[4/2.4] md:aspect-[1.3] bg-[#FCDCB2] overflow-hidden"
                                            whileHover={{ scale: 1.05 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <Image
                                                src={item.image}
                                                alt={item.name}
                                                fill
                                                className="object-cover object-top transition-transform duration-500 hover:scale-105"
                                                sizes="(max-width: 768px) 85vw, (max-width: 1024px) 33vw, 30vw"
                                            />
                                        </motion.div>

                                        {/* Info & Quote Body */}
                                        <div className="p-3 md:p-6 flex flex-col justify-between flex-grow bg-white">

                                            {/* Quote Section */}
                                            <motion.div
                                                className="mb-8"
                                                initial={{ opacity: 0 }}
                                                whileInView={{ opacity: 1 }}
                                                transition={{ delay: 0.2, duration: 0.5 }}
                                                viewport={{ once: true }}
                                            >
                                                <p className="text-[#2F2F2F] font-light text-sm md:text-[14.5px] leading-[23px]">
                                                    &ldquo;{item.quote}&rdquo;
                                                </p>
                                            </motion.div>

                                            {/* Footer Profiles */}
                                            <motion.div
                                                className="pt-5 border-t border-[#EAEAEA] flex flex-col space-y-2"
                                                initial={{ opacity: 0, y: 20 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3, duration: 0.5 }}
                                                viewport={{ once: true }}
                                            >
                                                <div className="flex justify-between items-baseline gap-2 mb-[-1px]">
                                                    <motion.h4
                                                        className="text-[#0E5C66] font-bold text-base md:text-[17px] tracking-tight truncate"
                                                        whileHover={{ x: 5 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        {item.name}
                                                    </motion.h4>
                                                    <motion.span
                                                        className="text-[#0E5C66] font-bold text-xs md:text-[13px] whitespace-nowrap shrink-0"
                                                        whileHover={{ scale: 1.05 }}
                                                        transition={{ duration: 0.2 }}
                                                    >
                                                        CTC: {item.ctc}
                                                    </motion.span>
                                                </div>

                                                <div className="flex flex-col text-xs text-[#555454] space-y-0.5">
                                                    <span className="font-light mb-2 text-gray-600">
                                                        {item.role}
                                                    </span>
                                                    <span className="text-[11px] text-gray-400 font-normal truncate mt-0.5">
                                                        {item.company}
                                                    </span>
                                                </div>
                                            </motion.div>

                                        </div>
                                    </motion.div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </motion.div>

            </div>
        </section>
    );
}