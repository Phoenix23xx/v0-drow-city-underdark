"use client"

import { useState } from "react"
import { Eye, Droplet, HelpCircle, Bug, Bell } from "lucide-react"

const puzzlesAndTraps = [
  {
    id: "spiegel",
    name: "Das Spiegelraetsel",
    subtitle: "Der Schwarze Spiegel",
    icon: Eye,
    type: "Raetsel",
    description: "Ein mannshoher Spiegel aus obsidianfarbenem Glas. Das Portal zur Schattenebene oeffnet sich nur, wenn das Spiegelbild eine Hohepriesterin der Lolth zeigt.",
    mechanics: [
      { check: "Knowledge (Religion)", dc: "DC 20", effect: "Erkennen des Mechanismus" },
      { check: "Disguise + Bluff", dc: "DC 25", effect: "Taeuschung mit Verkleidung" }
    ],
    alternative: "Gefangene Priesterin vor den Spiegel zwingen"
  },
  {
    id: "blut",
    name: "Das Blut-Artefakt",
    subtitle: "Kristallene Phiole",
    icon: Droplet,
    type: "Raetsel",
    description: "Eine kristallene Phiole auf einem Altar. Sie verlangt 'Das Blut einer Lolth-Geweihten', um das Siegel zu brechen.",
    mechanics: [
      { check: "Knowledge (Arcana)", dc: "DC 22", effect: "Spinnenblut funktioniert auch" }
    ],
    alternative: "Eine heilige Spinne toeten (weniger verwerflich) oder eine Priesterin opfern (boese Loesung)"
  },
  {
    id: "namen",
    name: "Das Namen-Raetsel",
    subtitle: "Der Stein-Golem",
    icon: HelpCircle,
    type: "Raetsel",
    description: "Ein Konstrukt (Stein-Golem) blockiert einen Gang und fragt: 'Nenne mir den wahren Namen des gefallenen Hauses.'",
    mechanics: [
      { check: "Gather Information", dc: "DC 25", effect: "Name herausfinden: Haus Oblodra" },
      { check: "Diplomacy (Bestechung)", dc: "DC 20 + 500 GM", effect: "Ein Informant verraet den Namen" },
      { check: "Knowledge (History)", dc: "DC 30", effect: "Aus Buechern in der Oberstadt" }
    ],
    alternative: null
  },
  {
    id: "web",
    name: "Die Web-Falle",
    subtitle: "Unsichtbare Spinnenfaeden",
    icon: Bug,
    type: "Falle",
    description: "Ein Gang mit unsichtbaren Spinnenfaeden (DC 28 Search, DC 24 Spot).",
    mechanics: [
      { check: "Ausloesen", dc: "Automatisch", effect: "Web (CL 8) + Giftspritze (Fort DC 16, 1W6 Str/1W6 Str)" },
      { check: "Alarm", dc: "-", effect: "Alarmspinne sendet Signal an Patrouille" },
      { check: "Entschaerfen", dc: "DC 26 / Dispel (CL 8)", effect: "Disable Device oder Dispel Magic" }
    ],
    alternative: null
  },
  {
    id: "schall",
    name: "Die Schallbruecke",
    subtitle: "Filigrane Bruecke",
    icon: Bell,
    type: "Falle",
    description: "Eine filigrane Bruecke ueber einem 60-Fuss-Abgrund. Bei Beruehrung: ohrenbetaeubender Ton.",
    mechanics: [
      { check: "Ausloesen", dc: "Automatisch", effect: "Auch mit Spider Climb" },
      { check: "Effekt", dc: "-", effect: "Alarm in 500-Fuss-Radius, Fort DC 15 oder 1 Runde betaeubt" },
      { check: "Deaktivierung", dc: "DC 30 / Silence", effect: "Disable Device oder Silence (aber dann hoert man selbst nichts)" }
    ],
    alternative: null
  }
]

export function PuzzlesSection() {
  const [activePuzzle, setActivePuzzle] = useState(puzzlesAndTraps[0])

  return (
    <section id="raetsel" className="py-24 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">Raetsel & Fallen</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            D&D 3.5 Mechaniken fuer die Herausforderungen, denen sich die Abenteurer stellen muessen.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Puzzle list */}
          <div className="space-y-2">
            {puzzlesAndTraps.map((puzzle) => {
              const Icon = puzzle.icon
              return (
                <button
                  key={puzzle.id}
                  onClick={() => setActivePuzzle(puzzle)}
                  className={`w-full flex items-center gap-3 p-4 border text-left transition-all ${
                    activePuzzle.id === puzzle.id
                      ? "border-primary bg-primary/10"
                      : "border-border hover:border-primary/50"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${activePuzzle.id === puzzle.id ? "text-primary" : "text-muted-foreground"}`} />
                  <div>
                    <p className={`font-medium tracking-wide text-sm ${activePuzzle.id === puzzle.id ? "text-primary" : "text-foreground"}`}>
                      {puzzle.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{puzzle.type}</p>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Active puzzle details */}
          <div className="lg:col-span-2 bg-background border border-border p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 text-primary">
                <activePuzzle.icon className="w-8 h-8" />
              </div>
              <div>
                <span className="text-xs text-primary tracking-widest">{activePuzzle.type}</span>
                <h3 className="text-xl font-bold tracking-wide">{activePuzzle.name}</h3>
                <p className="text-sm text-muted-foreground">{activePuzzle.subtitle}</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {activePuzzle.description}
            </p>

            <div className="mb-6">
              <h4 className="text-sm font-semibold tracking-wide mb-3 text-primary">Mechaniken</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 pr-4 text-muted-foreground font-medium">Probe</th>
                      <th className="text-left py-2 pr-4 text-muted-foreground font-medium">DC</th>
                      <th className="text-left py-2 text-muted-foreground font-medium">Effekt</th>
                    </tr>
                  </thead>
                  <tbody>
                    {activePuzzle.mechanics.map((mechanic, index) => (
                      <tr key={index} className="border-b border-border/50">
                        <td className="py-3 pr-4 font-mono text-xs">{mechanic.check}</td>
                        <td className="py-3 pr-4 text-primary font-mono text-xs">{mechanic.dc}</td>
                        <td className="py-3 text-muted-foreground">{mechanic.effect}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {activePuzzle.alternative && (
              <div className="p-4 bg-accent/10 border border-accent/30">
                <p className="text-xs text-accent tracking-wide mb-1">Alternative Loesung</p>
                <p className="text-sm text-muted-foreground">{activePuzzle.alternative}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
