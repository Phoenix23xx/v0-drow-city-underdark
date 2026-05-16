"use client"

import { useState } from "react"
import { Mountain, Wind, Leaf, Brain, VolumeX, AlertTriangle } from "lucide-react"

const journeyAspects = [
  {
    id: "vertical",
    name: "Vertikale Narbe",
    subtitle: "Der Aufstieg",
    icon: Mountain,
    description: "Der Tunnel endet nicht vor euch, sondern ueber euch. Ein natuerlicher Schacht, wie der Schlund eines steinernen Giganten, bohrt sich in die Dunkelheit. Von oben weht ein warmer, nach Schwefel riechender Wind herab. Die Waende sind mit messerscharfen, schwarzen Vulkanglas-Adern durchzogen. Der einzige Weg nach oben fuehrt ueber eine alte Drow-Leiter aus verflochtenen, aber immer noch klebrigen Spinnenseide-Straengen.",
    challenge: "Kletterherausforderung",
    mechanic: "Ein Sturz bedeutet nicht nur physischen Schaden, sondern Absturz in ein tieferes Hoehlensystem. Die klebrige Leiter enthaelt alte Alchemikalien, die bei Beruehrung eine betaeubende Wirkung entfalten koennen."
  },
  {
    id: "breathing",
    name: "Der atmende Durchlass",
    subtitle: "Lebendiges Gestein",
    icon: Wind,
    description: "Vor euch liegt ein Korridor aus organisch anmutenden, uebereinander gestapelten, tellerfoermigen Kalksinterbecken. In scheinbar zufaelligen Abstaenden stossen unsichtbare Spalten in den Waenden ploetzlich einen Schwall eiskalten, sauerstoffarmen Gases aus, nur um ihn gleich darauf mit einem pfeifenden Geraeusch wieder einzusaugen. Der gesamte Gang pulsiert wie eine riesige Kiemenoeffnung.",
    challenge: "Umwelt-Falle",
    mechanic: "Die Spieler muessen den Rhythmus studieren und im richtigen Moment von einer Deckung zur naechsten sprinten. Wer von einem Gasstoss ueberrascht wird, erleidet Erschoepfungszustaende durch Sauerstoffmangel."
  },
  {
    id: "mykonid",
    name: "Die Mykoniden-Bruecke",
    subtitle: "Der Koloss-Pilz",
    icon: Leaf,
    description: "Der Abgrund vor euch ist an die hundert Meter breit, aber eine natuerliche Bruecke ueberspannt ihn - ein einziger, horizontal gewachsener Koloss-Pilz von der Dicke eines Turmes. Seine Oberflaeche ist von Tausenden winziger, pulsierender Leuchtporen ueberzogen, die ein sanftes, blaues Licht abgeben. Am Fusse des Brueckenkopfes hocken vier stumme, vage humanoide Pilzwesen - Mykoniden. Sie blockieren den Weg nicht, aber ihre grossen, traurigen Augen starren euch erwartungsvoll an.",
    challenge: "Rollenspiel-Begegnung",
    mechanic: "Die Mykoniden verlangen eine 'Gabe der Erinnerung' - eine Geschichte, ein Lied von der Oberwelt oder eine einzelne, freiwillig geopferte psionische Energie (geringer Verlust an Weisheit oder eines Zauberslots). Wer einfach so ueberlaeuft, ruft auf der anderen Seite eine aggressive Kreatur herbei."
  },
  {
    id: "psionic",
    name: "Der Psionische Sumpf",
    subtitle: "Toter Winkel der Schoepfung",
    icon: Brain,
    description: "Der Boden unter euren Fuessen wird weich und schwammig, nicht von Wasser, sondern von einer dicken, grauen Masse, die an zerfallendes Hirngewebe erinnert. In diesem Gebiet wachsen keine Pilze, keine Flechten. Es ist ein toter Winkel der Schoepfung. Hin und wieder seht ihr stumme, reglose Humanoide - perfekt erhaltene Leichen, deren Gesichter in einem Ausdruck absoluter, zeitloser Ekstase erstarrt sind.",
    challenge: "Willenswurf jede Minute",
    mechanic: "Bei Scheitern: Verwirrung. Die Spieler werden in die gefaehrliche Mitte des Sumpfes gezogen, wo ein uralter Brainrock als Brennpunkt dient und aktiv Gedanken anzapft."
  },
  {
    id: "silence",
    name: "Der Tunnel der verlorenen Schritte",
    subtitle: "Beaengstigende Stille",
    icon: VolumeX,
    description: "Ihr betretet ein Labyrinth aus peroesem, staubigem Bimsstein. Jedes Geraeusch - das Rascheln eurer Kleidung, ein gefluestertes Wort - wird sofort absorbiert. Es gibt keinen Hall, keine Echos. Es herrscht eine beaengstigende, wattige Stille. Nur ein Geraeusch durchdringt sie: Ein bestaendiges, entferntes Tropfen, das jedoch nie naeher kommt, egal wie weit ihr geht.",
    challenge: "Zusammenhalt",
    mechanic: "Die Spieler muessen sich aneinander festbinden, um sich nicht zu verlieren. Die Stille zieht einen Dark Stalker an, der darauf spezialisiert ist, Nachzuegler lautlos zu packen und in eine Nebenhoehle zu zerren."
  }
]

const entryPaths = [
  {
    name: "Der Sklaventransport",
    type: "Taeuschung / Diebeskunst",
    description: "Die Spieler fangen einen Drow-Sklavenhaendler-Konvoi ausserhalb der Stadt ab. Mithilfe von Zaubern wie Alter Self oder hohen Wuerfen auf Verkleiden uebernehmen sie die Rollen der Drow-Wachen. Die restlichen Party-Mitglieder mimen die Sklaven in Ketten."
  },
  {
    name: "Die Schmuggel-Routen",
    type: "Erkundung",
    description: "Ein Desmodu-Spaeher zeigt den Spielern einen gefaehrlichen, engen Vulkanschacht, der direkt in die Kanalisation der Stadt fuehrt. Die Herausforderung: Der Schacht ist so eng, dass Ruestungen abgelegt werden muessen, und er wird von wilden Monstern bewohnt."
  },
  {
    name: "Das diplomatische Soeldner-Mandat",
    type: "Rollenspiel",
    description: "Da die Drow-Haeuser im staendigen Clinch liegen, reisen die Spieler offen als hochrangige Oberflaechen-Soeldner an. Sie bieten Haus Xorlarrin ihre Dienste an, um Zugang zu den oberen Raengen der Stadt zu erhalten und von dort aus die Minen zu infiltrieren."
  }
]

const minePaths = [
  {
    name: "Der Sklaven-Strafdienst",
    type: "Direkte Konsequenz",
    description: "Die Spieler verstossen gegen ein Gesetz (Beruehren einer heiligen Spinne, Schlaegerei). Statt Hinrichtung: 10 Tage Strafarbeit in den tiefsten Edelsteinminen. Sie werden entwaffnet (Ausruestung im Aufseherbuero) und direkt in das Minensegment der Desmodu transportiert."
  },
  {
    name: "Das Kopfgeld auf den 'Entflohenen Drow'",
    type: "Auftrag",
    description: "Ein Drow-Haus heuert die Spieler an: Ein 'wertvoller Sklave' (ein Desmodu, dessen Trank nachgelassen hat) ist in die tiefen Schaechte entkommen. Sie erhalten eine Passierkarte und muessen in die unkartierten Schaechte - dort finden sie die Desmodu-Widerstandszelle."
  },
  {
    name: "Die psionische Erpressung der Mind Flayer",
    type: "Dilemma",
    description: "Ein Intellect Devourer (im Koerper einer Drow-Wache) faengt die Spieler ab. Die Mind Flayer erpressen die Gruppe: Entweder sie gehen in die Minen, finden heraus, was die Drow dort verstecken, und manipulieren die Belueftungsanlage - oder sie werden mit der gesamten Stadtgarde gejagt."
  }
]

export function UnderreichSection() {
  const [activeAspect, setActiveAspect] = useState(journeyAspects[0])

  return (
    <section id="unterreich" className="py-24 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">Die Reise durch das Unterreich</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Das Unterreich ist kein Wald. Es gibt keine Strassen, kein Wetter, keine Sonne. 
            Bewegung ist dreidimensional, oft klaustrophobisch und logistisch extrem fordernd.
          </p>
        </div>

        {/* Journey Aspects */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold mb-6 text-center tracking-wide">Die fuenf Aspekte der Reise</h3>
          
          {/* Aspect Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {journeyAspects.map((aspect) => {
              const Icon = aspect.icon
              return (
                <button
                  key={aspect.id}
                  onClick={() => setActiveAspect(aspect)}
                  className={`flex items-center gap-2 px-3 py-2 border transition-all text-xs sm:text-sm ${
                    activeAspect.id === aspect.id
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border text-muted-foreground hover:border-primary/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{aspect.name}</span>
                  <span className="sm:hidden">{aspect.subtitle.split(" ")[0]}</span>
                </button>
              )
            })}
          </div>

          {/* Active Aspect Detail */}
          <div className="bg-background border border-border p-6 md:p-8">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-primary/10 text-primary">
                <activeAspect.icon className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold tracking-wide">{activeAspect.name}</h4>
                <p className="text-sm text-primary">{activeAspect.subtitle}</p>
              </div>
            </div>

            <blockquote className="border-l-2 border-primary pl-4 mb-6 italic text-muted-foreground leading-relaxed">
              {activeAspect.description}
            </blockquote>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-4 bg-secondary/30">
                <p className="text-xs text-primary tracking-wide mb-1">Herausforderung</p>
                <p className="text-sm font-medium">{activeAspect.challenge}</p>
              </div>
              <div className="p-4 bg-accent/10 border border-accent/30">
                <p className="text-xs text-accent tracking-wide mb-1">Mechanik</p>
                <p className="text-sm text-muted-foreground">{activeAspect.mechanic}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Entry Paths */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-6 tracking-wide">Drei Wege in die Stadt</h3>
            <div className="space-y-4">
              {entryPaths.map((path, index) => (
                <div key={index} className="bg-background border border-border p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold tracking-wide">{path.name}</h4>
                    <span className="text-xs text-primary px-2 py-1 bg-primary/10">{path.type}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{path.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 tracking-wide">Drei Wege zur Mine</h3>
            <div className="space-y-4">
              {minePaths.map((path, index) => (
                <div key={index} className="bg-background border border-border p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold tracking-wide">{path.name}</h4>
                    <span className="text-xs text-accent px-2 py-1 bg-accent/10">{path.type}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{path.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dilemma Warning */}
        <div className="bg-accent/10 border border-accent/30 p-6">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-accent shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-accent mb-2">Das Dilemma</h4>
              <p className="text-muted-foreground">
                Die Spieler entdecken die Desmodu und muessen entscheiden: Gehorchen sie den Mind Flayern 
                oder verbuenden sie sich mit den Fledermausmenschen?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
