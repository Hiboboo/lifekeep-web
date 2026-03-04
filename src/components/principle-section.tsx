export function PrincipleSection() {
  return (
    <section className="flex justify-center border-t border-border px-6 py-20 md:py-28">
      <div className="max-w-xl">
        <h2 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl">
          We never overwrite.
        </h2>
        <ul className="mt-8 flex flex-col gap-5">
          <li className="flex items-start gap-3">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span className="text-base leading-relaxed text-muted-foreground">
              Every edit creates a new version. Nothing is ever silently
              replaced.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span className="text-base leading-relaxed text-muted-foreground">
              If two devices edit the same entry, both versions are preserved
              side by side.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1.5 block h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span className="text-base leading-relaxed text-muted-foreground">
              You decide what to keep. The system never makes that choice for
              you.
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}
