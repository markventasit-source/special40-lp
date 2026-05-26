import React from 'react';
import { motion } from 'framer-motion';

export default function WhyWeExist() {
    // Structural fade-and-drift animation for primary typography blocks
    const blockVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.7, ease: "easeOut" }
        }
    };

    return (
        <section className="w-full bg-[#FBF4EA] font-inter py-16 md:py-24 overflow-hidden">
            {/* Aligns with your exact header and hero section content limits */}
            <div className="mx-auto px-3 md:px-8 lg:px-10">

                {/* Upper Grid Area: Main statement vs descriptions */}
                <div className="grid mt-16 lg:mt-20 grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

                    {/* Left Column: Mission Title Statement */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={blockVariants}
                        className="flex flex-col space-y-3 md:space-y-4"
                    >
                        <span className="text-[#F9A53C] font-sm text-[15px] leading-none tracking-[0.1em] uppercase">
                            Why We Exist
                        </span>
                        <h2 className="text-[#242424] font-md text-2xl md:text-3xl lg:text-[48px] lg:leading-[57px] tracking-normal max-w-xl">
                            Degrees no longer guarantee careers. Capability does.
                        </h2>
                    </motion.div>

                    {/* Right Block: Explanatory Paragraphs (Slightly delayed for editorial pacing) */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        variants={{
                            hidden: { opacity: 0, y: 25 },
                            visible: {
                                opacity: 1,
                                y: 0,
                                transition: { duration: 0.7, ease: "easeOut", delay: 0.15 }
                            }
                        }}
                        className="flex flex-col space-y-4 md:space-y-6 lg:pt-8 text-[#555454]"
                    >
                        <p className="font-normal text-sm md:text-[16px] md:leading-[24px] tracking-normal">
                            Most commerce graduates struggle not because they lack talent but
                            because they lack practical exposure to how finance actually works
                            inside a real business. Companies don't hire degrees. They hire
                            professionals who can think, execute and deliver from day one.
                        </p>
                        <p className="font-normal text-sm md:text-[16px] md:leading-[24px] tracking-normal">
                            SPECIAL40 was built to close that gap. It is not a coaching center. It is
                            not a Tally class. It is not mass-market education. It is a selective
                            transformation ecosystem engineered to turn ambitious commerce
                            graduates into corporate-ready finance professionals.
                        </p>
                    </motion.div>

                </div>

                {/* Lower Full-Width Block: High Impact Highlight Quote */}
                {/* Independent trigger with a broader reveal time scale */}
                <motion.div
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
                    className="mt-8 md:mt-16 lg:mt-24 pt-2 md:pt-4 lg:ml-30"
                >
                    <p className="text-[#F9A53C] italic font-light text-lg md:text-xl lg:text-[32px] leading-[28px] md:leading-[32px] lg:leading-[43px] tracking-[0%] max-w-4xl">
                        "We don't create job seekers. We build finance professionals companies cannot ignore."
                    </p>
                </motion.div>

            </div>
        </section>
    );
}