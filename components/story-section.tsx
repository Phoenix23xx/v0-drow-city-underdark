"use client"

import { useState } from "react"
import { AlertTriangle, Clock, Eye, Shield, HelpCircle } from "lucide-react"
import Image from "next/image"

const faqs = [
  {
    question: "Wie koennen 2,50 Meter grosse Fledermaus-Monster als Drow durchgehen?",
    answer: "Sie laufen stark gebueckt und tragen schwere Sklavenketten, die ihre Haltung rechtfertigen. Ihre Fluegel sind eng an den Koerper geschnallt und unter dicken, modrigen Sklavenroben verborgen. Die Magie verzerrt zudem die visuelle Wahrnehmung der Wachen."
  },
  {
    question: "Spueren die Mind Flayer nicht die fremden Gedanken der Desmodu?",
    answer: "Normalerweise ja. Deshalb arbeiten die Desmodu nur in den tiefsten Edelsteinminen, die von dicken Schichten aus Blei und Psi-daempfenden Erzen umgeben sind. Die Illithiden meiden diese dreckigen Minen und verlassen sich auf die Berichte der Drow."
  },
  {
    question: "Warum rebellieren die Desmodu nicht selbst, sie sind doch extrem stark?",
    answer: "Die Drow halten ihre geliebten Waechterfledermaeuse (Guard Bats) in separaten Kaefigen gefangen. Wenn die Desmodu meutern, werden ihre Reittiere und ihre Kinder sofort hingerichtet. Sie brauchen Aussenstehende, die beide Orte gleichzeitig befreien."
  }
]

const disguiseDetails = [
  {
    title: "Trank der Fleischformung",
    type: "Alchemie",
    description: "Die Desmodu werden gezwungen, eine zaehe, alchemistische Fluessigkeit zu trinken. Diese staucht ihre Knochen temporaer zusammen und laesst ihre Haut aschgrau werden. Das verursacht extreme Schmerzen, haelt aber fuer 48 Stunden an und verstroemet keine magische Aura, da es ein physischer (aussermagischer) Effekt ist."
  },
  {
    title: "Amulette der Gedankenleere",
    type: "Halsbaender",
    description: "Die Desmodu-Anfuehrer tragen grobe Sklavenhalsbaender, in die winzige Splitter von Gedankenschirm-Kristallen eingearbeitet sind. Diese blockieren die telepathische Ortung der Mind Flayer, wirken fuer Aussenstehende aber wie billiger Schrott."
  }
]

export function StorySection() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  return (
    <section id="story" className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-wide mb-4">Die Story</h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Die Drow-Stadt Zul&apos;Chamber wird insgeheim von einem Zirkel aus drei Mind Flayern (Illithiden) kontrolliert, 
            die den Drow-Matronenmuettern im Schatten Befehle erteilen.
          </p>
        </div>

        {/* Main Story Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {/* Story Text */}
          <div className="bg-card border border-border p-8">
            <h3 className="text-xl font-semibold mb-6 text-primary tracking-wide">Die Illithiden-Verschwoerung</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Die Illithiden nutzen die Stadt als <span className="text-foreground font-medium">Gehirn-Farm und Experimentierlabor</span>.
              </p>
              <p>
                Vor Kurzem haben die Drow eine Zuflucht der gutmuetigen, fledermausartigen <span className="text-primary">Desmodu</span> ueberfallen 
                und die Ueberlebenden versklavt. Die Drow-Priesterinnen wissen jedoch, dass Mind Flayer die hochintelligenten 
                Gehirne von Desmodu als Delikatesse betrachten und deren maechtige Echoortung fuerchten.
              </p>
              <p>
                Um ihre wertvollen &quot;Arbeitstiere&quot; vor dem Hunger der Illithiden zu schuetzen, haben die Drow sie 
                <span className="text-accent font-medium"> magisch als Drow-Sklaven verkleidet</span> und lassen sie in den tiefsten Minen schuften.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-card border border-border p-8">
            <h3 className="text-xl font-semibold mb-6 text-primary tracking-wide">Der Auftrag</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Die Spieler werden von einem <span className="text-foreground font-medium">entkommenen Desmodu-Spaeher</span> angeheuert.
              </p>
              <p className="text-foreground font-medium">Seine Bitte:</p>
              <ul className="space-y-2 ml-4">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">1.</span>
                  <span>In die Stadt eindringen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">2.</span>
                  <span>Die magische Taeuschung aufrechterhalten (damit die Illithiden nichts merken)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">3.</span>
                  <span>Die Desmodu-Gefangenen bewaffnen</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">4.</span>
                  <span>Einen Massenausbruch anzetteln</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Time Pressure Warning */}
        <div className="bg-accent/10 border border-accent/30 p-6 mb-16">
          <div className="flex items-start gap-4">
            <div className="p-2 bg-accent/20 text-accent">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-semibold text-accent mb-2">Tickende Uhr</h4>
              <p className="text-muted-foreground">
                Die Desmodu muessen alle <span className="text-accent font-bold">48 Stunden</span> einen neuen Trank trinken. 
                Die naechste &quot;Transformation&quot; findet in <span className="text-accent font-bold">24 Stunden</span> statt - 
                der perfekte Moment fuer einen Massenausbruch, <span className="text-foreground">ODER</span> der Moment, 
                in dem die Tarnung auffliegt, wenn die Spieler nicht handeln.
              </p>
            </div>
          </div>
        </div>

        {/* Disguise Mechanics */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center tracking-wide">Die magische Tarnung der Desmodu</h3>
          <p className="text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
            Die Drow nutzen keine permanenten Illusionszauber, da die Gedankenschinder magische Auren sofort per Mindesgespuer riechen wuerden.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {disguiseDetails.map((detail) => (
              <div key={detail.title} className="bg-card border border-border p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-5 h-5 text-primary" />
                  <div>
                    <h4 className="font-semibold tracking-wide">{detail.title}</h4>
                    <p className="text-xs text-primary">{detail.type}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{detail.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center tracking-wide">Haeufige Spielerfragen</h3>
          <div className="space-y-3 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border bg-card">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full flex items-start gap-4 p-4 text-left hover:bg-secondary/30 transition-colors"
                >
                  <HelpCircle className={`w-5 h-5 mt-0.5 shrink-0 ${expandedFaq === index ? "text-primary" : "text-muted-foreground"}`} />
                  <span className={`font-medium tracking-wide ${expandedFaq === index ? "text-primary" : "text-foreground"}`}>
                    {faq.question}
                  </span>
                </button>
                {expandedFaq === index && (
                  <div className="px-4 pb-4 pl-13">
                    <p className="text-sm text-muted-foreground leading-relaxed ml-9">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
