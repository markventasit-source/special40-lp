import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CertificatesSection() {
    const certificates = [
        {
            src: "/cert1.jpg",
            alt: "SPECIAL40 Internship Program Certificate issued by Capitaire Consultants LLP"
        },
        {
            src: "/cert2.png",
            alt: "Regional Skill Development and Certification Authority National Level Autonomous Body Certificate"
        }
    ];

    const headerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: (i) => ({
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
                delay: i * 0.15  // stagger: card 0 fires first, card 1 follows
            }
        })
    };

    return (
        <section className="w-full font-inter py-12 md:py-16">
            <div className="mx-auto px-4 md:px-8 lg:px-10">

                {/* Header */}
                <motion.div
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-15px" }}
                    className="flex flex-col items-center text-center space-y-3 max-w-2xl mx-auto mb-6 md:mb-16"
                >
                    <motion.span
                        variants={headerVariants}
                        className="text-[#F9A53C] font-md text-sm md:text-[13px] tracking-[0.15em] uppercase block"
                    >
                        Certificates
                    </motion.span>
                    <motion.h2
                        variants={headerVariants}
                        className="text-[#242424] font-bold text-3xl md:text-[44px] md:leading-[52px] tracking-tight"
                    >
                        Course Completion Certificates
                    </motion.h2>
                </motion.div>

                {/* Certificate Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            custom={index}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-15px" }}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3 }
                            }}
                            className="relative w-full group overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
                        >
                            <motion.div
                                className="relative w-full aspect-[4/3] sm:aspect-[1.414] overflow-hidden"
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.4 }}
                            >
                                <Image
                                    src={cert.src}
                                    alt={cert.alt}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-contain object-center transition-transform duration-500 ease-out"
                                    priority={index === 0}
                                />
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}