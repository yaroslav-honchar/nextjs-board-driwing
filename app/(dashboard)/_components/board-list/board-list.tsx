"use client"

import React from "react"
import { EmptyBoards } from "./components/empty-boards"
import { EmptyFavorites } from "./components/empty-favorites"
import { EmptySearch } from "./components/empty-search"
import type { IBoardListProps } from "./board-list.props"

export const BoardList: React.FC<IBoardListProps> = ({ query }) => {
  const data = [] // TODO: Fetch data

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
    <div>
      <p>Boards found</p>
    </div>
  )
}
