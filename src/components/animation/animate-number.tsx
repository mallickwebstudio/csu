"use client";

import {
    motion,
    useMotionValue,
    useTransform,
    animate,
    useInView,
} from "motion/react";
import { useEffect, useRef } from "react";

type CountUpProps = {
    from?: number;
    to: number;
    duration?: number;
    delay?: number;
    decimals?: number;
};

export default function AnimateNumber({
    from = 0,
    to,
    duration = 1.5,
    delay = 0,
    decimals = 0,
}: CountUpProps) {
    const ref = useRef<HTMLSpanElement | null>(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const count = useMotionValue(from);

    const rounded = useTransform(count, (latest) =>
        Number(latest).toFixed(decimals)
    );

    useEffect(() => {
        if (!isInView) return;

        const controls = animate(count, to, {
            duration,
            delay,
            ease: [0.22, 1, 0.36, 1],
        });

        return controls.stop;
    }, [isInView, count, to, duration, delay]);

    return (
        <motion.span ref={ref}>
            {rounded}
        </motion.span>
    );
}