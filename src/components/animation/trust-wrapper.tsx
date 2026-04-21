"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

type RevealSectionProps = {
    children: React.ReactNode;
};

export default function RevealSection({ children }: RevealSectionProps) {
    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 95%", "start 50%"],
    });

    // Simulate negative margin → 0 using Y transform
    const y = useTransform(scrollYProgress,
        [0, 1],
        [-80, 0]);

    // Scale from 90% → 100%
    const scale = useTransform(scrollYProgress,
        [0, 1],
        [0.9, 1]);

    // Optional: smoother feel
    const opacity = useTransform(scrollYProgress,
        [0, 1],
        [0.6, 1]);

    return (
        <motion.section
            ref={ref}
            style={{
                y,
                scale,
                opacity,
            }}
            className="relative z-20 will-change-transform"
        >
            {children}
        </motion.section>
    );
}