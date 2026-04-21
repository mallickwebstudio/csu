import FadeIn from "@/components/animation/fade-in";
import HeroZoom from "@/components/animation/hero-zoom";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const logoList = [
  {
    href: "#",
    src: "/logo/14.svg",
    alt: "Logo",
  },
  {
    href: "#",
    src: "/logo/13.svg",
    alt: "Logo",
  },
  {
    href: "#",
    src: "/logo/15.svg",
    alt: "Logo",
  },
]

export default function Hero() {
  return (
    <section
      className="relative min-h-screen p-4 md:p-7 overflow-hidden z-30"
      role="region"
      aria-label="Hero section for introduction"
    >
      <HeroZoom>
        <div className="relative bg-neutral-950/20 w-full h-[calc(100vh-4rem)] rounded-[1.5rem] overflow-hidden flex flex-col">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-black/40 z-0" />
            <Image
              className="size-full object-cover select-none pointer-events-none"
              src="/csu-hero.gif"
              width={200}
              height={200}
              alt="Company Logo"
            />
          </div>

          <div className="flex-1 h-full"></div>
          <FadeIn delay={0.9} duration={0.3}>
            <div className="relative mx-auto container px-6 py-12 md:p-16 flex">
              {/* Text Content */}
              <header className="relative mt-auto h-full grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
                <div className="">
                  <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold tracking-tight text-background">
                    Elevate Industrial Performance & Engineering Mastery
                  </h1>

                  <p className="mt-3 md:mt-4 f:text-lg text-background">
                    Professional training and technical consultation bridging academic expertise with real-world mechanical engineering solutions.
                  </p>
                  <div className="mt-6 flex flex-col md:flex-row flex-wrap gap-4">
                    <Button
                      className="cursor-pointer"
                      variant="default"
                      size="lg"
                      aria-label="Schedule an Engineering Assessment"
                    >
                      Schedule an Engineering Assessment
                    </Button>
                    <Button
                      className="cursor-pointer"
                      variant="outline"
                      size="lg"
                      aria-label="Explore Training Programs"
                    >
                      Explore Training Programs
                    </Button>
                  </div>
                </div>

                <div className="self-end flex flex-row-reverse">
                  <div className="max-w-sm">
                    <h2 className="text-background text-lg font-medium">We have been recognized by</h2>
                    <div className="grid grid-cols-3 gap-2 md:gap-4">
                      {logoList.map((item, index) => (
                        <Link className="size-full px-4 py-2 md:py-6 flex items-center justify-center group/logo" href={item.href} key={item.src + index + "LogoFour"}>
                          <Image
                            className="h-8 w-fit object-contain select-none pointer-events-none grayscale"
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
                </div>
              </header>
            </div>
          </FadeIn>
        </div>
      </HeroZoom>
    </section>
  );
}

