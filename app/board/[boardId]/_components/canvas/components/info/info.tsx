"use client"

import { MoreVertical } from "lucide-react"
import React from "react"
import { Actions } from "@/components/actions/actions"
import { Hint } from "@/components/hint/hint"
import { Logo } from "@/components/logo/logo"
import { Button } from "@/components/ui/button"
import { api } from "@/convex/_generated/api"
import { useRenameModal } from "@/store/use-rename-modal"
import { useQuery } from "convex/react"
import type { IInfoProps } from "./info.props"

export const Info: React.FC<IInfoProps> = ({ boardId }) => {
  const data = useQuery(api.board.get, {
    id: boardId,
  })
  const { onOpen } = useRenameModal()

  if (!data) {
    return null
  }

  const onTitleButtonClick = () => {
    onOpen({
      id: data._id,
      title: data.title,
    })
  }

  return (
    <div className={"absolute top-2 left-2 bg-white rounded-md px-1.5 h-12 flex gap-3 items-center shadow-md"}>
      <Logo
        className={"text-lg"}
        imageProps={{
          src: "/icon.svg",
          alt: data.title,
          width: 40,
          height: 40,
        }}
      />
      <Hint
        label={"Rename the board"}
        side={"bottom"}
        sideOffset={12}
      >
        <Button
          className={"block truncate w-full max-w-32 lg:max-w-60"}
          variant={"ghost"}
          onClick={onTitleButtonClick}
        >
          {data.title}
        </Button>
      </Hint>

      <Actions
        id={data._id}
        title={data.title}
      >
        <Button
          variant={"ghost"}
          size={"icon"}
        >
          <MoreVertical className={"size-5"} />
        </Button>
      </Actions>
    </div>
  )
}
