import HeaderDesign from "@/components/other/header-design";
import Image from "next/image";
import Link from "next/link";

const logoList = [
    {
        href: "#",
        src: "/logo/01.svg",
        alt: "Logo",
    },
    {
        href: "#",
        src: "/logo/02.svg",
        alt: "Logo",
    },
    {
        href: "#",
        src: "/logo/03.svg",
        alt: "Logo",
    },
    {
        href: "#",
        src: "/logo/04.svg",
        alt: "Logo",
    },
    {
        href: "#",
        src: "/logo/05.svg",
        alt: "Logo",
    },
    {
        href: "#",
        src: "/logo/06.svg",
        alt: "Logo",
    },
    {
        href: "#",
        src: "/logo/07.svg",
        alt: "Logo",
    },
    {
        href: "#",
        src: "/logo/08.svg",
        alt: "Logo",
    },
    {
        href: "#",
        src: "/logo/11.svg",
        alt: "Logo",
    },
    {
        href: "#",
        src: "/logo/09.svg",
        alt: "Logo",
    },
    {
        href: "#",
        src: "/logo/10.svg",
        alt: "Logo",
    },
    {
        href: "#",
        src: "/logo/12.svg",
        alt: "Logo",
    }
]

export default function TrustBanner() {
    return (
        <section
            className="relative bg-background"
            aria-label="Logo section"
            role="region"
        >
            <div className="mx-auto container px-6 py-12 md:p-16">
                <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-2">
                    <h2 className="relative md:text-lg font-medium w-fit">
                        <HeaderDesign />
                        OUR PARTNERS
                    </h2>
                    <p className="md:text-lg">
                        Trusted by industry leaders worldwide
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-3 md:grid-cols-6 gap-2 md:gap-4">
                    {logoList.map((item, index) => (
                        <Link className="size-full px-4 py-2 md:py-6 bg-muted rounded-lg flex items-center justify-center border group/logo" href={item.href} key={item.src + index + "LogoFour"}>
                            <Image
                                className="h-8 w-fit object-contain select-none pointer-events-none group-hover/logo:scale-95 transition-transform duration-500 ease-in grayscale"
                                src={item.src}
                                width={100}
                                height={48}
                                alt={item.alt}
                                unoptimized
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
