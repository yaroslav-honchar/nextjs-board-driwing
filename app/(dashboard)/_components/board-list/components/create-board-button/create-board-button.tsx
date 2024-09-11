"use client"

import { PlusIcon } from "lucide-react"
import React from "react"
import { toast } from "sonner"
import { api } from "@/convex/_generated/api"
import { useApiMutation } from "@/hooks/use-api-mutation"
import { cn } from "@/lib/utils"
import { ClientRoutes } from "@/routes/client.route"
import { useRouter } from "next/navigation"
import type { ICreateBoardButtonProps } from "./create-board-button.props"

export const CreateBoardButton: React.FC<ICreateBoardButtonProps> = ({ orgId, disabled }) => {
  const router = useRouter()
  const { mutate, isPending } = useApiMutation<typeof api.board.create._args, typeof api.board.create._returnType>(
    api.board.create,
  )

  const onClick = async () => {
    if (isPending || disabled) {
      return
    }

    await mutate({ orgId, title: "Untitled" })
      .then((id) => {
        toast.success("Board created successfully", {
          duration: 115000,
        })

        router.push(ClientRoutes.board(id))
      })
      .catch(() => {
        toast.error("Failed to create board")
      })
  }

  return (
    <button
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 text-white flex flex-col items-center justify-center p-6 transition-colors",
        (isPending || disabled) && "!text-gray-600 !bg-gray-200 cursor-not-allowed",
      )}
      type={"button"}
      disabled={isPending || disabled}
      onClick={onClick}
    >
      <span />
      <PlusIcon className={"size-12 stroke-1"} />
      <p className={"text-sm font-light"}>Create board</p>
    </button>
  )
}
