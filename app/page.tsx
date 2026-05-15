import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { DistrictsSection } from "@/components/districts-section"
import { HousesSection } from "@/components/houses-section"
import { NPCsSection } from "@/components/npcs-section"
import { PuzzlesSection } from "@/components/puzzles-section"
import { EncountersSection } from "@/components/encounters-section"
import { AtmosphereSection } from "@/components/atmosphere-section"
import { MoralSection } from "@/components/moral-section"
import { Footer } from "@/components/footer"

export default function ZalTorynPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <DistrictsSection />
      <HousesSection />
      <NPCsSection />
      <PuzzlesSection />
      <EncountersSection />
      <AtmosphereSection />
      <MoralSection />
      <Footer />
    </main>
  )
}
