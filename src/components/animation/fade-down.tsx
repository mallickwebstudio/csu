"use client";

import { motion } from "motion/react";

type FadeDownProps = {
    children: React.ReactNode;
    delay?: number;
    duration?: number;
    distance?: number;
};

export default function FadeDown({
    children,
    delay = 0,
    duration = 0.6,
    distance = 20, // how far it drops
}: FadeDownProps) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: -distance, // start above
            }}
            animate={{
                opacity: 1,
                y: 0, // move down to position
            }}
            transition={{
                delay,
                duration,
                ease: [0.22, 1, 0.36, 1],
            }}
        >
            {children}
        </motion.div>
    );
}