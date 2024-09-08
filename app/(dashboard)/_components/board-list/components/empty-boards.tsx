import React from "react"
import { Button } from "@/components/ui/button"
import { CenteredScreenMessage } from "@/components/ui/centered-screen-message"
import Image from "next/image"

export const EmptyBoards: React.FC = () => {
  return (
    <CenteredScreenMessage>
      <Image
        className={"object-contain object-center mb-4"}
        src={"/no-boards.svg"}
        alt={"No boards"}
        width={200}
        height={200}
        priority={true}
      />
      <h2 className={"text-2xl font-semibold"}>Create your first board!</h2>
      <p className={"text-center text-muted-foreground"}>Start by creating your a first board for your organization</p>
      <div>
        <Button variant={"secondary"}>Create board</Button>
      </div>
    </CenteredScreenMessage>
  )
}
