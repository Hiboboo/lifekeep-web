import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { PrincipleSection } from "@/components/principle-section"
import { PrivacySection } from "@/components/privacy-section"
import { PlatformSection } from "@/components/platform-section"
import { PricingSection } from "@/components/pricing-section"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl">
      <header className="flex items-center justify-between px-6 pt-8">
        <span className="text-sm font-medium tracking-wide text-foreground">
          Lifekeep
        </span>
      </header>
      <HeroSection />
      <ProblemSection />
      <PrincipleSection />
      <PrivacySection />
      <PlatformSection />
      <PricingSection />
      <SiteFooter />
    </main>
  )
}
