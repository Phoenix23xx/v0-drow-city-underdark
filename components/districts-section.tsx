"use client"

import { useState } from "react"
import Image from "next/image"
import { Volume2, Eye, Skull, Sparkles, AlertTriangle } from "lucide-react"

const cityImages = [
  {
    id: "panorama",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Drow%20Bilder%201-REq9fVI6A0yCR7GdjgeIVw99HWuhHM.jpeg",
    alt: "Panorama von Zul'Chamber - Die gesamte Stadt in der gewaltigen Hoehle",
    title: "Die Grosse Hoehle",
    description: "Die Stadt erstreckt sich ueber mehrere Ebenen in einer gewaltigen Hoehle. Stalaktiten haengen von der Decke, durchzogen von violettem und gruenem Faerie Fire-Licht."
  },
  {
    id: "noble",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Drow%20Bilder%203-mnbtfATNcs7jtvDH1OxtB5zDP0tOgP.jpeg",
    alt: "Das Adelsviertel mit gothischer Architektur",
    title: "Das Adelsviertel",
    description: "Die oberen Ebenen gehoeren den Adelshauesern. Polierter Obsidian, filigrane Turmspitzen und violett leuchtende Fenster praegen das Bild. Im Hintergrund erhebt sich ein gewaltiger Wasserfall."
  },
  {
    id: "vertical",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Drow%20Bilder%204-J5UxvhLkGyYM8uVEyrXseRAVRTiume.jpeg",
    alt: "Vertikale Schluchten mit Bruecken",
    title: "Die Schluchten",
    description: "Zul'Chamber ist vertikal gebaut. Bruecken verbinden die Ebenen, waehrend in den Tiefen das rosa-violette Gluehn der Schmelzoefen und Minen schimmert."
  },
  {
    id: "crystal",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Drow%20Bilder%202-10wA4ggrOD2JX4iSaqPsbOZiqQwVsK.jpeg",
    alt: "Kristallhoehle mit zentraler Struktur",
    title: "Die Kristallgrotten",
    description: "Am Rand der Stadt liegen geheimnisvolle Kristallhoehlen mit tuerkis und violett leuchtenden Formationen. Hier wachsen die biolumineszenten Pilze und seltene Mineralien."
  },
  {
    id: "temple",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Drow%20Bilder%205-dI7whxP9MalyVwB8DJJ8Zc5A89ZLZ6.jpeg",
    alt: "Tempel der Lolth mit Spinnendesign",
    title: "Tempel der Lolth",
    description: "Das Herzstuck der Stadt: der Tempel der Spinnengoettin. Der Boden ist als gewaltiges Spinnennetz gestaltet, riesige Spinnenbeine aus Stein umrahmen den heiligen Ort."
  }
]

const professions = [
  { name: "Pilz-Kultivator", description: "Zuechtet biolumineszente Riesenpilze fuer Nahrung, Holz-Ersatz und Sporengifte. Arbeitet knietief in organischem Duenger aus Sklaven-Faekalien." },
  { name: "Spinnen-Melker", description: "Extrahiert hochgiftiges Sekret aus den Beisswerkzeugen von Riesenspinnen. Traegt saeureresistente Lederkleidung, hat vernarbte, zitternde Haende." },
  { name: "Netz-Weber", description: "Verarbeitet Lolth-Spinnen-Seide zu Kleidung, Ruestungskomponenten oder elastischen Haengebruecken fuer die oberen Stadtringe." },
  { name: "Fleisch-Former", description: "Braut die Traenke der Fleischformung fuer die Desmodu-Tarnung. Riecht permanent nach verbranntem Horn und scharfen Saeuren." },
  { name: "Echsen-Hirte", description: "Treibt riesige Pack-Echsen durch die Gassen. Dienen als Transportmittel und Fleischquelle fuer die Oberschicht." },
  { name: "Sklaven-Graveur", description: "Brennt magische Runen oder Brandzeichen in die Haut der Sklaven, um Besitzer-Haeuser zu markieren und Flucht zu verhindern." },
  { name: "Schatten-Schmied", description: "Schmiedet Waffen aus Drow-Stahl (Adamant-Legierungen), der im Sonnenlicht zerfaellt, im Unterreich aber schaerfer als Diamant ist." },
  { name: "Opfer-Vorbereiter", description: "Ein niederer Tempeldiener, der Gefangene rasiert, waescht und mit Laehmungsgiften einsprueht fuer Rituale zu Lolth." },
  { name: "Echo-Lauscher", description: "Wachen, die an Hoehlendecken sitzen und Hoehrrohre nutzen, um Erschuetterungen oder geheime Absprachen in tiefen Gassen aufzuspueren." },
  { name: "Toten-Verwerter", description: "Sammelt Leichen verbrauchter Sklaven ein. Fuettert sie an Riesenspinnen-Brut oder uebergibt sie Nekromanten fuer Zombiarbeit in den Minen." }
]

const atmosphere = {
  smells: [
    "Stechende Giftchemikalien",
    "Weihrauch",
    "Sklavenschweiss",
    "Ranziges Pilzbier"
  ],
  sounds: [
    "Fernes Peitschenknallen",
    "Das Zischen von Riesenspinnen",
    "Das monotone Summen von Gebeten"
  ],
  dangers: [
    "Drow besitzen Dunkelsicht auf 36 m",
    "Die Spieler sind in der Dunkelheit taghell sichtbar",
    "Jedes Fluestern faellt auf"
  ]
}

export function DistrictsSection() {
  const [activeImage, setActiveImage] = useState(cityImages[0])

  return (
    <section id="stadt" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">Die Drow-Stadt: Zul&apos;Chamber</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Drow-Staedte sind keine Ansammlungen von Gebaeuden, sondern architektonische Meisterwerke, 
            die in gigantische Hoehlensysteme gemeisselt wurden.
          </p>
        </div>

        {/* City Description */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-card border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="w-5 h-5 text-primary" />
              <h3 className="font-semibold tracking-wide">Vertikalitaet</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Haeuser haengen wie steinerne Stalaktiten von der Decke oder winden sich als filigrane Tuerme an Stalagmiten empor. 
              Es gibt kaum Gelaender - Drow haben keine Hoehenangst.
            </p>
          </div>

          <div className="bg-card border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-5 h-5 text-primary" />
              <h3 className="font-semibold tracking-wide">Das Licht</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Es gibt keine Fackeln. Die Stadt badet in einem unheimlichen, kalten Leuchten aus violetter und gruener 
              Faerie Fire-Magie und biolumineszenten Pilzen.
            </p>
          </div>

          <div className="bg-card border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <Skull className="w-5 h-5 text-primary" />
              <h3 className="font-semibold tracking-wide">Das Material</h3>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Alles besteht aus poliertem, schwarzem Obsidian oder vulkanischem Glas. Ueberall sind Spinnenmotive, 
              Netze aus Silberdraht und Darstellungen von Lolth eingemeisselt.
            </p>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center tracking-wide">Bereiche der Stadt</h3>
          
          {/* Main Image */}
          <div className="relative aspect-video mb-4 bg-card border border-border overflow-hidden">
            <Image
              src={activeImage.src}
              alt={activeImage.alt}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background/90 to-transparent p-6">
              <h4 className="text-xl font-semibold text-foreground mb-2">{activeImage.title}</h4>
              <p className="text-sm text-muted-foreground">{activeImage.description}</p>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-5 gap-2">
            {cityImages.map((img) => (
              <button
                key={img.id}
                onClick={() => setActiveImage(img)}
                className={`relative aspect-video overflow-hidden border-2 transition-all ${
                  activeImage.id === img.id ? "border-primary" : "border-border hover:border-primary/50"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Atmosphere */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-card border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <Volume2 className="w-5 h-5 text-primary" />
              <h3 className="font-semibold tracking-wide">Gerueche</h3>
            </div>
            <ul className="space-y-2">
              {atmosphere.smells.map((smell, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-primary">&bull;</span>
                  {smell}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <Volume2 className="w-5 h-5 text-primary" />
              <h3 className="font-semibold tracking-wide">Akustik</h3>
            </div>
            <ul className="space-y-2">
              {atmosphere.sounds.map((sound, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-primary">&bull;</span>
                  {sound}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-card border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <AlertTriangle className="w-5 h-5 text-accent" />
              <h3 className="font-semibold tracking-wide">Paranoia</h3>
            </div>
            <ul className="space-y-2">
              {atmosphere.dangers.map((danger, index) => (
                <li key={index} className="text-sm text-muted-foreground flex items-center gap-2">
                  <span className="text-accent">&bull;</span>
                  {danger}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Moral Warning */}
        <div className="bg-accent/10 border border-accent/30 p-6 mb-16">
          <h4 className="text-lg font-semibold text-accent mb-2">Fremdartige Logik</h4>
          <p className="text-muted-foreground">
            Mitleid ist ein Verbrechen. Wenn ein Sklave zusammenbricht, hilft ihm niemand - 
            er wird an Ort und Stelle erstochen, und die Passanten gehen ungeruehrt weiter.
          </p>
        </div>

        {/* Professions */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center tracking-wide">10 alltaegliche Berufe in Zul&apos;Chamber</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {professions.map((prof, index) => (
              <div key={index} className="bg-card border border-border p-4">
                <h4 className="font-semibold text-primary text-sm mb-2">{prof.name}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{prof.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
