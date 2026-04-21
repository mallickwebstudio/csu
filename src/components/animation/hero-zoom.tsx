"use client";

import { motion } from "motion/react";

export default function HeroZoom({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <motion.div
            initial={{
                scale: 1.2,   // starts slightly zoomed in
                opacity: 0,
            }}
            animate={{
                scale: 1,
                opacity: 1,
            }}
            transition={{
                duration: 2.5,
                ease: [0.22, 1, 0.36, 1], // smooth ease-out (premium feel)
            }}
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
}