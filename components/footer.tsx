import { SpiderIcon } from "./spider-icon"

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <SpiderIcon className="w-6 h-6 text-primary" />
            <span className="font-semibold tracking-wide">Zal&apos;Toryn</span>
          </div>

          <p className="text-sm text-muted-foreground text-center">
            Kampagnenmaterial fuer D&D 3.5 - Die Stadt der Tausend Spinnen im Underdark
          </p>

          <p className="text-xs text-muted-foreground">
            Dungeons & Dragons ist ein eingetragenes Warenzeichen von Wizards of the Coast
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            &ldquo;Lolth&apos;s Wille ist unser Gesetz&rdquo;
          </p>
        </div>
      </div>
    </footer>
  )
}
