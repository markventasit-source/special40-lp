'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 800);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    key="scroll-to-top"
                    onClick={scrollToTop}
                    aria-label="Scroll to top"
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.8 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="
                        fixed bottom-6 right-5 z-50
                        bg-[#09636E] text-white
                        w-12 h-12
                        flex items-center justify-center
                        shadow-lg hover:bg-[#074f58]
                        transition-colors duration-200
                        rounded-full
                    "
                >
                    {/* Bouncing arrow */}
                    <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        <ArrowUp size={20} strokeWidth={2.5} />
                    </motion.div>
                </motion.button>
            )}
        </AnimatePresence>
    );
}
