import React from "react"
import { Canvas } from "./_components/canvas/canvas"
import { Room } from "./_components/room/room"
import type { IBoardIdPageProps } from "./page.props"

const BoardIdPage: React.FC<IBoardIdPageProps> = ({ params: { boardId } }) => {
  return (
    <Room roomId={boardId}>
      <Canvas boardId={boardId} />
    </Room>
  )
}

export default BoardIdPage
