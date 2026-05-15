import { Quote } from "lucide-react"

const npcs = [
  {
    name: "Hohepriesterin Yvonnel",
    class: "Clr 18 von Lolth",
    quote: "Die Spinnenkoenigin sieht alles. Und ich bin ihre Augen in Zal'Toryn.",
    description: "Die unangefochtene geistliche Fuehrerin der Stadt. Residiert im Tempel der Lolth.",
    type: "threat"
  },
  {
    name: "Szordrin der Wahnsinnige",
    class: "Wiz 14",
    quote: "Die Schatten fluestern mir Geheimnisse... manchmal luegen sie.",
    description: "Ein exilierter Drow-Magier, der in den Ruinen von Haus Oblodra lebt. Potenzieller Verbuendeter - oder toedliche Gefahr.",
    type: "neutral"
  },
  {
    name: "Duergar-Haendler Grimnak",
    class: "Haendler",
    quote: "Gold spricht alle Sprachen, auch die der Drow.",
    description: "Anfuehrer der Duergar-Schmuggler. Kennt geheime Wege aus der Stadt.",
    type: "ally"
  },
  {
    name: "Belwar Dissengulp",
    class: "Rog 8 / Ftr 4",
    quote: "Wir sind klein, aber unsere Rache wird gross sein.",
    description: "Fuehrt den Tiefgnom-Widerstand aus den versteckten Kanaelen.",
    type: "ally"
  },
  {
    name: "Ylara - Die gebrochene Sklavin",
    class: "Com 3",
    quote: "Ich habe gesehen, wie sie meine Familie toeteten. Eines Tages...",
    description: "Eine menschliche Sklavin mit Wissen ueber die Geheimnisse ihrer Herren. Brennt auf Rache.",
    type: "ally"
  }
]

const typeColors = {
  threat: "border-accent",
  neutral: "border-primary",
  ally: "border-chart-5"
}

export function NPCsSection() {
  return (
    <section id="nscs" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">Wichtige NSCs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Verbuendete, Feinde und unberechenbare Gestalten, denen die Abenteurer in Zal&apos;Toryn begegnen koennen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {npcs.map((npc) => (
            <div 
              key={npc.name}
              className={`bg-card border-l-4 ${typeColors[npc.type as keyof typeof typeColors]} border border-border p-6`}
            >
              <div className="mb-4">
                <h3 className="font-semibold tracking-wide text-lg">{npc.name}</h3>
                <p className="text-xs text-primary font-mono">{npc.class}</p>
              </div>

              <div className="flex gap-2 mb-4">
                <Quote className="w-4 h-4 text-muted-foreground shrink-0 mt-1" />
                <p className="text-sm italic text-muted-foreground leading-relaxed">
                  {npc.quote}
                </p>
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed">
                {npc.description}
              </p>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-accent" />
            <span>Bedrohung</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-primary" />
            <span>Unberechenbar</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-chart-5" />
            <span>Potenzieller Verbuendeter</span>
          </div>
        </div>
      </div>
    </section>
  )
}
