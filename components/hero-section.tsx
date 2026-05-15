import { SpiderIcon } from "./spider-icon"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-accent/5" />
      
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
          Zal&apos;Toryn
        </h1>
        
        <p className="text-xl sm:text-2xl md:text-3xl text-primary mb-8 tracking-widest">
          Die Stadt der Tausend Spinnen
        </p>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto mb-12 leading-relaxed text-pretty">
          Tief im Underdark, eingebettet in eine gewaltige Hoehle, deren Decke mit phosphoreszierenden 
          Pilzen und magischen Fackeln in violetten, blauen und roten Toenen erleuchtet ist.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#viertel" 
            className="px-8 py-3 bg-primary text-primary-foreground font-medium tracking-wide hover:bg-primary/90 transition-colors"
          >
            Erkunde die Stadt
          </a>
          <a 
            href="#adelshaeuser" 
            className="px-8 py-3 border border-border text-foreground hover:border-primary hover:text-primary transition-colors tracking-wide"
          >
            Die Adelshaeuser
          </a>
        </div>

        <div className="mt-16 text-sm text-muted-foreground tracking-wide">
          D&D 3.5 Kampagnenmaterial
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
