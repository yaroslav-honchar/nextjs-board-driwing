import { PlusIcon } from "lucide-react"
import React from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { OrganizationProfile } from "@clerk/nextjs"

export const InviteMember: React.FC = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className={"gap-2 border-muted border shadow-none text-muted-foreground"}
          variant={"outline"}
          size={"sm"}
        >
          <PlusIcon className={"size-5"} />
          <span className={"max-sm:hidden"}>Invite members</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0 bg-transparent border-none w-fit max-w-fit">
        <DialogTitle className={"sr-only"}>Invite member</DialogTitle>
        <DialogDescription className={"sr-only"}>Invite member</DialogDescription>
        <OrganizationProfile routing={"hash"} />
      </DialogContent>
    </Dialog>
  )
}
