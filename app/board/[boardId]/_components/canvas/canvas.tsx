"use client"

import React from "react"
import { Info } from "./components/info/info"
import { Participants } from "./components/participants"
import { Toolbar } from "./components/toolbar"
import type { ICanvasProps } from "./canvas.props"

export const Canvas: React.FC<ICanvasProps> = ({ boardId }) => {
  return (
    <main className={"size-full relative bg-neutral-100 touch-none"}>
      <Info boardId={boardId} />
      <Participants />
      <Toolbar />
    </main>
  )
}
