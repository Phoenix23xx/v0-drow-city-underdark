"use client"

import { useState } from "react"
import { Quote, AlertTriangle, Crown, Sword, FlaskConical, Coins, UserX, Users, Eye, BookOpen, Feather } from "lucide-react"

const mainNpcs = [
  {
    name: "Matronenmutter Ki'atira",
    house: "Haus Baenre-Zweig",
    icon: Crown,
    description: "Sie sitzt auf einer schwebenden Obsidian-Plattform, umgeben von vier riesigen Spinnen-Wachen. Sie traegt eine Robe aus lebenden, sich windenden Schatten. Sie blickt mit eisiger Verachtung auf die Strassen hinab und peitscht gelangweilt einen Sklaven, der ihre Plattform traegt.",
    type: "threat"
  },
  {
    name: "Waffenmeister Jarlax",
    house: "Haus Xorlarrin",
    icon: Sword,
    description: "Ein einaeugiger, extrem durchtrainierter Drow in einer Schuppenruestung, die das Feenfeuer-Licht reflektiert. Er steht auf einem Trainingsplatz und wirft im Sekundentakt Dolche auf ein sich drehendes Rad, an das ein lebender Goblin gekettet ist.",
    type: "threat"
  },
  {
    name: "Alchemistin Viconia Xorlarrin",
    house: "Hauptantagonistin",
    icon: FlaskConical,
    description: "Eine von Saeurenarben gezeichnete Drow, die in einem offenen Ladenlabor mit brodelnden, violetten Fluessigkeiten hantiert. Die Spieler sehen, wie sie einem veraengstigten, riesigen Sklaven (einem unvollstaendig transformierten Desmodu) eine zaehe Fluessigkeit einfloesst, woraufhin sich dessen Knochen knirschend zusammenziehen.",
    type: "threat",
    special: {
      title: "Viconias Vision",
      content: "Vor drei Naechten traeumte Viconia von Lolth selbst. Die Goettin zeigte ihr das Bild einer zersplitternden Spinne, aus deren Leib vier fremde Gestalten krochen - die Spieler. Eine Stimme fluesterte: 'Die Fremden sind die Axt. Fuehre sie, und der Thron ist dein.'"
    },
    quest: {
      title: "Ihr Auftrag an die Spieler",
      content: "\"In meinen Edelsteinminen ist ein Saboteur. Ein Sklave, der die Stollen zum Einsturz bringt. Findet ihn, toetet ihn, und ich schenke euch eine Handvoll Rubine. Versagt ihr, werden eure Schaedel meinen Thron schmuecken.\""
    },
    warning: "Viconia plant, die Spieler nach vollbrachter Tat von ihren eigenen loyalen Truppen gefangen nehmen zu lassen. Sie wird der Stadt verkuenden, dass sie die Eindringlinge aufgespuert und eliminiert hat."
  },
  {
    name: "Sklavenhaendler Druuk",
    house: "Haus Duskryn",
    icon: Coins,
    description: "Ein fetter, fuer Drow-Verhaeltnisse ungewoehnlich breiter Mann, der auf einer riesigen Echse reitet. Er zieht eine Kette von zwanzig Sklaven hinter sich her. Er bruellt Befehle und schlaegt mit einer Peitsche, die bei jedem Treffer kleine elektrische Blitze abgibt.",
    type: "threat"
  },
  {
    name: "Solaufein",
    house: "Gehirngewaschener Spion - FALLE!",
    icon: UserX,
    description: "Er sitzt in einer dunklen Ecke des 'Singenden Chitins', die Kapuze tief ins Gesicht gezogen. Seine Haende zittern leicht, waehrend er an einem Becher Pilzbier nippt. Er blickt sich staendig paranoid um und murmelt leise vor sich hin, als wuerde er Stimmen hoeren.",
    type: "trap",
    warning: "Solaufein wurde von den Mind Flayern mit falschen Erinnerungen freigelassen, um Abenteurer in eine Falle zu locken. Selbst Gedanken lesen zeigt nur seine 'echte' falsche Erinnerung. Sense Motive SG 25: Mundwinkel zucken unkontrolliert."
  }
]

const informants = [
  {
    name: "Valthar",
    subtitle: "Der desertierte Minen-Aufseher",
    icon: Eye,
    wants: "Zwei hochgradig reine Edelsteine (je 1.000 GM), um sich eine Passage an die Oberwelt zu erkaufen.",
    report: "\"In den Tiefenminen arbeiten Kreaturen, die wie geduckte Drow aussehen, aber keine sind. Die Drow nennen sie 'Stummes Erz'. Sie tragen schwere Kapuzen und duerfen nie in die Naehe der Illithiden-Patrouillen. Ihr Blut leuchtet blau im Dunkeln. Der Eingang ist hinter dem grossen Schmelzofen.\"",
    lie: "Valthar selbst hat einen Desmodu aus Angst erschlagen. Das blaue Blut findet sich noch an seinen Stiefeln."
  },
  {
    name: "Nedra",
    subtitle: "Die traumatisierte Ex-Sklavin",
    icon: BookOpen,
    wants: "Eine Dosis Schlafmohn-Extrakt oder einen 'Beruhigung'-Zauber, der ihren Verstand beruhigt.",
    report: "\"Die Waende in den tiefen Gaengen schreien. Nicht laut - im Kopf. Die Sklaven haben alle denselben Albtraum: ein Kaefig voller riesiger Fledermaeuse, die wie Kinder weinen. Ich weiss den Weg, weil ich die Traenke von Fleischformer Viconia dorthin karren musste.\"",
    lie: "\"Im Zentrum steht ein Berg aus purem, fluessigem Silber. Wenn du hineinschaust, siehst du die Gesichter aller, die jemals dort gestorben sind.\" - In Wirklichkeit ist dies das Schleimbecken des Aeltesten-Gehirns. Die Gesichter sind Halluzinationen.",
    tip: "Nedras 'schreiende Waende' sind Psionik-Adern der Mind Flayer. Ihre Albtraeume stammen von einem versteckten Urophion, das ihre Gedanken liest."
  },
  {
    name: "Solaufein",
    subtitle: "Der Gehirngewaschene Spion (FALLE!)",
    icon: UserX,
    wants: "Er will, dass die Spieler ihn 'retten' und eskortieren. Spielt den verzweifelten Verbuendeten.",
    report: "\"Die Minen sind eine Ablenkung. Das Herz der Rebellion ist ein versteckter Schrein unter dem Sklavenmarkt. Ich kenne den geheimen Eingang. Lasst uns sofort dorthin gehen!\"",
    lie: "Der 'Schrein' ist ein Hinterhalt der Mind Flayer. Sense Motive SG 25: Mundwinkel zucken unkontrolliert. Sein Verstand ist so versiegelt, dass selbst Gedanken lesen nur seine 'echte' falsche Erinnerung zeigt."
  }
]

const desmodu = [
  {
    name: "Aranel",
    role: "Die geschickte Fallenstellerin & Spurleserin",
    icon: Eye,
    personality: "Schweigsam, beobachtend, effizient. Sie spricht kaum - laesst ihre Handlungen sprechen.",
    useful: "Spieler, die den sichersten Weg durch die Mine suchen oder Fallen entschaerfen wollen."
  },
  {
    name: "Lyris",
    role: "Die junge, neugierige Jaegerin",
    icon: Feather,
    personality: "Ueberschwaenglich, stellt viele Fragen, hat keine Angst vor Fremden. Sie ist eine Bruecke.",
    useful: "Informationsbeschaffung ueber die Waechterfledermaeuse in den Kaefigen."
  },
  {
    name: "Taron",
    role: "Der besonnene Aeltester & Geschichtenerzaehler",
    icon: BookOpen,
    personality: "Spricht langsam und bedaechtig. Jedes Wort hat Gewicht. Taron entscheidet, ob die Gemeinschaft den Spielern vertraut.",
    useful: "Der Schluessel zur Kooperation. Nur er kann den Massenausbruch autorisieren."
  }
]

const typeColors = {
  threat: "border-accent",
  neutral: "border-primary",
  ally: "border-chart-5",
  trap: "border-destructive"
}

export function NPCsSection() {
  const [activeTab, setActiveTab] = useState<"main" | "informants" | "desmodu">("main")

  return (
    <section id="nscs" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">Wichtige NSCs</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Die Schluesselfiguren in Zul&apos;Chamber - von den Matronenmuettern bis zu den versklavten Desmodu.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab("main")}
            className={`px-4 py-2 border transition-all tracking-wide text-sm ${
              activeTab === "main"
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:border-primary/50"
            }`}
          >
            Hauptfiguren
          </button>
          <button
            onClick={() => setActiveTab("informants")}
            className={`px-4 py-2 border transition-all tracking-wide text-sm ${
              activeTab === "informants"
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:border-primary/50"
            }`}
          >
            Informanten
          </button>
          <button
            onClick={() => setActiveTab("desmodu")}
            className={`px-4 py-2 border transition-all tracking-wide text-sm ${
              activeTab === "desmodu"
                ? "border-primary bg-primary/10 text-primary"
                : "border-border text-muted-foreground hover:border-primary/50"
            }`}
          >
            Die Desmodu
          </button>
        </div>

        {/* Main NPCs */}
        {activeTab === "main" && (
          <div className="space-y-6">
            {mainNpcs.map((npc) => {
              const Icon = npc.icon
              return (
                <div 
                  key={npc.name}
                  className={`bg-card border-l-4 ${typeColors[npc.type as keyof typeof typeColors]} border border-border p-6`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-primary/10 text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold tracking-wide text-lg">{npc.name}</h3>
                      <p className="text-xs text-primary">{npc.house}</p>
                    </div>
                  </div>

                  <blockquote className="border-l-2 border-muted pl-4 mb-4 italic text-muted-foreground text-sm leading-relaxed">
                    {npc.description}
                  </blockquote>

                  {npc.special && (
                    <div className="p-4 bg-secondary/30 mb-4">
                      <p className="text-xs text-primary tracking-wide mb-1">{npc.special.title}</p>
                      <p className="text-sm text-muted-foreground">{npc.special.content}</p>
                    </div>
                  )}

                  {npc.quest && (
                    <div className="p-4 bg-primary/10 border border-primary/30 mb-4">
                      <p className="text-xs text-primary tracking-wide mb-1">{npc.quest.title}</p>
                      <p className="text-sm text-foreground italic">{npc.quest.content}</p>
                    </div>
                  )}

                  {npc.warning && (
                    <div className="flex items-start gap-2 p-3 bg-accent/10 border border-accent/30">
                      <AlertTriangle className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground">
                        <span className="text-accent font-semibold">Warnung:</span> {npc.warning}
                      </p>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        )}

        {/* Informants */}
        {activeTab === "informants" && (
          <div className="space-y-6">
            <div className="bg-accent/10 border border-accent/30 p-4 mb-6">
              <p className="text-sm text-muted-foreground">
                <span className="text-accent font-semibold">Achtung:</span> Alle drei Drow haben panische Angst, dass ihre Existenz auffliegt, 
                da auf die Weitergabe von Informationen ueber die Illithiden der sofortige Tod durch die Matronenmuetter folgt.
              </p>
            </div>

            {informants.map((info) => {
              const Icon = info.icon
              return (
                <div key={info.name} className="bg-card border border-border p-6">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-primary/10 text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-semibold tracking-wide text-lg">{info.name}</h3>
                      <p className="text-xs text-muted-foreground">{info.subtitle}</p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="p-3 bg-secondary/30">
                      <p className="text-xs text-primary tracking-wide mb-1">Was er/sie will</p>
                      <p className="text-sm text-muted-foreground">{info.wants}</p>
                    </div>
                    <div className="p-3 bg-secondary/30">
                      <p className="text-xs text-primary tracking-wide mb-1">Sein/Ihr Bericht</p>
                      <p className="text-sm text-muted-foreground italic">{info.report}</p>
                    </div>
                  </div>

                  <div className="p-3 bg-accent/10 border border-accent/30">
                    <p className="text-xs text-accent tracking-wide mb-1">Die Luege / Geheimnis (nur fuer SL)</p>
                    <p className="text-sm text-muted-foreground">{info.lie}</p>
                    {info.tip && (
                      <p className="text-sm text-primary mt-2">Tipp: {info.tip}</p>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* Desmodu */}
        {activeTab === "desmodu" && (
          <div>
            <div className="bg-card border border-border p-6 mb-8">
              <h3 className="text-xl font-semibold mb-4 text-primary tracking-wide">Wer sind die Desmodu?</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Die Desmodu sind ca. 2,40 bis 2,70 Meter grosse, muskuloese, fledermausartige Humanoide mit grossen Fluegeln, 
                die im Underdark leben. Sie besitzen echte Echoortung (Blindsight), nutzen exotische Doppelwaffen namens Notbora 
                und sind - anders als die meisten Unterreich-Bewohner - meist gutmuetig (Neutral Good) gesinnt.
              </p>
              <blockquote className="border-l-2 border-primary pl-4 italic text-muted-foreground text-sm leading-relaxed">
                &quot;Die Desmodu, die aus diesem Lager kommen, sind von schlanker, fast zerbrechlich wirkender Statur mit grossen, dunklen Augen. 
                Ihre Kleidung ist aus weichen, gegerbten Lederhaeuten gefertigt, oft verziert mit farbigen Perlen, die Glueck bringen sollen. 
                Ein suesslich-herber Geruch von Harz und Guano liegt staendig in der Luft.&quot;
              </blockquote>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {desmodu.map((d) => {
                const Icon = d.icon
                return (
                  <div key={d.name} className="bg-card border-l-4 border-chart-5 border border-border p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-chart-5/10 text-chart-5">
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold tracking-wide">{d.name}</h4>
                        <p className="text-xs text-chart-5">{d.role}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-3">{d.personality}</p>
                    <div className="p-2 bg-secondary/30">
                      <p className="text-xs text-muted-foreground">
                        <span className="text-primary">Nuetzlich fuer:</span> {d.useful}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* How to win their hearts */}
            <div className="bg-card border border-border p-6">
              <h4 className="font-semibold tracking-wide mb-4">Womit du ihr Herz gewinnst</h4>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&bull;</span>
                  <span>Echtes Interesse an ihren Reit- und Jagdtieren, ohne sie als blosse Werkzeuge zu betrachten. Ein respektvolles Wort oder ein angebotener Leckerbissen fuer eine Fledermaus oeffnet Herzen.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&bull;</span>
                  <span>Das Erzaehlen ferner Geschichten in Form von Liedern. Ein schoenes Lied wird mit Gastfreundschaft und seltenem Nektarwein belohnt.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">&bull;</span>
                  <span>Kleine, leuchtende oder glitzernde Geschenke. Nicht wegen des materiellen Werts, sondern weil sie an Sternenlicht erinnern - den Ursprung aller Flugtiere in ihrer Mythologie. Eine Handvoll bunter Glasperlen kann mehr bewirken als eine Truhe voll Gold.</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Legend */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-accent" />
            <span>Bedrohung</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-destructive" />
            <span>Falle</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-chart-5" />
            <span>Potenzieller Verbuendeter</span>
          </div>
        </div>
      </div>
    </section>
  )
}
