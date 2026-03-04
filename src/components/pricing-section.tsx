"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

type Vote = "yes" | "maybe" | "no" | null

export function PricingSection() {
  const [vote, setVote] = useState<Vote>(null)

  return (
    <section className="flex justify-center border-t border-border px-6 py-20 md:py-28">
      <div className="max-w-xl text-center">
        <h2 className="font-serif text-2xl tracking-tight text-foreground md:text-3xl">
          Would you pay $2.99/month for this?
        </h2>
        {vote === null ? (
          <div className="mt-8 flex items-center justify-center gap-3">
            <Button
              variant="default"
              size="sm"
              className="min-w-20 rounded-lg text-sm"
              onClick={() => setVote("yes")}
            >
              Yes
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="min-w-20 rounded-lg text-sm"
              onClick={() => setVote("maybe")}
            >
              Maybe
            </Button>
            <Button
              variant="secondary"
              size="sm"
              className="min-w-20 rounded-lg text-sm"
              onClick={() => setVote("no")}
            >
              No
            </Button>
          </div>
        ) : (
          <p className="mt-8 text-sm text-muted-foreground">
            Thanks for your feedback.
          </p>
        )}
      </div>
    </section>
  )
}
