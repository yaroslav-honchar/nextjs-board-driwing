"use client"

import { PlusIcon } from "lucide-react"
import React from "react"
import { Hint } from "@/components/hint/hint"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CreateOrganization } from "@clerk/nextjs"

export const OrganizationCreate: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint
            label={"Create new organization"}
            align={"center"}
            side={"right"}
            sideOffset={18}
          >
            <button
              className="bg-white/25 size-full rounded-md flex items-center justify-center opacity-60 hover:opacity-100 transition"
              type="button"
              aria-label={"Create new organization"}
              aria-expanded="false"
            >
              <PlusIcon className="size-5 text-white" />
            </button>
          </Hint>
        </div>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none w-fit max-w-[30rem]">
        <DialogDescription className={"sr-only"}>Create new organization</DialogDescription>
        <DialogTitle className={"sr-only"}>Create new organization</DialogTitle>
        <CreateOrganization
          routing={"hash"}
          appearance={{
            elements: {
              rootBox: "relative z-[0]",
            },
          }}
        />
      </DialogContent>
    </Dialog>
  )
}
