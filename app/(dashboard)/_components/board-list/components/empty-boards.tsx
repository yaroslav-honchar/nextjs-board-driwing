"use client"

import React from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import { CenteredScreenMessage } from "@/components/ui/centered-screen-message"
import { api } from "@/convex/_generated/api"
import { useApiMutation } from "@/hooks/use-api-mutation"
import { ClientRoutes } from "@/routes/client.route"
import { useOrganization } from "@clerk/nextjs"
import Image from "next/image"
import { useRouter } from "next/navigation"

export const EmptyBoards: React.FC = () => {
  const router = useRouter()
  const { organization } = useOrganization()
  const { mutate, isPending } = useApiMutation<typeof api.board.create._args, typeof api.board.create._returnType>(
    api.board.create,
  )

  const onClick = () => {
    if (!organization) {
      return
    }

    mutate({
      orgId: organization.id,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created successfully")
        router.push(ClientRoutes.board(id))
      })
      .catch(() => {
        toast.error("Failed to create board")
      })
  }

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
        <Button
          variant={"secondary"}
          onClick={onClick}
          disabled={isPending}
        >
          Create board
        </Button>
      </div>
    </CenteredScreenMessage>
  )
}
