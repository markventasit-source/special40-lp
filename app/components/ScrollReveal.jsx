'use client';
import React from 'react';
import { motion } from 'framer-motion';

export default function ScrollReveal({ children, className = "", delay = 0 }) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px" }}
            transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: delay / 1000
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
