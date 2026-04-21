import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function CTA() {
    return (
        <section
            className="relative bg-background p-4"
            aria-labelledby="cta-heading"
            role="region"
        >
            <div className="bg-linear-to-tr from-secondary via-secondary rounded-[1.5rem] overflow-hidden">
                <div className="relative mx-auto container px-6 py-12 md:p-16 overflow-hidden">
                    {/* Text content */}
                    <header className="relative max-w-2xl z-10">
                        <h2
                            id="cta-heading"
                            className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-balance"
                        >
                            Ready to optimize your operational performance?
                        </h2>
                        <p className="mt-3 md:mt-4 md:text-lg">
                            Speak with our technical team today to discuss your workforce development or system assessment needs.
                        </p>

                        {/* Button group */}
                        <div className="mt-6 flex flex-wrap gap-4">
                            <Button
                                className="cursor-pointer"
                                variant="default"
                                size="lg"
                                aria-label="Get started with the service"
                            >
                                Contact an Engineering Consultant
                            </Button>
                            {/* <Button
                                className="cursor-pointer"
                                variant="outline"
                                size="lg"
                                aria-label="Learn more about the service"
                            >
                                Learn more
                            </Button> */}
                        </div>
                    </header>

                    <Image
                        className='absolute -top-12 -right-10 size-[50vw]  grayscale opacity-50 object-contain select-none pointer-events-none z-0'
                        src='/logo-white.png'
                        width={200}
                        height={200}
                        alt='Company Logo'
                    />
                </div>
            </div>
        </section>
    );
}
