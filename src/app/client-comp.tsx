"use client"

import { toast } from "sonner"

export function ClientComp() {
  return (
    <button
      className="cursor-pointer"
      onClick={() => {
        toast("Hello world!", { closeButton: false })
      }}
    >
      Render a Toast
    </button>
  )
}
