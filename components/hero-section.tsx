import { SpiderIcon } from "./spider-icon"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Drow%20Bilder%201-REq9fVI6A0yCR7GdjgeIVw99HWuhHM.jpeg"
          alt="Zul'Chamber - Die Drow-Metropole im Unterreich"
          fill
          className="object-cover opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>
      
      {/* Animated web pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="web" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M10 0 L10 20 M0 10 L20 10 M0 0 L20 20 M20 0 L0 20" stroke="currentColor" strokeWidth="0.5" fill="none" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#web)" />
        </svg>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex justify-center mb-8">
          <SpiderIcon className="w-20 h-20 text-primary animate-pulse" />
        </div>
        
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-wider mb-4 text-balance">
          Zul&apos;Chamber
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-primary mb-6 tracking-widest">
          Das Echo der Sklaven
        </p>

        <p className="text-base sm:text-lg text-accent mb-8 tracking-wide font-medium">
          Ein D&D 3.5 Abenteuer fuer Stufe 10
        </p>
        
        <p className="text-muted-foreground text-base md:text-lg max-w-3xl mx-auto mb-8 leading-relaxed text-pretty">
          Die Drow-Metropole Zul&apos;Chamber wird insgeheim von einem Zirkel aus Mind Flayern kontrolliert, 
          die den Drow-Matronenmuettern im Schatten Befehle erteilen. Darunter leiden die Desmodu - 
          riesige Fledermausmenschen - als verkleidete Sklaven in den Tiefen-Minen.
        </p>

        <p className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-12 leading-relaxed italic">
          Die Spieler muessen sie befreien.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#story" 
            className="px-8 py-3 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors"
          >
            Die Story
          </a>
          <a 
            href="#stadt" 
            className="px-8 py-3 border border-border text-foreground hover:border-primary hover:text-primary transition-colors tracking-wide"
          >
            Erkunde die Stadt
          </a>
          <a 
            href="#adelshaeuser" 
            className="px-8 py-3 border border-border text-foreground hover:border-primary hover:text-primary transition-colors tracking-wide"
          >
            Die Acht Haeuser
          </a>
        </div>

        <div className="mt-16 text-sm text-muted-foreground tracking-wide">
          Zul&apos;Chamber - Das Unterreich - Die Desmodu
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
