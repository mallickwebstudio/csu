import RevealSection from "@/components/animation/trust-wrapper"
import CTA from "./cta"
import Features from "./features"
import Motto from "./motto"
import TrustBanner from "./trust-banner"
import WhyUs from "./why-us"
import Hero from "./hero"

export default function Page() {
  return (
    <>
      {/* <HeroSection /> */}
      <Hero />
      <RevealSection>
        <TrustBanner />
      </RevealSection>
      <Motto />
      <Features />
      <WhyUs />
      <CTA />
    </>
  )
}
