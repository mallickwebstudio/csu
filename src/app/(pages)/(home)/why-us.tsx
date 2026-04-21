import AnimateNumber from "@/components/animation/animate-number";
import HeaderDesign from "@/components/other/header-design";

const statsData = [
    {
        percent: 15,
        sign: "+",
        heading: "Years Industry Experience"
    },
    {
        percent: 50,
        sign: "+",
        heading: "Industrial Projects Assessed"
    },
    {
        percent: 500,
        sign: "+",
        heading: "Professional Engineers Trained"
    },
];

export default function WhyUs() {
    return (
        <section
            className="relative bg-background"
            aria-label="Stats section"
            role="region"
        >
            <div className="mx-auto container px-6 py-12 md:p-16">
                {/* Section Header */}
                <header className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="relative md:text-lg font-medium w-fit">
                            <HeaderDesign />
                            NUMBERS YOU TRUST
                        </h2>
                        <p className="mt-4 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-balance">
                            Academic Rigor Meets Field Execution
                        </p>
                    </div>
                    <div>
                        <p className="text-lg">
                            We don&apos;t just provide theoretical advice. Our solutions are built on a foundation of deep academic research combined with decades of hands-on industrial application in manufacturing and energy sectors
                        </p>
                        {/* <div
                            className="mt-4 flex flex-wrap justify-center md:justify-start gap-4"
                            role="group"
                            aria-label="Call to action buttons"
                        >
                            <Button
                                className="cursor-pointer"
                                aria-label="Get started with our platform"
                            >
                                Get started
                            </Button>
                            <Button
                                className="cursor-pointer"
                                variant="secondary"
                                aria-label="Learn more about our services"
                            >
                                Learn more
                            </Button>
                        </div> */}
                    </div>
                </header>

                {/* Statistics Grid */}
                <div
                    className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
                    role="list"
                    aria-label="Key statistics"
                >
                    {statsData.map((stat, index) => (
                        <article
                            className="pl-4 border-l border-foreground/50"
                            role="listitem"
                            key={stat.heading + index + "StatsOne"}
                        >
                            <div className="text-6xl font-bold" aria-label="30 percent">
                                <AnimateNumber to={stat.percent} />
                                {stat.sign}
                            </div>
                            <div className="mt-2">
                                {stat.heading}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
