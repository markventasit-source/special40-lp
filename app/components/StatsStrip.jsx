import React, { useEffect, useRef } from 'react';
import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion';

// Quick utility to animate counts smoothly in place
function AnimatedNumber({ value, uniqueKey }) {
    const ref = useRef(null);
    // Unique key attached to the layout scope forces separate visibility triggers
    const isInView = useInView(ref, { once: true, margin: "-20px" });

    const numericTarget = parseFloat(value.replace(/[^0-9.]/g, '')) || 0;
    const suffix = value.replace(/[0-9.]/g, '');

    const count = useMotionValue(0);

    const displayValue = useTransform(count, (latest) => {
        const isDecimal = value.includes('.');
        const formattedNum = isDecimal ? latest.toFixed(1) : Math.round(latest);
        return `${formattedNum}${suffix}`;
    });

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, numericTarget, {
                duration: 1.5,
                ease: "easeOut",
            });
            return controls.stop;
        }
    }, [isInView, numericTarget, count, uniqueKey]); // Bound tightly to key lifecycle

    return <motion.span key={uniqueKey} ref={ref}>{displayValue}</motion.span>;
}

export default function StatsStrip() {
    const containerVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full px-3 md:px-8 lg:px-10 overflow-hidden"
        >

            {/* Mobile: 2x2 grid */}
            <div
                className="grid grid-cols-2 gap-y-4 md:hidden py-10"
                style={{ borderTop: '1px solid #E5E5E5' }}
            >
                <div className="flex flex-col space-y-1 py-4 pr-8"
                    style={{ borderRight: '1px solid #E5E5E5' }}
                >
                    <span
                        className="text-[#09636E] text-[32px] leading-none font-semibold"
                        style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}
                    >
                        <AnimatedNumber value="40" uniqueKey="mobile-seats" />
                    </span>
                    <span
                        className="text-[#242424] text-[14.74px] leading-none font-normal"
                        style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}
                    >
                        Seats
                    </span>
                </div>

                <div className="flex flex-col space-y-1 py-4 pl-8"
                    style={{ borderLeft: '1px solid #E5E5E5' }}
                >
                    <span
                        className="text-[#09636E] text-[32px] leading-none font-semibold"
                        style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}
                    >
                        <AnimatedNumber value="100%" uniqueKey="mobile-placement" />
                    </span>
                    <span
                        className="text-[#242424] text-[14.74px] leading-none font-normal"
                        style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}
                    >
                        Placement Support
                    </span>
                </div>

                <div className="flex flex-col space-y-1 py-4 pr-8"
                    style={{ borderRight: '1px solid #E5E5E5' }}
                >
                    <span
                        className="text-[#09636E] text-[32px] leading-none font-semibold"
                        style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}
                    >
                        <AnimatedNumber value="4.5 mo" uniqueKey="mobile-duration" />
                    </span>
                    <span
                        className="text-[#242424] text-[14.74px] leading-none font-normal"
                        style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}
                    >
                        Intensive Program
                    </span>
                </div>

                <div className="flex flex-col space-y-1 py-4 pl-8"
                    style={{ borderLeft: '1px solid #E5E5E5' }}
                >
                    <span
                        className="text-[#09636E] text-[32px] leading-none font-semibold"
                        style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}
                    >
                        <AnimatedNumber value="10+ yrs" uniqueKey="mobile-experience" />
                    </span>
                    <span
                        className="text-[#242424] text-[14.74px] leading-none font-normal"
                        style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}
                    >
                        Mentor Experience
                    </span>
                </div>
            </div>

            {/* Tablet + Desktop */}
            <div
                className="hidden md:flex items-stretch py-12 md:py-16"
                style={{ borderTop: '1px solid #E5E5E5' }}
            >
                <div className="flex flex-col space-y-1 w-[15%]">
                    <span
                        className="text-[#09636E] text-[65px] leading-none font-semibold"
                        style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}
                    >
                        <AnimatedNumber value="40" uniqueKey="desktop-seats" />
                    </span>
                    <span
                        className="text-[#242424] text-[21px] leading-none font-normal"
                        style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}
                    >
                        Seats
                    </span>
                </div>

                <div className="flex w-[25%] justify-center" style={{ borderLeft: '1px solid #E5E5E5' }}>
                    <div className="flex flex-col space-y-1">
                        <span
                            className="text-[#09636E] text-[65px] leading-none font-semibold"
                            style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}
                        >
                            <AnimatedNumber value="100%" uniqueKey="desktop-placement" />
                        </span>
                        <span
                            className="text-[#242424] text-[21px] leading-none font-normal"
                            style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}
                        >
                            Placement Support
                        </span>
                    </div>
                </div>

                <div className="flex w-[35%] justify-center" style={{ borderLeft: '1px solid #E5E5E5' }}>
                    <div className="flex flex-col space-y-1">
                        <span
                            className="text-[#09636E] text-[65px] leading-none font-semibold"
                            style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}
                        >
                            <AnimatedNumber value="4.5 month" uniqueKey="desktop-duration" />
                        </span>
                        <span
                            className="text-[#242424] text-[21px] leading-none font-normal"
                            style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}
                        >
                            Intensive Program
                        </span>
                    </div>
                </div>

                <div className="flex w-[25%] justify-end" style={{ borderLeft: '1px solid #E5E5E5' }}>
                    <div className="flex flex-col space-y-1">
                        <span
                            className="text-[#09636E] text-[65px] leading-none font-semibold"
                            style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}
                        >
                            <AnimatedNumber value="10+ yrs" uniqueKey="desktop-experience" />
                        </span>
                        <span
                            className="text-[#242424] text-[21px] leading-none font-normal"
                            style={{ fontFamily: 'Inter', lineHeight: '100%', letterSpacing: '0%' }}
                        >
                            Mentor Experience
                        </span>
                    </div>
                </div>
            </div>

        </motion.div>
    );
}