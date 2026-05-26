'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({ children, className = "", delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px 0px -50px 0px" }}
            transition={{
                duration: 0.75,
                ease: [0.215, 0.61, 0.355, 1], // Premium easeOutCubic curve for highly responsive, organic acceleration
                delay: delay / 1000
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
