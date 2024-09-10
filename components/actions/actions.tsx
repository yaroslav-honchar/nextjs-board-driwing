"use client"

import { Link2Icon, PencilIcon, TrashIcon } from "lucide-react"
import React from "react"
import { toast } from "sonner"
import { ConfirmModal } from "@/components/modals/confirm-modal/confirm-modal"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { api } from "@/convex/_generated/api"
import { useApiMutation } from "@/hooks/use-api-mutation"
import { ClientRoutes } from "@/routes/client.route"
import { useRenameModal } from "@/store/use-rename-modal"
import type { IActionsProps } from "./actions.props"

export const Actions: React.FC<IActionsProps> = ({ id, side, title, sideOffset, children }) => {
  const { onOpen: onOpenRenameModal } = useRenameModal()
  const { mutate, isPending } = useApiMutation(api.board.remove)

  const onCopyLinkClick = () => {
    navigator.clipboard
      .writeText(`${window.location.origin}${ClientRoutes.board(id)}`)
      .then(() => {
        toast.success("Link copied")
      })
      .catch(() => {
        toast.error("Failed to copy link")
      })
  }

  const onRenameClick = () => {
    onOpenRenameModal({ id, title })
  }

  const onRemoveClick = () => {
    mutate({ id })
      .then(() => {
        toast.success("Board removed")
      })
      .catch(() => {
        toast.error("Failed to remove the board")
      })
  }

  const menuItems = [
    {
      icon: Link2Icon,
      label: "Copy link",
      onClick: onCopyLinkClick,
      disabled: isPending,
    },
    {
      icon: PencilIcon,
      label: "Rename",
      onClick: onRenameClick,
      disabled: isPending,
    },
  ]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
      <DropdownMenuContent
        side={side}
        sideOffset={sideOffset}
        onClick={(event) => event.stopPropagation()}
      >
        {menuItems.map(({ icon: Icon, label, disabled, onClick }) => (
          <DropdownMenuItem
            key={label}
            className={"flex gap-2 items-center p-1 px-2 cursor-pointer w-full"}
            onClick={onClick}
            disabled={disabled}
          >
            <Icon className={"size-4"} />
            {label}
          </DropdownMenuItem>
        ))}

        <ConfirmModal
          onConfirm={onRemoveClick}
          header={"Are you sure to delete the board?"}
          description={"The board will be permanently deleted."}
          disabled={isPending}
        >
          <Button
            className={"flex gap-2 items-center justify-start p-1 px-2 cursor-pointer w-full h-auto hover:bg-red-100"}
            disabled={isPending}
            variant={"ghost"}
          >
            <TrashIcon className={"size-4"} />
            Remove
          </Button>
        </ConfirmModal>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
