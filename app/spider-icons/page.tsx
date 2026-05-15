"use client"

import { useState } from "react"
import { SpiderIcons } from "@/components/spider-icons"
import { SpiderIcon } from "@/components/spider-icon"

export default function SpiderIconsDemo() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <div className="min-h-screen bg-background text-foreground p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-serif text-primary mb-2 text-center">
          Spinnen-Icon Varianten
        </h1>
        <p className="text-muted-foreground text-center mb-8">
          10 Varianten im gleichen minimalistischen Stil
        </p>

        {/* Original Icon */}
        <div className="mb-12">
          <h2 className="text-lg font-medium text-muted-foreground mb-4 text-center">
            Original Icon
          </h2>
          <div className="flex justify-center">
            <div className="flex flex-col items-center gap-2 p-6 rounded-lg border border-border bg-card">
              <SpiderIcon className="w-12 h-12 text-primary" />
              <span className="text-xs text-muted-foreground">SpiderIcon</span>
            </div>
          </div>
        </div>

        {/* All Variants */}
        <h2 className="text-lg font-medium text-muted-foreground mb-4 text-center">
          Alle 10 Varianten
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 mb-12">
          {SpiderIcons.map((Icon, index) => (
            <button
              key={index}
              onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
              className={`flex flex-col items-center gap-2 p-4 rounded-lg border transition-all ${
                selectedIndex === index
                  ? "border-primary bg-primary/10"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <Icon className="w-10 h-10 text-primary" />
              <span className="text-xs text-muted-foreground">#{index + 1}</span>
            </button>
          ))}
        </div>

        {/* Size Comparison */}
        <h2 className="text-lg font-medium text-muted-foreground mb-4 text-center">
          Verschiedene Groessen
        </h2>
        
        <div className="flex flex-wrap justify-center items-end gap-6 p-6 rounded-lg border border-border bg-card mb-12">
          {[16, 24, 32, 48, 64].map((size) => {
            const Icon = selectedIndex !== null ? SpiderIcons[selectedIndex] : SpiderIcon
            return (
              <div key={size} className="flex flex-col items-center gap-2">
                <Icon className={`text-primary`} style={{ width: size, height: size }} />
                <span className="text-xs text-muted-foreground">{size}px</span>
              </div>
            )
          })}
        </div>

        {/* Usage Example */}
        <h2 className="text-lg font-medium text-muted-foreground mb-4 text-center">
          Verwendungsbeispiel
        </h2>
        
        <div className="flex justify-center">
          <div className="flex flex-col items-center gap-3 p-8 rounded-lg border border-border bg-card">
            {(() => {
              const Icon = selectedIndex !== null ? SpiderIcons[selectedIndex] : SpiderIcon
              return <Icon className="w-8 h-8 text-primary" />
            })()}
            <h3 className="text-2xl font-serif text-primary tracking-wider">
              ZAL&apos;TORYN
            </h3>
            <p className="text-sm text-muted-foreground">
              Klicke oben auf ein Icon um es hier zu sehen
            </p>
          </div>
        </div>

        {/* Code Snippet */}
        {selectedIndex !== null && (
          <div className="mt-8 p-4 rounded-lg border border-border bg-card">
            <p className="text-sm text-muted-foreground mb-2">Import:</p>
            <code className="text-sm text-primary">
              {`import { SpiderIcon${selectedIndex + 1} } from "@/components/spider-icons"`}
            </code>
          </div>
        )}
      </div>
    </div>
  )
}
