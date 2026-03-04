// src/components/pricing-section.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

type Vote = "yes" | "maybe" | "no" | null

export function PricingSection() {
  const [vote, setVote] = useState<Vote>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleVote = async (selectedVote: Vote) => {
    if (!selectedVote || isSubmitting) return

    setIsSubmitting(true)
    try {
      const email = localStorage.getItem("lifekeep_lead_email")

      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answer: selectedVote,
          ...(email && { email }), 
        }),
      })
      
      setVote(selectedVote)
    } catch (error) {
      console.error("Failed to submit vote", error)
    } finally {
      setIsSubmitting(false)
    }
  }

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
              disabled={isSubmitting}
              className="min-w-20 rounded-lg text-sm"
              onClick={() => handleVote("yes")}
            >
              Yes
            </Button>
            <Button
              variant="secondary"
              size="sm"
              disabled={isSubmitting}
              className="min-w-20 rounded-lg text-sm"
              onClick={() => handleVote("maybe")}
            >
              Maybe
            </Button>
            <Button
              variant="secondary"
              size="sm"
              disabled={isSubmitting}
              className="min-w-20 rounded-lg text-sm"
              onClick={() => handleVote("no")}
            >
              No
            </Button>
          </div>
        ) : (
          <p className="mt-8 text-sm text-muted-foreground animate-in fade-in slide-in-from-bottom-2">
            Thanks for your feedback.
          </p>
        )}
      </div>
    </section>
  )
}