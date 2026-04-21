import FadeUp from "@/components/animation/fade-up";
import ScrollVisibleText from "@/components/animation/scroll-visible-text";
import HeaderDesign from "@/components/other/header-design";
import Image from "next/image";

export default function Motto() {
    return (
        <section
            className="relative bg-background"
            aria-label="Logo section"
            role="region"
        >
            <div className="mx-auto container px-6 py-12 md:p-16">
                <h2 className="relative md:text-lg font-medium w-fit">
                    <HeaderDesign />
                    OUR MOTTO
                </h2>

                <div className="relative mt-10">
                    <ScrollVisibleText />
                </div>


                <FadeUp delay={0.3} duration={0.3}>
                    <div className="relative mt-10 aspect-video rounded-2xl overflow-hidden">
                        <div className="absolute inset-0 bg-black/40 z-0" />
                        <Image
                            className="size-full object-cover select-none pointer-events-none"
                            src="/csu-hero.gif"
                            width={200}
                            height={200}
                            alt="Company Logo"
                        />
                    </div>
                </FadeUp>
            </div>
        </section>
    );
}
