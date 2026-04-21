"use client";

import { motion } from "motion/react";

type FadeUpProps = {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    duration?: number;
    distance?: number;
};

export default function FadeUp({
    className,
    children,
    delay = 0,
    duration = 0.6,
    distance = 20,
}: FadeUpProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: distance,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,       // animate only once
                margin: "-50px",  // triggers slightly earlier
            }}
            transition={{
                delay,
                duration,
                ease: [0.22, 1, 0.36, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}