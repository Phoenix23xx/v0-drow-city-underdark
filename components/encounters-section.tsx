"use client"

import { useState } from "react"
import { Swords, AlertTriangle, Shield, Bug, Clock, BookOpen } from "lucide-react"

const encounter1 = {
  name: "Die Strassenpatrouille",
  el: 8,
  description: "Die Spieler bewegen sich durch die Strassen von Zul'Chamber. Eine Patrouille des Hauses Baenre kontrolliert die Gassen.",
  tactics: [
    { round: "Runde 1", action: "Schuetzen werfen Dunkelheit (je eine Kugel links und rechts der Gruppe). Krieger aktivieren Feenfeuer auf den Magier." },
    { round: "Runde 2", action: "Schuetzen nutzen Schnelles Schiessen aus der Dunkelheit. Krieger trinken Spinnenklettern-Trank und laufen an den Waenden entlang." },
    { round: "Runde 3", action: "Krieger greifen den verwundetsten Gegner an. Schuetzen wechseln Position." },
    { round: "Bei Verlusten", action: "Sofortiger Rueckzug in entgegengesetzte Richtungen. Einer schreit 'Eindringlinge!' auf Drow. Innerhalb von 1W4 Runden trifft Verstaerkung ein (4 weitere Drow)." }
  ],
  enemies: [
    {
      name: "Drow-Krieger (2x)",
      cr: 5,
      stats: {
        initiative: "+4",
        ac: "19 (Beruehrung 14, auf dem falschen Fuss 15)",
        hp: "26 (4W10+4)",
        attack: "Drow-Langschwert +8 (1W8+2/19-20 + 1W6 Kaelteschaden) oder Handarmbrust +8 (1W4 + Gift)",
        special: "Gift: Drow-Gift SG 13, Schaden 1W6/1W6 temp. Geschick",
        skills: "Leise bewegen +11, Verstecken +11, Lauschen +10",
        feats: "Waffenfinesse, Kampfreflexe"
      }
    },
    {
      name: "Drow-Schuetze (2x)",
      cr: 5,
      stats: {
        initiative: "+5",
        ac: "18 (Beruehrung 15, auf dem falschen Fuss 13)",
        hp: "22 (4W8+4)",
        attack: "Drow-Langbogen +10 (1W8+3/x3) oder Kurzschwert +7 (1W6+1/19-20)",
        skills: "Leise bewegen +12, Verstecken +12, Lauschen +8",
        feats: "Praezisionsschuss, Schnelles Schiessen"
      }
    }
  ]
}

const encounter2 = {
  name: "Die Falle der Spinnenkoenigin",
  el: 10,
  description: "Viconias Falle hat funktioniert. Die Spieler folgen dem Tunnel hinter dem Schmelzofen. Sobald der letzte Spieler den Raum betritt, versiegeln magische Steinform-Tore den Eingang. In der Mitte: ein Altar aus schwarzem Obsidian, auf dem eine kopfgrosse Spinne aus lebendem Schatten sitzt.",
  quote: "\"Lolth verlangt ein Opfer. Gebt es freiwillig, oder euer Tod wird langsam sein.\"",
  tactics: [
    { round: "Phase 1 (Runde 1)", action: "Die versteckten Spinnenpriester (Verstecken +12) wirken Stille auf den lautesten Zauberer und Person festhalten auf den Nahkaempfer. Tempelwaechter werfen Dunkelheit in die Mitte." },
    { round: "Phase 2 (Runden 2-3)", action: "Riesenspinne faellt von der Decke (Ueberraschungsrunde!). Tempelwaechter stuermen mit Heftigem Angriff. Priesterin wirkt Goettliche Macht auf sich selbst." },
    { round: "Phase 3 (Runde 4)", action: "Priesterin unter 15 TP: Altar zerbirst, Schattenspinne erscheint. Sie wirft Dunkelheit und beginnt, Spieler einzeln zu betaeuben." },
    { round: "Flucht", action: "Der zerberstende Altar gibt einen engen Schacht frei, der tiefer ins Unterreich fuehrt. Tore: Magie bannen SG 22 oder 120 TP Schaden (Haerte 8)." }
  ],
  enemies: [
    {
      name: "Lolth-Priesterin (1x)",
      cr: 8,
      stats: {
        hp: "42 (8W8+8)",
        ac: "22 (Beruehrung 14, auf dem falschen Fuss 19)",
        attack: "Geissel der Spinnen +7/+2 (1W8+1 + 1W6 Saeure + Gift SG 16, 1W6/1W6 Staerke)",
        spells: "Goettliche Macht, Gift, Blindheit/Taubheit, Stille, Magie bannen, Person festhalten",
        attributes: "Str 13, Ges 16, Kon 12, Int 12, Weis 20, Cha 16"
      }
    },
    {
      name: "Schattenspinne (modifizierter Yochlol)",
      cr: 8,
      stats: {
        hp: "65 (10W8+20)",
        ac: "22 (Beruehrung 13, auf dem falschen Fuss 19)",
        attack: "8 Tentakel +13 (1W4+2 + Betaeubung SG 18, 1W4 Runden)",
        special: "Giftgas: 3m Radius, SG 18, 1W6/1W6 Weisheit (3x/Tag)",
        resistances: "SR 18, Schadensreduzierung 5/Gut, Resistenz Elektrizitaet & Feuer 10",
        tactics: "Sofort Dunkelheit wirken, aus dem Schatten heraus betaeuben, Opfer wegziehen, dann Giftgas."
      }
    }
  ]
}

const timeline = [
  { phase: "Ankunft Unterreich", content: "Reise durch 5 Unterreich-Abschnitte", pressure: "Keiner" },
  { phase: "Eintritt Zul'Chamber", content: "Einer der 3 Eingangswege waehlen", pressure: "Leicht" },
  { phase: "Stadtphase", content: "NPCs, Informanten, Tavernen, Patrouillen", pressure: "Mittel" },
  { phase: "Weg zur Mine", content: "Einer der 3 Mine-Pfade (Encounter, Auftrag, Erpressung)", pressure: "Hoch" },
  { phase: "In der Mine", content: "Kratok finden, Waechterfledermaeuse befreien", pressure: "Kritisch" },
  { phase: "Trank-Deadline", content: "24 Stunden (in-game) bis zur naechsten Transformation", pressure: "EXTREM" },
  { phase: "Massenausbruch", content: "Vulkanschacht, Desmodu in Freiheit", pressure: "Abschluss" }
]

const secrets = [
  { key: "Die Tarnung", value: "Desmodu-Trank laeuft in 24h ab - Zeitbombe" },
  { key: "Solaufein", value: "Ist eine Falle der Mind Flayer - wird niemals ein Verbuendeter" },
  { key: "Valthars Stiefel", value: "Haben blaues Desmodu-Blut - er ist ein Moerder" },
  { key: "Viconia", value: "Plant Verrat an den Spielern nach Abschluss des Auftrags" },
  { key: "Kel'Zar", value: "Der junge Drow-Diener Viconias - er warnt die Spieler" },
  { key: "Waechterfledermaeuse", value: "Muessen GLEICHZEITIG mit dem Hauptausbruch befreit werden" },
  { key: "Psionische Narbe", value: "Kontakt = Vision + Enthuellung des Stadtnamens 'ZUL'CHAMBER'" }
]

const restOptions = [
  { location: "Sicherer Zufluchtsort", method: "Rope Trick / Leomund's Tiny Hut per Magie erschaffen" },
  { location: "Soeldner-Ghetto", method: "Streng bewachtes, neutrales Viertel fuer auslaendische Haendler - kostet sehr viel Gold und einen Gefallen an Bregan D'aerthe" }
]

export function EncountersSection() {
  const [activeEncounter, setActiveEncounter] = useState<1 | 2>(1)
  const currentEncounter = activeEncounter === 1 ? encounter1 : encounter2

  return (
    <section id="begegnungen" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">Encounter-Details</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Detaillierte Kampfbegegnungen mit Taktiken und Statistiken fuer D&D 3.5.
          </p>
        </div>

        {/* Encounter Selector */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveEncounter(1)}
            className={`flex items-center gap-2 px-4 py-2 border transition-all ${
              activeEncounter === 1 ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-primary/50"
            }`}
          >
            <Swords className="w-4 h-4" />
            <span>Strassenpatrouille (EL 8)</span>
          </button>
          <button
            onClick={() => setActiveEncounter(2)}
            className={`flex items-center gap-2 px-4 py-2 border transition-all ${
              activeEncounter === 2 ? "border-accent bg-accent/10 text-accent" : "border-border text-muted-foreground hover:border-accent/50"
            }`}
          >
            <Bug className="w-4 h-4" />
            <span>Spinnenkoenigin (EL 10)</span>
          </button>
        </div>

        {/* Encounter Details */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Left: Description & Tactics */}
          <div className="space-y-6">
            <div className="bg-card border border-border p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold tracking-wide">{currentEncounter.name}</h3>
                <span className={`text-xs font-mono px-2 py-1 ${activeEncounter === 1 ? "bg-primary/20 text-primary" : "bg-accent/20 text-accent"}`}>
                  EL {currentEncounter.el}
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-4">{currentEncounter.description}</p>
              {activeEncounter === 2 && encounter2.quote && (
                <blockquote className="border-l-2 border-accent pl-4 italic text-accent text-sm">
                  {encounter2.quote}
                </blockquote>
              )}
            </div>

            <div className="bg-card border border-border p-6">
              <h4 className="font-semibold tracking-wide mb-4">Taktik</h4>
              <div className="space-y-3">
                {currentEncounter.tactics.map((tactic, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="text-xs font-mono text-primary bg-primary/10 px-2 py-1 shrink-0">{tactic.round}</span>
                    <p className="text-sm text-muted-foreground">{tactic.action}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Enemy Stats */}
          <div className="space-y-4">
            {currentEncounter.enemies.map((enemy, index) => (
              <div key={index} className="bg-card border border-border p-6">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="font-semibold tracking-wide">{enemy.name}</h4>
                  <span className="text-xs font-mono text-accent">CR {enemy.cr}</span>
                </div>
                <div className="space-y-2 text-xs">
                  {Object.entries(enemy.stats).map(([key, value]) => (
                    <div key={key} className="flex items-start gap-2">
                      <span className="text-primary font-medium capitalize w-20 shrink-0">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                      <span className="text-muted-foreground font-mono">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-card border border-border p-6 mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-primary" />
            <h3 className="text-xl font-semibold tracking-wide">Zeitplan des Abenteuers</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 pr-4 text-muted-foreground font-medium">Phase</th>
                  <th className="text-left py-2 pr-4 text-muted-foreground font-medium">Inhalt</th>
                  <th className="text-left py-2 text-muted-foreground font-medium">Zeitdruck</th>
                </tr>
              </thead>
              <tbody>
                {timeline.map((row, index) => (
                  <tr key={index} className="border-b border-border/50">
                    <td className="py-3 pr-4 font-medium">{row.phase}</td>
                    <td className="py-3 pr-4 text-muted-foreground">{row.content}</td>
                    <td className={`py-3 font-mono text-xs ${
                      row.pressure === "EXTREM" ? "text-destructive font-bold" :
                      row.pressure === "Kritisch" ? "text-accent" :
                      row.pressure === "Hoch" ? "text-chart-4" :
                      "text-muted-foreground"
                    }`}>{row.pressure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Secrets & Rest */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Secrets */}
          <div className="bg-card border border-border p-6">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-accent" />
              <h3 className="font-semibold tracking-wide">Wichtigste Geheimnisse (nur fuer DM)</h3>
            </div>
            <div className="space-y-3">
              {secrets.map((secret, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-accent font-bold text-sm">{secret.key}:</span>
                  <span className="text-sm text-muted-foreground">{secret.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Rest Options */}
          <div className="bg-card border border-border p-6">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-primary" />
              <h3 className="font-semibold tracking-wide">Ruheplatz-Optionen</h3>
            </div>
            <div className="space-y-4 mb-6">
              {restOptions.map((option, index) => (
                <div key={index} className="p-3 bg-secondary/30">
                  <p className="text-sm font-medium text-primary mb-1">{option.location}</p>
                  <p className="text-xs text-muted-foreground">{option.method}</p>
                </div>
              ))}
            </div>
            <div className="p-3 bg-destructive/10 border border-destructive/30">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-destructive shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">
                  <span className="text-destructive font-semibold">Warnung:</span> Eine normale Herberge fuer Oberflaechenbewohner ist eine Todesfalle!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
