import React from 'react';
import { motion } from 'framer-motion';
import LeadForm from './LeadForm';

export default function FinalCtaSection() {
    const currentYear = new Date().getFullYear();

    const headerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    const staggerChildren = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.12
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    return (
        <section
            id="assessment-form"
            className="w-full bg-[#09636E] font-inter text-white flex flex-col pt-16 md:pt-24 scroll-mt-20"
        >
            <div className="w-full max-w-7xl mx-auto md:px-12 lg:px-16 pb-16 md:pb-20 flex-grow">

                {/* Header block — children stagger in sequence */}
                <motion.div
                    variants={staggerChildren}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6 mb-12"
                >
                    <motion.span
                        variants={itemVariants}
                        className="text-[#F9A53C] font-md text-xs md:text-[13px] tracking-[0.15em] uppercase block"
                    >
                        Limited Selective Seats Available
                    </motion.span>

                    <motion.h2
                        variants={itemVariants}
                        className="text-white font-semibold text-3xl md:text-[48px] md:leading-[56px] tracking-tight"
                    >
                        Your finance career deserves more than just a degree.
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="text-gray-200/90 font-md text-md md:text-[16px] leading-relaxed max-w-2xl"
                    >
                        Apply now and begin your journey toward becoming a corporate-ready finance professional with Kerala's most selective transformation program.
                    </motion.p>
                </motion.div>

                {/* Form — slides up after header finishes */}
                <motion.div
                    variants={headerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
                    className="w-full max-w-2xl mx-auto"
                >
                    <LeadForm bgColor="bg-[#0D5760]" />
                </motion.div>

            </div>

            {/* Divider — fades in */}
            <motion.div
                className="w-full border-t border-white/10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
            />

            {/* Footer bar — fades up last */}
            <motion.div
                className="w-full mx-auto px-6 md:px-8 lg:px-10 py-6 text-[11px] md:text-xs text-gray-300/80 tracking-wide font-light"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            >
                <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                    <span>© {currentYear} SPECIAL40. All rights reserved.</span>
                    <span className="text-center sm:text-right">
                        Selective admission. Limited seats per Batch
                    </span>
                </div>
            </motion.div>

        </section>
    );
}