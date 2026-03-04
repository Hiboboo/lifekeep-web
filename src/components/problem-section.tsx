export function ProblemSection() {
  return (
    <section className="flex justify-center px-6 py-20 md:py-28">
      <div className="max-w-xl">
        <h2 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl text-balance">
          Have you ever lost something you wrote?
        </h2>
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Most sync systems silently resolve conflicts by choosing one version
          over another. If you edit the same journal entry on two devices
          before syncing, one of those edits may be quietly discarded. You
          might never notice until you go looking for something that is simply
          no longer there.
        </p>
      </div>
    </section>
  )
}
