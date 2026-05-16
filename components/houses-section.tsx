"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Crown, Skull, Eye, Coins, Leaf, Brain, Hammer, Globe, AlertTriangle } from "lucide-react"

const houses = [
  {
    rank: 1,
    name: "Haus Baenre",
    icon: Crown,
    specialty: "Regierung, Tempel",
    status: "Die Erste Matrone fuehrt den Rat und kontrolliert die Stadtwache.",
    description: "Das maechtigste Haus in Zul'Chamber, unangefochten an der Spitze der Hierarchie.",
    color: "primary"
  },
  {
    rank: 2,
    name: "Haus Xorlarrin",
    icon: Brain,
    specialty: "Magie, Alchemie",
    status: "Viconias Familie. Stellen die Kampfzauberer, betreiben die Minen.",
    description: "Bekannt fuer ihre magische Expertise. Viconia Xorlarrin, die Alchemistin, gehoert diesem Haus an.",
    color: "accent"
  },
  {
    rank: 3,
    name: "Haus Fey-Branche",
    icon: Eye,
    specialty: "Spionage, Assassinen",
    status: "Monopol auf Informationen und Gift. Unsichtbare Schatten.",
    description: "Die Augen und Ohren der Stadt. Niemand entgeht ihrem Netzwerk aus Spionen.",
    color: "chart-3"
  },
  {
    rank: 4,
    name: "Haus Duskryn",
    icon: Coins,
    specialty: "Sklavenhandel",
    status: "Kontrollieren die Sklavenmaerkte und den Transport der Desmodu.",
    description: "Verantwortlich fuer den Sklavenhandel der Stadt, einschliesslich der gefangenen Desmodu.",
    color: "chart-4"
  },
  {
    rank: 5,
    name: "Haus Vandree",
    icon: Leaf,
    specialty: "Pilzzucht, Nahrung",
    status: "Ihre Pilzfelder ernaehren alle, was ihnen enorme Macht verleiht.",
    description: "Die Ernaehrung der gesamten Stadt haengt von ihren Pilzfarmen ab.",
    color: "chart-5"
  },
  {
    rank: 6,
    name: "Haus Oblodra",
    icon: Skull,
    specialty: "Psionik (zerstoert)",
    status: "Angeblich durch Illithiden vernichtet. Ein Ueberlebender arbeitet heimlich fuer das Stille Nest.",
    description: "Einst ein maechtige Haus mit psionischen Faehigkeiten, nun weitgehend zerstoert.",
    color: "muted"
  },
  {
    rank: 7,
    name: "Haus T'orgh",
    icon: Hammer,
    specialty: "Schmiedekunst, Waffen",
    status: "Schmieden den beruechtigen Adamant-Stahl und ruesten alle Armeen aus.",
    description: "Die besten Waffenschmiede des Unterreichs, ihre Klingen sind legendaer.",
    color: "chart-1"
  },
  {
    rank: 8,
    name: "Haus Aleanrahel",
    icon: Globe,
    specialty: "Diplomatie, Aussenhandel",
    status: "Verhandeln mit anderen Staedten. Von allen misstrauisch beaeugt.",
    description: "Die Diplomaten und Haendler, die Kontakte zur Aussenwelt pflegen.",
    color: "chart-2"
  }
]

export function HousesSection() {
  const [expandedHouse, setExpandedHouse] = useState<number | null>(0)

  return (
    <section id="adelshaeuser" className="py-24 px-4 bg-card/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">Die Acht Haeuser</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Offiziell kooperieren die Haeuser im Rat. In Wahrheit intrigiert jedes Haus unablaessig gegen die anderen. 
            Buendnisse wechseln schneller als das Licht des Faerie Fire.
          </p>
          <p className="text-sm text-accent italic">
            Der Rat ist ein Schlachtfeld der Worte, vergifteten Kelche und versteckten Dolche.
          </p>
        </div>

        {/* Illithid Warning */}
        <div className="bg-accent/10 border border-accent/30 p-4 mb-8 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <span className="text-accent font-semibold">Die Mind Flayer stehen ueber dem System.</span> Sie verlangen Tribut und 
            absolute Autoritaet in allen &quot;psionischen Angelegenheiten&quot;. Ein offener Krieg wuerde die Stadt spalten.
          </p>
        </div>

        <div className="space-y-3">
          {houses.map((house, index) => {
            const Icon = house.icon
            return (
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
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-muted-foreground" />
                      <div className="text-left">
                        <h3 className="font-semibold tracking-wide">{house.name}</h3>
                        <p className="text-xs text-primary">{house.specialty}</p>
                      </div>
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
                    <p className="text-sm text-muted-foreground mb-4">{house.description}</p>
                    <div className="p-4 bg-secondary/30 border-l-2 border-primary">
                      <p className="text-xs text-muted-foreground tracking-wide mb-1">Aktuelle Lage</p>
                      <p className="text-sm text-foreground">{house.status}</p>
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
