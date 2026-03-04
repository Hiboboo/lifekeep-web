import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="flex flex-col items-center justify-center px-6 pt-32 pb-24 md:pt-44 md:pb-32">
      <h1 className="max-w-2xl text-center font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
        A journal that never overwrites your data.
      </h1>
      <p className="mt-6 max-w-md text-center text-base leading-relaxed text-muted-foreground md:text-lg">
        End-to-end encrypted. Conflict-safe sync. Android-first.
      </p>
      <div className="mt-10 flex flex-col items-center gap-4">
        <Button
          size="lg"
          className="rounded-lg px-8 py-3 text-sm font-medium tracking-wide"
        >
          Join Early Access
        </Button>
        <span className="text-xs text-muted-foreground">
          Currently in validation phase.
        </span>
      </div>
    </section>
  )
}
