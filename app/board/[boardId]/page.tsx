import React from "react"
import { Canvas } from "./_components/canvas/canvas"
import type { IBoardIdPageProps } from "./page.props"

const BoardIdPage: React.FC<IBoardIdPageProps> = ({ params: { boardId } }) => {
  return <Canvas boardId={boardId} />
}

export default BoardIdPage
