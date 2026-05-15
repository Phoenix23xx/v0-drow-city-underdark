"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Users, Swords } from "lucide-react"

const houses = [
  {
    rank: 1,
    name: "Haus Baenre",
    matron: "Quenthel Baenre",
    class: "Clr 15 / Lolth's Sting 2",
    strength: "300 Krieger, 40 Priesterinnen",
    motto: "Lolth's Wille ist unser Gesetz",
    secret: "Verbirgt ein Artefakt der Schattenebene",
    color: "primary"
  },
  {
    rank: 2,
    name: "Haus T'sarran",
    matron: "Vadalma T'sarran",
    class: "Clr 12 / Rog 3",
    strength: "180 Krieger, 25 Priesterinnen",
    motto: "Im Schatten waechst die Macht",
    secret: "Handelt heimlich mit den Duergar",
    color: "accent"
  },
  {
    rank: 3,
    name: "Haus Xorlarrin",
    matron: "Zeerith Xorlarrin",
    class: "Clr 10 / Wiz 5",
    strength: "150 Krieger, 30 Magier",
    motto: "Wissen ist die schaerfste Klinge",
    secret: "Plant einen Putsch gegen Haus Baenre",
    color: "chart-3"
  },
  {
    rank: 4,
    name: "Haus Melarn",
    matron: "Aunrae Melarn",
    class: "Clr 11",
    strength: "100 Krieger, 15 Priesterinnen",
    motto: "Geduld frisst die Ungeduld",
    secret: "Versteckt eine Svirfneblin-Spionin",
    color: "muted"
  }
]

export function HousesSection() {
  const [expandedHouse, setExpandedHouse] = useState<number | null>(0)

  return (
    <section id="adelshaeuser" className="py-24 px-4 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">Die Adelshaeuser</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Vier maechtige Haeuser kaempfen um die Gunst der Spinnenkoenigin. Jedes birgt dunkle Geheimnisse.
          </p>
        </div>

        <div className="space-y-4">
          {houses.map((house, index) => (
            <div 
              key={house.name}
              className="border border-border bg-background overflow-hidden"
            >
              <button
                onClick={() => setExpandedHouse(expandedHouse === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="w-8 h-8 flex items-center justify-center bg-primary/20 text-primary font-bold text-sm">
                    {house.rank}
                  </span>
                  <div className="text-left">
                    <h3 className="font-semibold tracking-wide">{house.name}</h3>
                    <p className="text-sm text-muted-foreground">{house.matron}</p>
                  </div>
                </div>
                {expandedHouse === index ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground" />
                )}
              </button>

              {expandedHouse === index && (
                <div className="px-6 pb-6 pt-2 border-t border-border">
                  <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground tracking-wide">Klasse</p>
                        <p className="text-sm font-mono">{house.class}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Swords className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="text-xs text-muted-foreground tracking-wide">Staerke</p>
                        <p className="text-sm">{house.strength}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 bg-secondary/30 border-l-2 border-primary mb-4">
                    <p className="text-sm italic text-foreground">&ldquo;{house.motto}&rdquo;</p>
                  </div>

                  <div className="p-4 bg-accent/10 border border-accent/30">
                    <p className="text-xs text-accent tracking-wide mb-1">Geheimnis (nur fuer SL)</p>
                    <p className="text-sm text-muted-foreground">{house.secret}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
