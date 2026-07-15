'use client'

import React, { useState } from 'react'

export type InteractiveFormProps = {
  children: React.ReactNode
  successMessage?: string
  className?: string
  accentColor?: string
}

export function InteractiveForm({
  children,
  successMessage = "Thank you! Your submission was successful.",
  className = "",
  accentColor = "bg-stone-900 text-stone-50"
}: InteractiveFormProps) {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <div className="w-full bg-black/10 dark:bg-white/5 border border-white/10 p-6 rounded-2xl text-center animate-fade-up">
        <p className="text-lg font-semibold">Success!</p>
        <p className="text-sm opacity-80 mt-1">{successMessage}</p>
        <button
          onClick={() => setSubmitted(false)}
          className={`mt-4 px-5 py-2 text-xs font-semibold rounded-lg transition-colors hover:opacity-90 ${accentColor}`}
        >
          Submit another request
        </button>
      </div>
    )
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <form onSubmit={handleSubmit} className={className}>
      {children}
    </form>
  )
}
