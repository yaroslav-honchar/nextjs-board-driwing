import { PlusIcon } from "lucide-react"
import React from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"

export const InvateButton: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"}>
          <PlusIcon className={"size-5"} />
          Invite members
        </Button>
      </DialogTrigger>
    </Dialog>
  )
}
