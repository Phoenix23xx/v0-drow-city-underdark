"use client"

import { useState } from "react"
import { MapPin, Shield, Eye, Skull } from "lucide-react"

const districts = [
  {
    id: "oberstadt",
    name: "Qu'ellarz'orl",
    subtitle: "Die Hohen Hoehlen",
    icon: Eye,
    security: "Hoechste Stufe",
    lighting: "Violettes Continual Flame",
    description: "Die Oberstadt thront auf natuerlichen Felspfeilern und ist nur ueber magisch gesicherte Bruecken erreichbar. Hier residieren die Adelshaeuser und die Hohepriesterin.",
    locations: [
      "Tempel der Lolth - Ein achteckiges Gebaeude mit dem grossen Spinnenaltar",
      "Turm von Haus Baenre - Hoechstes Gebaeude der Stadt",
      "Das Auge des Schattens - Magisches Observatorium"
    ],
    color: "primary"
  },
  {
    id: "mittelstadt",
    name: "Duthcloim",
    subtitle: "Der Mittlere Weg",
    icon: Shield,
    security: "Regelmaessige Patrouillen",
    lighting: "Blaues und rotes Faulicht",
    description: "Das pulsierende Herz der Stadt, wo Handel, Religion und Militaer aufeinandertreffen. Geschaeftiges Treiben, gedaempfte Stimmen, Misstrauen ueberall.",
    locations: [
      "Der Schwarze Basar - Sklavenmarkt und Handelszentrum",
      "Kaserne der Hauswaffen - Ausbildungsstaette fuer Krieger",
      "Haus der Gifte - Alchemieladen mit zweifelhaftem Ruf",
      "Die Schallbruecke - Verbindung zur Unterstadt"
    ],
    color: "accent"
  },
  {
    id: "unterstadt",
    name: "Braeryn",
    subtitle: "Das Elendsviertel",
    icon: Skull,
    security: "Minimal",
    lighting: "Schwaches gruenes Pilzleuchten",
    description: "Ein Labyrinth aus verfallenen Gebaeuden, Abwasserkanaelen und vergessenen Ruinen. Hier leben Sklaven, Ausgestossene und Verzweifelte.",
    locations: [
      "Die Sklavenbaracken - Ueberfuellte Unterkuenfte",
      "Ruinen von Haus Oblodra - Versteck des Magiers Szordrin",
      "Die Versteckten Kanaele - Geheime Schleicherpfade"
    ],
    color: "muted"
  },
  {
    id: "verborgen",
    name: "Velkyn Vel'bol",
    subtitle: "Die Schatten-Zwischen-Welt",
    icon: MapPin,
    security: "Unbekannt",
    lighting: "Unwirklich, verschwommen",
    description: "Ein geheimer Bereich, nur Eingeweihten bekannt, mit direkter Anbindung an die Schattenebenen. Zugang nur durch den Schwarzen Spiegel oder geheime Portale.",
    locations: [
      "Der Schwarze Spiegel - Portal zur Schattenebene",
      "Schrein der Vergessenen - Ort fuer verbotene Rituale"
    ],
    color: "primary"
  }
]

export function DistrictsSection() {
  const [activeDistrict, setActiveDistrict] = useState(districts[0])

  return (
    <section id="viertel" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">Die Vier Viertel</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Die Stadt erstreckt sich ueber mehrere Ebenen - von den praechtigen Tuermen der Adelshaeuser bis hinab zu den verrottenden Ruinen der Unterstadt.
          </p>
        </div>

        {/* District tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {districts.map((district) => {
            const Icon = district.icon
            return (
              <button
                key={district.id}
                onClick={() => setActiveDistrict(district)}
                className={`flex items-center gap-2 px-4 py-2 border transition-all tracking-wide text-sm ${
                  activeDistrict.id === district.id
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden sm:inline">{district.name}</span>
                <span className="sm:hidden">{district.subtitle.split(" ")[0]}</span>
              </button>
            )
          })}
        </div>

        {/* Active district details */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="bg-card border border-border p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 text-primary">
                <activeDistrict.icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-wide">{activeDistrict.name}</h3>
                <p className="text-primary text-sm tracking-widest">{activeDistrict.subtitle}</p>
              </div>
            </div>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              {activeDistrict.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-4 bg-secondary/50">
                <p className="text-xs text-muted-foreground tracking-wide mb-1">Sicherheit</p>
                <p className="text-sm font-medium">{activeDistrict.security}</p>
              </div>
              <div className="p-4 bg-secondary/50">
                <p className="text-xs text-muted-foreground tracking-wide mb-1">Beleuchtung</p>
                <p className="text-sm font-medium">{activeDistrict.lighting}</p>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border p-8">
            <h4 className="text-lg font-semibold mb-6 tracking-wide">Wichtige Orte</h4>
            <ul className="space-y-4">
              {activeDistrict.locations.map((location, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="w-6 h-6 flex items-center justify-center bg-primary/10 text-primary text-xs font-bold shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-muted-foreground text-sm leading-relaxed">{location}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
