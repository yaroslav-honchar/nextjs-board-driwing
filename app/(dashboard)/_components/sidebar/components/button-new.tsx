"use client"

import { PlusIcon } from "lucide-react"
import React from "react"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

export const ButtonNew: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className={"aspect-square"}>
          <button
            className={
              "bg-white/25 size-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition"
            }
            type={"button"}
            aria-label={"Create new"}
          >
            <PlusIcon className={"size-5 text-white"} />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent></DialogContent>
    </Dialog>
  )
}
