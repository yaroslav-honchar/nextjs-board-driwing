"use client"

import { PlusIcon } from "lucide-react"
import React from "react"
import { Hint } from "@/components/hint/hint"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CreateOrganization } from "@clerk/nextjs"

export const OrganizationCreate: React.FC<{ triggerText?: string }> = ({ triggerText = false }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="aspect-square">
          <Hint
            label={"Create new organization"}
            align={"center"}
            side={"right"}
            sideOffset={18}
            toRender={!triggerText}
          >
            <Button
              className={triggerText ? "gap-2" : "size-10"}
              aria-label={"Create new organization"}
              aria-expanded="false"
              size={triggerText ? "default" : "icon"}
              variant={"secondary"}
            >
              <PlusIcon className={triggerText ? "size-4" : "size-5"} />
              {triggerText && <>{triggerText}</>}
            </Button>
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
