import { Users, Heart, Skull } from "lucide-react"

const scenes = [
  {
    title: "Das Drow-Kind",
    icon: Users,
    description: "Ein junges Drow-Maedchen (ca. 30 Jahre alt) beobachtet die Gruppe aus einem Fenster. Sie hat etwas gesehen, das sie nicht haette sehen sollen...",
    options: ["Einschuechtern", "Bestechen", "Ignorieren", "Beschuetzen"],
    consequence: "Jede Wahl hat Konsequenzen in der unbarmherzigen Drow-Gesellschaft."
  },
  {
    title: "Der gebrochene Krieger",
    icon: Skull,
    description: "Ein Drow-Krieger namens Valas wurde von seinem Haus verstossen. Er bietet seine Dienste an - aber kann man ihm trauen?",
    stats: "Ftr 6, NE -> N (im Wandel)",
    options: ["Annehmen", "Ablehnen", "Testen", "Hintergehen"],
    consequence: "Ein potenzieller Verbuendeter oder Verraeter?"
  },
  {
    title: "Die Rache der Sklavin",
    icon: Heart,
    description: "Ylara bittet die Gruppe, ihrer ehemaligen Herrin etwas in den Wein zu mischen - ein langsam wirkendes Gift.",
    dilemma: "Hilft man einer Unterdrueckten bei der Rache? Macht das die Gruppe zu Moedern?",
    options: ["Helfen", "Ablehnen", "Alternative suchen", "Verraeten"],
    consequence: "Moralisches Dilemma ohne einfache Antwort."
  }
]

export function MoralSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">Moralische Grauzonen</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Szenen, die die Spieler vor schwierige Entscheidungen stellen - ohne richtige Antwort.
          </p>
        </div>

        <div className="space-y-8">
          {scenes.map((scene, index) => {
            const Icon = scene.icon
            return (
              <div key={index} className="bg-card border border-border p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-primary/10 text-primary">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold tracking-wide text-lg">Szene {index + 1}: {scene.title}</h3>
                    {scene.stats && (
                      <p className="text-xs text-primary font-mono mt-1">{scene.stats}</p>
                    )}
                  </div>
                </div>

                <blockquote className="border-l-2 border-primary pl-4 mb-4 italic text-muted-foreground">
                  {scene.description}
                </blockquote>

                {scene.dilemma && (
                  <p className="text-sm text-accent mb-4 font-medium">{scene.dilemma}</p>
                )}

                <div className="flex flex-wrap gap-2 mb-4">
                  {scene.options.map((option, optIndex) => (
                    <span 
                      key={optIndex}
                      className="px-3 py-1 text-xs bg-secondary text-secondary-foreground"
                    >
                      {option}
                    </span>
                  ))}
                </div>

                <p className="text-sm text-muted-foreground">{scene.consequence}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
