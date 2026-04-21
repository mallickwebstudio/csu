"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useMotionValue,
    useSpring,
} from "motion/react";

export default function LayeredScrollSection() {
    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end end"],
    });

    // Section coming from bottom
    const y = useTransform(scrollYProgress, [0, 1], ["100%", "0%"]);
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

    // Mouse parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const smoothX = useSpring(mouseX, { stiffness: 100, damping: 20 });
    const smoothY = useSpring(mouseY, { stiffness: 100, damping: 20 });

    function handleMouseMove(e: React.MouseEvent) {
        const { innerWidth, innerHeight } = window;
        const x = (e.clientX / innerWidth - 0.5) * 20;
        const y = (e.clientY / innerHeight - 0.5) * 20;

        mouseX.set(x);
        mouseY.set(y);
    }

    return (
        <div ref={ref} className="h-[200vh] relative">
            {/* Section A (sticky) */}
            <section className="sticky top-0 h-screen flex items-center justify-center bg-black text-white z-10">
                <h1 className="text-6xl font-bold">
                    Previous Section
                </h1>
            </section>

            {/* Section B (coming from behind) */}
            <motion.section
                onMouseMove={handleMouseMove}
                style={{
                    y,
                    scale,
                    x: smoothX,
                    rotateX: smoothY,
                }}
                className="absolute top-0 h-screen w-full bg-white flex items-center justify-center rounded-t-3xl shadow-2xl"
            >
                
            </motion.section>
        </div>
    );
}