import { Lock, FileOutput, ServerOff } from "lucide-react"

export function PrivacySection() {
  return (
    <section className="flex justify-center border-t border-border px-6 py-20 md:py-28">
      <div className="max-w-xl">
        <h2 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl">
          Your life. Your key.
        </h2>
        <div className="mt-8 flex flex-col gap-6">
          <div className="flex items-start gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
              <Lock className="h-4 w-4 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                End-to-end encryption
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Entries are encrypted on your device before they ever leave it.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
              <ServerOff className="h-4 w-4 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                Server cannot read entries
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                We store ciphertext. Without your key, your data is meaningless
                to us.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
              <FileOutput className="h-4 w-4 text-foreground" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                Export your data
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                Your journal is always exportable. No lock-in, no barriers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
