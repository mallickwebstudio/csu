import { cn } from '@/lib/utils'

const sizeStyles = {
    sm: {
        box: "size-1.5",
        border: "border"
    },
    base: {
        box: "size-2",
        border: "border-[1.25px]"
    },
    md: {
        box: "size-3",
        border: "border-[1.5px]"
    },
    lg: {
        box: "size-4",
        border: "border-[1.75px]"
    },
    xl: {
        box: "size-5",
        border: "border-[2px]"
    },
    "2xl": {
        box: "size-3 md:size-6",
        border: "border-[1.75px]"
    },
    "3xl": {
        box: "size-7",
        border: "border-[2px]"
    }
}

export default function HeaderDesign(
    {
        className,
        tl,
        tr,
        bl,
        br,
        size = "base"
    }: {
        className?: string;
        tl?: string;
        tr?: string;
        bl?: string;
        br?: string;
        size?: keyof typeof sizeStyles;
    }
) {
    const styles = sizeStyles[size]

    return (
        <>
            <div
                className={cn(
                    "absolute border-primary/50 top-0 -left-2 border",
                    styles.box,
                    styles.border,
                    "border-b-0 border-r-0",
                    tl, className
                )}
                aria-hidden="true"
            />
            <div
                className={cn(
                    "absolute border-primary/50 top-0 -right-2 border",
                    styles.box,
                    styles.border,
                    "border-b-0 border-l-0",
                    tr, className
                )}
                aria-hidden="true"
            />
            <div
                className={cn(
                    "absolute border-primary/50 bottom-0 -left-2 border",
                    styles.box,
                    styles.border,
                    "border-t-0 border-r-0",
                    bl, className
                )}
                aria-hidden="true"
            />
            <div
                className={cn(
                    "absolute border-primary/50 bottom-0 -right-2 border",
                    styles.box,
                    styles.border,
                    "border-t-0 border-l-0",
                    br, className
                )}
                aria-hidden="true"
            />
        </>
    )
}