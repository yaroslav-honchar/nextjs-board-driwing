"use client"

import React from "react"
import { Info } from "./components/info"
import { Participants } from "./components/participants"
import { Toolbar } from "./components/toolbar"
import type { ICanvasProps } from "./canvas.props"

export const Canvas: React.FC<ICanvasProps> = () => {
  return (
    <main className={"size-full relative bg-neutral-100 touch-none"}>
      <Info />
      <Participants />
      <Toolbar />
    </main>
  )
}
