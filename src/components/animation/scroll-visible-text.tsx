"use client";

import { useRef } from "react";
import {
    motion,
    useScroll,
    useTransform,
    MotionValue,
} from "motion/react";

type WordProps = {
    word: string;
    index: number;
    total: number;
    progress: MotionValue<number>;
};

function Word({ word, index, total, progress }: WordProps) {
    const start = index / total;
    const end = start + 0.15;

    const opacity = useTransform(progress, [start, end], [0.2, 1]);
    const blur = useTransform(progress, [start, end], [6, 0]);
    const y = useTransform(progress, [start, end], [10, 0]);

    return (
        <motion.span
            style={{
                opacity,
                y,
                filter: `blur(${blur}px)`,
            }}
        >
            {word}
        </motion.span>
    );
}

export default function ScrollRevealText({
    text = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti deserunt aliquam beatae saepe ipsum eius quas, perferendis quam. Obcaecati expedita unde optio quam animi repellat itaque porro consectetur minima! Aliquam optio quam animi.",
}: {
    text?: string;
}) {
    const ref = useRef<HTMLDivElement | null>(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start 80%", "end 70%"],
    });

    const words = text.split(" ");

    return (
        <section className="relative">
            <div
                ref={ref}
                className="text-5xl font-semibold leading-[1.2] flex flex-wrap gap-3"
            >
                {words.map((word, i) => (
                    <Word
                        key={i}
                        word={word}
                        index={i}
                        total={words.length}
                        progress={scrollYProgress}
                    />
                ))}
            </div>
        </section>
    );
}