import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "Who Can Apply To SPECIAL40?",
            answer: "Final year B.Com students, fresh commerce graduates, and working finance/accounting professionals (especially those earning below ₹25k–₹30k/month) who are serious about a corporate finance career."
        },
        {
            question: "Is This Practical Or Theoretical?",
            answer: "SPECIAL40 is built around practical, corporate-grade training — live projects, ERP tools, GST compliance, real case work and corporate communication. Theory is only used to support practice."
        },
        {
            question: "Is Placement Support Included?",
            answer: "Yes. 100% placement support is engineered into the program — including interview preparation, resume guidance, mock interviews, mentorship and placement assistance."
        },
        {
            question: "Why Is There An Assessment Process?",
            answer: "We believe serious career transformation begins with serious candidates. The assessment ensures every cohort is composed of focused, capable individuals ready to commit."
        },
        {
            question: "What Makes SPECIAL40 Different From Other Finance Courses?",
            answer: "SPECIAL40 is not a coaching center or Tally class. It is a selective, mentor-led transformation ecosystem powered by Capitaire — designed around career outcomes, not course completion."
        },
        {
            question: "Is This Suitable For Fresh Graduates With Zero Experience?",
            answer: "Yes. The program is specifically structured to take ambitious fresh graduates and convert them into corporate-ready finance professionals within 3.5 months."
        },
        {
            question: "Will I Work On Live Projects?",
            answer: "Yes — live projects and real case studies are a core part of the program. You will not graduate without practical, business-grade exposure."
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

    const faqItemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.45,
                ease: "easeOut",
                delay: i * 0.07
            }
        })
    };

    return (
        <>
            <section className="w-full bg-[#FAF9F6] font-inter py-12 md:py-16">
                <div className="mx-auto px-4 md:px-8 lg:px-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

                        {/* Left Header */}
                        <motion.div
                            variants={headerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-15px" }}
                            className="lg:col-span-5 space-y-4 lg:sticky lg:top-12"
                        >
                            <motion.span
                                variants={headerVariants}
                                className="text-[#F9A53C] font-md text-sm md:text-[13px] tracking-[0.15em] uppercase block"
                            >
                                Frequently Asked
                            </motion.span>
                            <motion.h2
                                variants={headerVariants}
                                className="text-[#242424] font-bold text-3xl md:text-[44px] md:leading-[52px] tracking-tight max-w-sm"
                            >
                                Answers, mostly asked
                            </motion.h2>
                            <motion.p
                                variants={headerVariants}
                                className="text-[#555454] font-md text-md md:text-[18px] leading-relaxed max-w-xs pt-2"
                            >
                                Still unsure? Reach out and we&apos;ll discuss whether you are a right fit for the program or not.
                            </motion.p>
                        </motion.div>

                        {/* Right Accordion */}
                        <motion.div
                            className="lg:col-span-7 border-t border-gray-200"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-15px" }}
                        >
                            {faqData.map((faq, idx) => {
                                const isOpen = openIndex === idx;

                                return (
                                    <motion.div
                                        key={idx}
                                        custom={idx}
                                        variants={faqItemVariants}
                                        className="border-b border-gray-200"
                                    >
                                        <button
                                            onClick={() => toggleFaq(idx)}
                                            className="w-full py-5 md:py-6 flex items-center justify-between gap-6 text-left group outline-none"
                                            aria-expanded={isOpen}
                                        >
                                            <motion.span
                                                className="text-[#242424] font-semibold text-md md:text-[18px] md:leading-[22px] tracking-normal group-hover:text-[#09636E] transition-colors duration-150"
                                                animate={{ color: isOpen ? "#09636E" : "#242424" }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {faq.question}
                                            </motion.span>

                                            {/* +/× Icon */}
                                            <motion.div
                                                className="w-6 h-6 rounded-full border border-[#F9A53C] flex items-center justify-center shrink-0 relative bg-white"
                                                animate={{ rotate: isOpen ? 45 : 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                            >
                                                <span className="w-3 h-[1.5px] bg-[#F9A53C] absolute" />
                                                <span className="w-[1.5px] h-3 bg-[#F9A53C] absolute" />
                                            </motion.div>
                                        </button>

                                        {/* Animated answer panel via AnimatePresence */}
                                        <AnimatePresence initial={false}>
                                            {isOpen && (
                                                <motion.div
                                                    key="answer"
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.35, ease: "easeInOut" }}
                                                    className="overflow-hidden"
                                                >
                                                    <motion.p
                                                        initial={{ y: 8 }}
                                                        animate={{ y: 0 }}
                                                        exit={{ y: 8 }}
                                                        transition={{ duration: 0.3, ease: "easeOut" }}
                                                        className="text-[#555454] font-md text-md leading-relaxed pr-8 pb-6"
                                                    >
                                                        {faq.answer}
                                                    </motion.p>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                    </div>
                </div>
            </section>

            {/* Bottom Brand Image */}
            <motion.div
                className="w-full bg-[#FAF9F6]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-15px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <Image
                    src="/capitaire.png"
                    alt="Capitaire"
                    width={1920}
                    height={200}
                    className="w-full h-auto object-cover"
                    priority
                />
            </motion.div>
        </>
    );
}