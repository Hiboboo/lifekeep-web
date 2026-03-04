import { Smartphone, Globe, X } from "lucide-react"

export function PlatformSection() {
  return (
    <section className="flex justify-center border-t border-border px-6 py-20 md:py-28">
      <div className="max-w-xl">
        <h2 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl">
          Current Status
        </h2>
        <div className="mt-8 flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <Smartphone className="h-4 w-4 text-foreground" />
            <span className="text-sm text-foreground">
              Android app
            </span>
            <span className="ml-auto rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
              Primary
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Globe className="h-4 w-4 text-foreground" />
            <span className="text-sm text-foreground">
              Web access
            </span>
            <span className="ml-auto rounded-md bg-secondary px-2 py-0.5 text-xs font-medium text-muted-foreground">
              Emergency + Export
            </span>
          </div>
          <div className="flex items-center gap-3">
            <X className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">
              iOS not available yet
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
