export function SiteFooter() {
  return (
    <footer className="flex justify-center border-t border-border px-6 py-12">
      <div className="flex max-w-xl flex-col items-center gap-2 text-center">
        <span className="text-xs font-medium tracking-wide text-foreground">
          Lifekeep
        </span>
        <p className="text-xs text-muted-foreground">
          {'Privacy-first. Built independently.'}
        </p>
        <p className="text-xs text-muted-foreground">
          {'\u00A9 2026'}
        </p>
      </div>
    </footer>
  )
}
