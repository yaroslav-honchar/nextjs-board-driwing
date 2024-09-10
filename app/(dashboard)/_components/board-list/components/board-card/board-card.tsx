"use client"

import { formatDistanceToNow } from "date-fns"
import { MoreHorizontalIcon, StarIcon } from "lucide-react"
import React from "react"
import { Actions } from "@/components/actions/actions"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { ClientRoutes } from "@/routes/client.route"
import { useAuth } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import type { IBoardCardProps } from "./board-card.props"

export const BoardCard: React.FC<IBoardCardProps> = ({
  id,
  title,
  authorName,
  createdAt,
  imageUrl,
  authorId,
  isFavorite,
}) => {
  const { userId } = useAuth()
  const authorLabel = authorId === userId ? "You" : authorName
  const createdAtLabel = formatDistanceToNow(new Date(createdAt), { addSuffix: true })

  const onFavoriteClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()
  }

  const onActionClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()
  }

  return (
    <Link
      href={ClientRoutes.board(id)}
      className={"group aspect-[100/127] border rounded-lg flex flex-col justify-between overflow-hidden"}
    >
      <span className={"block relative flex-1 bg-amber-50"}>
        <Image
          className={"object-center object-cover"}
          src={imageUrl}
          alt={title}
          fill
        />
        <div className={"block opacity-0 group-hover:opacity-50 transition-opacity size-full bg-black"} />
        <Actions
          id={id}
          title={title}
          side={"bottom"}
          sideOffset={12}
        >
          <Button
            className={
              "absolute top-2 right-2 lg:opacity-0 lg:pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all lg:text-white size-6"
            }
            variant={"ghost"}
            size={"icon"}
            onClick={onActionClick}
            asChild
          >
            <MoreHorizontalIcon className={"size-4"} />
          </Button>
        </Actions>
      </span>
      <span className={"flex flex-col gap-y-2 relative bg-white p-3 rounded-lg"}>
        <span className={"flex items-center justify-between gap-3"}>
          <span className={"truncate w-full"}>{title}</span>
          <Button
            className={"p-0 size-6 min-w-6 min-h-6"}
            variant={"ghost"}
            size={"icon"}
            onClick={onFavoriteClick}
          >
            <StarIcon className={cn("size-3", isFavorite ? "text-yellow-500 fill-yellow-500" : "text-gray-400")} />
          </Button>
        </span>
        <span className={"text-sm text-muted-foreground truncate "}>
          By {authorLabel}, {createdAtLabel}
        </span>
      </span>
    </Link>
  )
}
