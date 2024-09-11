"use client"

import React from "react"
import { api } from "@/convex/_generated/api"
import { BoardCard } from "./components/board-card/board-card"
import { BoardCardSkeleton } from "./components/board-card/board-card-sceleton"
import { BoardGrid } from "./components/board-grid"
import { CreateBoardButton } from "./components/create-board-button/create-board-button"
import { EmptyBoards } from "./components/empty-boards"
import { EmptyFavorites } from "./components/empty-favorites"
import { EmptySearch } from "./components/empty-search"
import { useQuery } from "convex/react"
import type { IBoardListProps } from "./board-list.props"

export const BoardList: React.FC<IBoardListProps> = ({ query, orgId }) => {
  const data = useQuery(api.boards.get, { orgId: orgId })

  if (data === undefined) {
    return (
      <BoardGrid>
        <CreateBoardButton
          orgId={orgId}
          disabled={true}
        />
        <BoardCardSkeleton />
        <BoardCardSkeleton />
        <BoardCardSkeleton />
        <BoardCardSkeleton />
        <BoardCardSkeleton />
      </BoardGrid>
    )
  }

  if (data.length === 0 && query.search) {
    return <EmptySearch searchText={query.search} />
  }

  if (data.length === 0 && query.favorites) {
    return <EmptyFavorites />
  }

  if (data.length === 0) {
    return <EmptyBoards />
  }

  return (
    <>
      <h2 className={"text-3xl"}>{query.favorites ? "Favorites" : "Team"} boards</h2>
      <BoardGrid>
        <CreateBoardButton orgId={orgId} />

        {data.map(({ _id, title, orgId, authorId, authorName, imageUrl, _creationTime, isFavorite }) => {
          return (
            <BoardCard
              key={_id}
              id={_id}
              title={title}
              orgId={orgId}
              authorId={authorId}
              authorName={authorName}
              imageUrl={imageUrl}
              createdAt={_creationTime}
              isFavorite={isFavorite}
            />
          )
        })}
      </BoardGrid>
    </>
  )
}
