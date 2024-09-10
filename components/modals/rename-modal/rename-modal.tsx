"use client"

import type { FormEvent } from "react"
import React, { useEffect, useState } from "react"
import { toast } from "sonner"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { api } from "@/convex/_generated/api"
import { useApiMutation } from "@/hooks/use-api-mutation"
import { useRenameModal } from "@/store/use-rename-modal"

export const RenameModal: React.FC = () => {
  const { mutate, isPending } = useApiMutation(api.board.update)
  const {
    isOpen,
    onClose,
    initialValues: { id, title },
  } = useRenameModal()
  const [titleValue, setTitleValue] = useState<string>(title)

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const newTitle = titleValue.trim()

    if (!newTitle) {
      toast("Board title should not be empty")
      return
    } else if (newTitle.length > 60) {
      toast("Board title should not be longer than 60 characters")
      return
    } else if (newTitle === title) {
      onClose()
      return
    }

    mutate({ id, title: newTitle })
      .then(() => {
        onClose()
        toast.success("Board renamed")
      })
      .catch(() => {
        toast.error("Failed to rename the board")
      })
  }

  useEffect(() => {
    setTitleValue(title)
  }, [title])

  return (
    <Dialog
      open={isOpen}
      onOpenChange={onClose}
    >
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit board title</DialogTitle>
        </DialogHeader>
        <DialogDescription>Enter a new title for the board</DialogDescription>
        <form
          className={"flex flex-col gap-5"}
          onSubmit={onSubmit}
        >
          <Input
            value={titleValue}
            disabled={isPending}
            required
            maxLength={60}
            onChange={({ target }) => setTitleValue(target.value)}
            placeholder={"Board title"}
          />

          <DialogFooter className={"gap-3"}>
            <DialogClose asChild>
              <Button
                variant={"secondary"}
                disabled={isPending}
                type={"button"}
              >
                Cancel
              </Button>
            </DialogClose>
            <Button
              type={"submit"}
              disabled={isPending}
            >
              Save
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  )
}
