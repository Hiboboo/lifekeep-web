// src/components/hero-section.tsx
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return

    setStatus("loading")
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      })

      if (res.ok) {
        setStatus("success")
        // 将邮箱存入本地，后续投票时可以带上，精准关联用户画像
        localStorage.setItem("lifekeep_lead_email", email) 
      } else {
        setStatus("error")
      }
    } catch (error) {
      setStatus("error")
    }
  }

  return (
    <section className="flex flex-col items-center justify-center px-6 pt-32 pb-24 md:pt-44 md:pb-32">
      <h1 className="max-w-2xl text-center font-serif text-4xl leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
        A journal that never overwrites your data.
      </h1>
      <p className="mt-6 max-w-md text-center text-base leading-relaxed text-muted-foreground md:text-lg">
        End-to-end encrypted. Conflict-safe sync. Android-first.
      </p>
      
      <div className="mt-10 flex flex-col items-center gap-4 w-full max-w-sm">
        {status === "success" ? (
          <div className="rounded-lg bg-primary/10 px-6 py-4 text-center text-sm font-medium text-primary">
            Thanks! We'll notify you when early access begins.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full flex-col gap-3 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 bg-background"
              disabled={status === "loading"}
            />
            <Button
              type="submit"
              size="lg"
              disabled={status === "loading"}
              className="h-12 rounded-lg px-8 text-sm font-medium tracking-wide sm:w-auto"
            >
              {status === "loading" ? "Joining..." : "Join Early Access"}
            </Button>
          </form>
        )}
        <span className="text-xs text-muted-foreground">
          Currently in validation phase.
        </span>
      </div>
    </section>
  )
}