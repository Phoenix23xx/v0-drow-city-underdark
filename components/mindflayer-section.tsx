"use client"

import { useState } from "react"
import { Brain, Eye, Bug, Skull, AlertTriangle, Clock, Shield, Target } from "lucide-react"

const psionicServants = [
  { name: "Intellektverschlinger", source: "MM I", role: "Perfekte Spione. Steuern die Koerper wichtiger Drow-Hausdiener." },
  { name: "Gehirn im Glas", source: "MM V", role: "Schwebende, untote Gehirne als psionische Alarmanlagen an Zugaengen." },
  { name: "Urophion", source: "MM II", role: "Von Illithiden gezuechteter Roper. Tarnt sich als Stalaktit - lebende Ueberwachungskamera." },
  { name: "Gedankenschinder", source: "MM I / XPH", role: "Die Herren selbst. Zirkel von 3-5 Illithiden, die die Faeden ziehen." },
  { name: "Phaerlock", source: "MM V", role: "Reptilienartige, psionisch begabte Sklaven. Schwere Schocktruppen und Torwachen." },
  { name: "Hirnratten-Schwarm", source: "MM II / XPH", role: "Schwaerme psionischer Ratten. Durchstreifen Tunnel, melden telepathisch." },
  { name: "Hirnverschlinger-Puppe", source: "MM IV", role: "Kann mehrere Wirte gleichzeitig kontrollieren. Steuert ganze Familien." },
  { name: "Neothelid", source: "XPH / MM II", role: "Riesige Wurmlarve, in versiegeltem Schacht gefangen. Biologische Waffe." },
  { name: "Kristall-Schrecken", source: "MM IV", role: "Lebt an Gebietsgrenzen. Sendet unhoerbaren psionischen Alarm bei Eindringlingen." },
  { name: "Illithiden-Kultist (Thoon)", source: "MM V", role: "Wahnsinniger Drow der Illithiden als Goetter verehrt. Traegt Tentakelmaske." }
]

const viconiaPhases = [
  {
    phase: "Phase 1: Vor dem Sturm",
    items: [
      {
        title: "Die gefaelschte Korrespondenz",
        content: "Viconia hat ueber Monate hinweg Briefe gefaelscht, geschrieben im gestohlenen Siegel der laengst toten Abenteurergilde 'Hand des Silbersterns'. Diese Briefe enthalten detaillierte Karten der Stadt, Schwachstellen der Mind Flayer-Station und Namen von Kollaborateuren (allesamt Viconias Rivalen). Der letzte Brief: 'Zerstoert die Tintenfische. Wir haben euch den Weg geebnet.'"
      },
      {
        title: "Der praeperierte Zeuge",
        content: "Drow-Diener 'Ryltar' wurde durch psionische Folter programmiert. Unter Zone der Wahrheit wird er aussagen, er habe die Spieler seit Wochen beim Planen des Anschlags beobachtet. Ryltar glaubt seine Luege selbst - selbst Illithiden finden in seinem Gehirn nur diese falsche Wahrheit."
      },
      {
        title: "Das doppelte Spiel",
        content: "Viconia hat vor drei Tagen anonym eine Nachricht an die Mind Flayer geschickt, die vor 'Oberflaechen-Agenten' warnte. Als die Spieler nun auftauchen, erscheint ihre Warnung als prophetisch - die Illithiden sind bereits alarmiert."
      }
    ]
  },
  {
    phase: "Phase 2: Waehrend des Angriffs",
    items: [
      {
        title: "Die falsche Fluchthilfe (FALLE!)",
        content: "'Matronenmutter Viconia hat einen geheimen Fluchttunnel fuer euch vorbereitet. Er beginnt hinter dem Schmelzofen im Alchemistenviertel. Beeilt euch, die Stadtwache rueckt aus!' - Der Tunnel fuehrt nicht ins Freie, sondern in ein vorbereitetes Gefaengnis unter ihrem Turm."
      },
      {
        title: "Die inszenierte Trauer",
        content: "Viconia fuegt sich selbst eine schwere, aber nicht toedliche Saeureveraetzung am Arm zu. Damit 'beweist' sie, dass sie von den Spielern angegriffen wurde, als sie versuchte, die Mind Flayer zu warnen."
      },
      {
        title: "Die geopferte Schwester",
        content: "Viconia gibt ihrer eigenen aelteren Schwester (der amtierenden Matronenmutter) falsche Informationen ueber die Spieler-Position. Die Schwester laeuft direkt in die Arme der revoltierenden Desmodu. Viconias 'Opfer' laesst sie als Maertyrerin erscheinen."
      }
    ]
  },
  {
    phase: "Phase 3: Nach dem Sturm",
    items: [
      {
        title: "Die Anklagerede",
        content: "Viconia beruft eine Dringlichkeitssitzung des Rates ein. Sie praesentiert: die gefaelschten Briefe, den Zeugen Ryltar, ihre eigene Wunde und die Leiche ihrer Schwester. Dazu ein gestohlener Gedankenspur-Kristall, aufgeladen mit psionischer Energie der Spieler - zur 'Jagdhilfe' fuer die Mind Flayer."
      }
    ]
  }
]

const mineAspects = [
  {
    title: "Die blutige Spur der Transformation",
    description: "In einer engen Seitengasse nahe dem Sklavenmarkt liegt eine zuckende, kaum noch lebende Gestalt eines Sklaven. Seine Haut ist aschfahl und rissig, darunter schimmern fledermausartige Zuege und braunes Fell hervor. Seine Knochen knacken und verschieben sich sichtbar - der Trank der Fleischformung laesst nach.",
    mechanic: "Wurf auf Alchemie oder Survival: Der Trank wird nur in grossen Mengen in den Tiefenminen hergestellt. Wurf auf Move Silently + Listen: Man hoert gedaempfte Fledermauslaute aus dem versiegelten Tunnel."
  },
  {
    title: "Der stumme Waechter: Kratok",
    description: "Einer der getarnten Desmodu ist ein uralter Krieger namens Kratok. Seine Echoortung ist so geschaerft, dass er 'hoeren' kann, dass die Spieler keine Drow sind - ihr Herzschlag, die Zusammensetzung ihres Blutes verraet sie.",
    mechanic: "Kontaktaufnahme: Er zeichnet im Staub ein Bild - eine Fledermaus, die ihre Ketten sprengt."
  },
  {
    title: "Die psionische Narbe",
    description: "An einer Wand im Schlafquartier der Desmodu ist ein gewaltiger, schwarzer Fleck, durchzogen von einem Spinnennetz aus violetten Rissen - ein Echo des Tages, als die Mind Flayer erstmals hier eindrangen und Desmodu-Kinder extrahierten.",
    mechanic: "Effekt: Jeder, der diese Wand beruehrt, erlebt eine gestochene Vision: laehmende Angst der Opfer, der kalte, metallische Geschmack eines Gedankenschinder-Tentakels, und ein einzelnes, klares Wort: 'ZUL'CHAMBER'."
  }
]

export function MindFlayerSection() {
  const [activePhase, setActivePhase] = useState(0)

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">Oryx-Phal - Die Gedankenschinder</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Die wahren Herrscher hinter den Kulissen. Diese Informationen sind nur fuer den Spielleiter bestimmt.
          </p>
        </div>

        {/* DM Warning */}
        <div className="bg-accent/10 border border-accent/30 p-4 mb-12 flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-accent shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground">
            <span className="text-accent font-semibold">Nur fuer DM:</span> Diese Beschreibung nutzt du, wenn ein Spieler maechtige 
            Hellsichtigkeitsmagie einsetzt oder wenn die Drow-Informanten ueber die Illithiden sprechen.
          </p>
        </div>

        {/* Oryx-Phal Description */}
        <div className="bg-card border border-border p-8 mb-12">
          <h3 className="text-xl font-semibold mb-6 text-primary tracking-wide">Die wahre Beschreibung von Oryx-Phal</h3>
          <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground leading-relaxed">
            &quot;Die Heimat der Gedankenschinder - Oryx-Phal - liegt jenseits des physischen Gesteins in einer gefalteten Tasche 
            des Unterreichs, wo der Raum wie nasses Tuch nachgibt. Die Architektur ist nicht gemauert, sondern organisch gewachsen: 
            gigantische, kalkweiss glaenzende Tuerme, die an die Wirbelsaeulen kolossaler Urwesen erinnern, streben in eine absolute, 
            sternenlose Schwaerze. Ein permanenter, unterschwelliger Psi-Sinn-Sturm liegt in der Luft - ein Summen, das ungeschuetzte 
            Gehirne zum Bluten bringt und wie der Geschmack von verfaultem Kupfer auf der Zunge liegt. Im Zentrum der Metropole 
            schwimmt das Aeltesten-Gehirn (Elder Brain) in einem gewaltigen See aus phosphoreszierender, zaehfluessiger Naehrloesung.&quot;
          </blockquote>
        </div>

        {/* The Silent Nest */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-card border border-border p-6">
            <div className="flex items-center gap-3 mb-4">
              <Brain className="w-6 h-6 text-primary" />
              <h3 className="font-semibold tracking-wide">Das Stille Nest (in Zul&apos;Chamber)</h3>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Die Illithiden haben einen schwebenden Aussenposten errichtet - &quot;Das Stille Nest&quot; - der 100 Meter ueber der Stadt 
              an der Hoehlendecke haengt, verankert mit organischen, seilartigen Straengen aus gehaertetem Schleim.
            </p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">Zugang:</span>
                <span className="text-muted-foreground">Nur ueber psionische Levitation oder eine schmale Treppe aus Knochen, die nur auf telepathischen Befehl erscheint.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">Tarnung:</span>
                <span className="text-muted-foreground">Ein permanenter Gedankenschleier laesst das Nest aus der Stadt wie eine natuerliche Felsformation wirken.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary font-bold">Verhalten:</span>
                <span className="text-muted-foreground">Die Illithiden verlassen das Nest nur zu rituellen Gedankenernten oder um Gefangene persoenlich zu verhoeren.</span>
              </li>
            </ul>
          </div>

          {/* Psionic Servants Table */}
          <div className="bg-card border border-border p-6">
            <h3 className="font-semibold tracking-wide mb-4">10 Psionische Diener (MM 1-5)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 pr-2 text-muted-foreground font-medium">Wesen</th>
                    <th className="text-left py-2 pr-2 text-muted-foreground font-medium">Quelle</th>
                    <th className="text-left py-2 text-muted-foreground font-medium">Rolle</th>
                  </tr>
                </thead>
                <tbody>
                  {psionicServants.map((servant, index) => (
                    <tr key={index} className="border-b border-border/50">
                      <td className="py-2 pr-2 text-primary font-medium">{servant.name}</td>
                      <td className="py-2 pr-2 text-muted-foreground font-mono">{servant.source}</td>
                      <td className="py-2 text-muted-foreground">{servant.role}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Viconia's Plan */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold tracking-wide mb-2">Viconias perfider Plan</h3>
            <p className="text-muted-foreground">Die Schuldverschiebung - Eine Meisterin der Manipulation</p>
          </div>

          {/* Phase Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {viconiaPhases.map((phase, index) => (
              <button
                key={index}
                onClick={() => setActivePhase(index)}
                className={`px-4 py-2 border transition-all text-sm ${
                  activePhase === index
                    ? "border-accent bg-accent/10 text-accent"
                    : "border-border text-muted-foreground hover:border-accent/50"
                }`}
              >
                {phase.phase}
              </button>
            ))}
          </div>

          {/* Phase Content */}
          <div className="space-y-4">
            {viconiaPhases[activePhase].items.map((item, index) => (
              <div key={index} className="bg-card border border-border p-6">
                <h4 className="font-semibold tracking-wide mb-3 text-primary">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.content}</p>
              </div>
            ))}
          </div>

          {/* Rescue */}
          <div className="mt-6 bg-chart-5/10 border border-chart-5/30 p-4">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-chart-5 shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                <span className="text-chart-5 font-semibold">Rettung fuer die Spieler:</span> Kel&apos;Zar - ein junger Drow-Diener, 
                der von den Spielern in einer frueheren Begegnung verschont wurde - warnt sie, bevor der Dolch in ihren Ruecken faehrt.
              </p>
            </div>
          </div>
        </div>

        {/* Mine Aspects */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center tracking-wide">Aspekte in der Mine</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {mineAspects.map((aspect, index) => (
              <div key={index} className="bg-card border border-border p-6">
                <h4 className="font-semibold tracking-wide mb-3 text-primary">{aspect.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{aspect.description}</p>
                <div className="p-3 bg-secondary/30">
                  <p className="text-xs text-muted-foreground">
                    <span className="text-primary font-medium">Mechanik:</span> {aspect.mechanic}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* The Dilemma */}
        <div className="bg-accent/10 border border-accent/30 p-6 mb-12">
          <div className="flex items-start gap-4">
            <Target className="w-6 h-6 text-accent shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-accent mb-2">Das Dilemma: Die Waechterfledermaeuse</h4>
              <p className="text-muted-foreground">
                Die Desmodu kooperieren nur, wenn die Spieler GLEICHZEITIG ihre Waechterfledermaus-Bruten aus einem 
                hochgesicherten Kaefig nahe der Urophion-Patrouillenroute befreien. Das zwingt die Gruppe, sich zu teilen 
                oder eine brillante Ablenkung zu inszenieren.
              </p>
            </div>
          </div>
        </div>

        {/* Final Image - The Escape */}
        <div className="bg-card border border-border p-8">
          <h3 className="text-xl font-semibold mb-6 text-center text-primary tracking-wide">Das finale Bild: Die Flugschneise</h3>
          <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground leading-relaxed text-center">
            &quot;Der einzige Ausweg aus der Mine fuehrt durch einen alten Vulkanschacht, der senkrecht drei Meilen in die Freiheit 
            aufsteigt. In dem Moment, in dem der Trank nachlaesst und die Desmodu ihre wahre Groesse und Fluegelspannweite 
            zurueckgewinnen, entfaltet sich ein episches Bild: Dutzende der riesigen Fledermausmenschen entfalten ihre gewaltigen 
            Schwingen und tragen die Spieler in einem stummen, majestaetischen Schwarm durch die absolute Finsternis empor, waehrend 
            tief unter ihnen die Rache der Drow und der Illithiden in violetten Blitzen explodiert.&quot;
          </blockquote>
        </div>
      </div>
    </section>
  )
}
