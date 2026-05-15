import { Volume2, Sparkles, BookOpen } from "lucide-react"

const sounds = [
  "Tropfendes Wasser von Stalaktiten",
  "Kratzen von Spinnenbeinen auf Stein",
  "Gedaempfte Befehle in Drow ('Xun dos zhaun!' - Wisst ihr das?)",
  "Fernes Grollen arkaner Energie",
  "Leises Wimmern aus den Sklavenbaracken"
]

const addresses = [
  { rank: "Matron", address: "Ilharess" },
  { rank: "Hohepriesterin", address: "Yathrin" },
  { rank: "Waffenmeister", address: "Qu'el'saruk" },
  { rank: "Erstgeborener", address: "Elderboy" }
]

const sampleNames = [
  { name: "Zykk aus Haus T'sarran", role: "Zweitgeborener Krieger" },
  { name: "Nathrae von Haus Xorlarrin", role: "Geweihte Magierin" },
  { name: "Solaufein der Namenlose", role: "Exilierter" }
]

const magicEffects = [
  "Continual Flame (violett) - ueberall, wirft unnatuerliche Schatten",
  "Unhallow (auf wichtigen Gebaeuden) - gebunden an Silence oder Dispel Magic",
  "Spider Climb-Krieger - patrouillieren an Decken und Waenden",
  "Detect Magic - routinemaessig an Eingaengen"
]

export function AtmosphereSection() {
  return (
    <section className="py-24 px-4 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">Atmosphaerische Details</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Elemente, um die Stadt lebendig wirken zu lassen - Geraeusche, Kultur und magische Umgebung.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sounds */}
          <div className="bg-background border border-border p-6">
            <div className="flex items-center gap-3 mb-6">
              <Volume2 className="w-6 h-6 text-primary" />
              <h3 className="font-semibold tracking-wide">Geraeuschkulisse</h3>
            </div>
            <ul className="space-y-3">
              {sounds.map((sound, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1">&#8226;</span>
                  <span>{sound}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Drow Culture */}
          <div className="bg-background border border-border p-6">
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-primary" />
              <h3 className="font-semibold tracking-wide">Drow-Kultur & Sprache</h3>
            </div>
            
            <p className="text-xs text-muted-foreground tracking-wide mb-3">Anreden</p>
            <div className="space-y-2 mb-6">
              {addresses.map((item, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{item.rank}</span>
                  <span className="text-primary font-mono">{item.address}</span>
                </div>
              ))}
            </div>

            <p className="text-xs text-muted-foreground tracking-wide mb-3">Beispiel-Namen</p>
            <div className="space-y-2">
              {sampleNames.map((item, index) => (
                <div key={index} className="text-sm">
                  <span className="text-foreground">{item.name}</span>
                  <span className="text-muted-foreground text-xs ml-2">({item.role})</span>
                </div>
              ))}
            </div>
          </div>

          {/* Magic Environment */}
          <div className="bg-background border border-border p-6">
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-6 h-6 text-primary" />
              <h3 className="font-semibold tracking-wide">Magische Umgebung</h3>
            </div>
            <ul className="space-y-3">
              {magicEffects.map((effect, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-primary mt-1">&#8226;</span>
                  <span>{effect}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
