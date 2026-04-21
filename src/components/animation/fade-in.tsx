"use client";

import { motion } from "motion/react";

type FadeInProps = {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    y?: number; // optional slight upward motion
};

export default function FadeIn({
    children,
    delay = 0,
    duration = 0.8,
    y = 10,
}: FadeInProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y,
            }}
            animate={{
                opacity: 1,
                y: 0,
            }}
            transition={{
                delay,
                duration,
                ease: [0.22, 1, 0.36, 1], // smooth, not default garbage
            }}
        >
            {children}
        </motion.div>
    );
}