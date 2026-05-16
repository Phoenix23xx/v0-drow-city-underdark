import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { StorySection } from "@/components/story-section"
import { DistrictsSection } from "@/components/districts-section"
import { HousesSection } from "@/components/houses-section"
import { NPCsSection } from "@/components/npcs-section"
import { MindflayerSection } from "@/components/mindflayer-section"
import { UnterreichSection } from "@/components/underreich-section"
import { EncountersSection } from "@/components/encounters-section"
import { AtmosphereSection } from "@/components/atmosphere-section"
import { MoralSection } from "@/components/moral-section"
import { Footer } from "@/components/footer"

export default function ZulChamberPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />
      <HeroSection />
      <StorySection />
      <DistrictsSection />
      <HousesSection />
      <NPCsSection />
      <MindflayerSection />
      <UnterreichSection />
      <EncountersSection />
      <AtmosphereSection />
      <MoralSection />
      <Footer />
    </main>
  )
}
