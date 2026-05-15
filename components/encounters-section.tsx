import { Swords, AlertTriangle } from "lucide-react"

const standardPatrol = {
  el: 8,
  creatures: [
    { name: "Drow-Krieger (Ftr 3)", count: "2-4", tactic: "Flanking, Vergiftete Klingen" },
    { name: "Drow-Priesterin (Clr 5)", count: "1", tactic: "Faerie Fire, dann Darkness" },
    { name: "Riesenspinne (Large)", count: "1", tactic: "Web, dann Biss" }
  ]
}

const elitePatrol = {
  el: 10,
  creatures: [
    { name: "Drow-Krieger (Ftr 5)", count: "4", tactic: "" },
    { name: "Drow-Priesterin (Clr 7)", count: "1", tactic: "" },
    { name: "Drow-Spaeher (Rog 4)", count: "1", tactic: "mit Wand of Web" },
    { name: "Riesenspinnen", count: "2", tactic: "" }
  ]
}

const alarmTable = [
  { roll: "01-30", result: "Keine Verstaerkung" },
  { roll: "31-50", result: "+2 Drow-Krieger" },
  { roll: "51-70", result: "+1 Priesterin + Spinne" },
  { roll: "71-85", result: "Elitepatrouille (EL 10)" },
  { roll: "86-00", result: "Hausmagier (Wiz 8) mit Wand of Web" }
]

const escapeRoutes = [
  { route: "Haupttor", difficulty: "EL 12+", risk: "Extrem hoch - Elitepatrouille" },
  { route: "Versteckte Kanaele", difficulty: "DC 25 Survival", risk: "Mittel - Schlammgolems" },
  { route: "Duergar-Tunnel", difficulty: "500 GM Bestechung", risk: "Gering - aber Schulden bei Grimnak" },
  { route: "Schattenportal", difficulty: "Raetsel loesen", risk: "Unbekannt - Schattenebene!" }
]

export function EncountersSection() {
  return (
    <section id="begegnungen" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">Patrouillen & Begegnungen</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Zufallsbegegnungen und Alarmtabellen fuer Kaempfe in der Stadt.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Standard Patrol */}
          <div className="bg-card border border-border p-6">
            <div className="flex items-center gap-3 mb-6">
              <Swords className="w-6 h-6 text-primary" />
              <div>
                <h3 className="font-semibold tracking-wide">Standardpatrouille</h3>
                <span className="text-xs text-primary font-mono">EL {standardPatrol.el}</span>
              </div>
            </div>

            <div className="space-y-3">
              {standardPatrol.creatures.map((creature, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary/30">
                  <div>
                    <p className="font-medium text-sm">{creature.name}</p>
                    {creature.tactic && (
                      <p className="text-xs text-muted-foreground">{creature.tactic}</p>
                    )}
                  </div>
                  <span className="text-primary font-mono text-sm">{creature.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Elite Patrol */}
          <div className="bg-card border border-border p-6">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="w-6 h-6 text-accent" />
              <div>
                <h3 className="font-semibold tracking-wide">Elitepatrouille</h3>
                <span className="text-xs text-accent font-mono">EL {elitePatrol.el}</span>
              </div>
            </div>

            <div className="space-y-3">
              {elitePatrol.creatures.map((creature, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-secondary/30">
                  <div>
                    <p className="font-medium text-sm">{creature.name}</p>
                    {creature.tactic && (
                      <p className="text-xs text-muted-foreground">{creature.tactic}</p>
                    )}
                  </div>
                  <span className="text-accent font-mono text-sm">{creature.count}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Alarm Table */}
        <div className="bg-card border border-border p-6 mb-12">
          <h3 className="font-semibold tracking-wide mb-4">Alarmtabelle (alle 2-4 Runden im Kampf)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 text-muted-foreground font-medium w-24">W%</th>
                  <th className="text-left py-2 text-muted-foreground font-medium">Verstaerkung</th>
                </tr>
              </thead>
              <tbody>
                {alarmTable.map((row, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-3 pr-4 font-mono text-primary">{row.roll}</td>
                    <td className="py-3 text-foreground">{row.result}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Escape Routes */}
        <div className="bg-card border border-border p-6">
          <h3 className="font-semibold tracking-wide mb-4">Fluchtmoeglichkeiten</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {escapeRoutes.map((route, index) => (
              <div key={index} className="p-4 bg-secondary/30 border-l-2 border-primary">
                <p className="font-medium text-sm mb-1">{route.route}</p>
                <p className="text-xs text-primary font-mono mb-2">{route.difficulty}</p>
                <p className="text-xs text-muted-foreground">{route.risk}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
